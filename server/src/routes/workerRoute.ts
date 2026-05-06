import { Router } from "express";
import type { Request, Response } from "express";
import { z } from "zod";
import rateLimit from "express-rate-limit";

import Provider from "../models/Provider.js";
import { validate } from "../middleware/validate.js";
import { normalizeService } from "../lib/serviceAliases.js";

const router = Router();

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many registration attempts. Try again later." },
});

const registerSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^(\+?91)?[6-9]\d{9}$/, "Invalid Indian phone number"),
  service: z.string().min(2).max(40),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
  location: z.string().min(2).max(120),
  city: z.string().min(2).max(60),
  bio: z.string().max(300).optional(),
  price: z.string().max(30).optional(),
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const provider = await Provider.findById(req.params.id).lean();
    if (!provider) return res.status(404).json({ message: "Provider not found" });
    res.json({ message: "success", data: provider });
  } catch {
    res.status(400).json({ message: "Invalid provider ID" });
  }
});

router.post(
  "/register",
  registerLimiter,
  validate(registerSchema),
  async (req: Request, res: Response) => {
    const data = (req as any).validated as z.infer<typeof registerSchema>;
    const { canonical, aliases } = normalizeService(data.service);

    try {
      const existing = await Provider.findOne({ phone: data.phone, service: canonical });
      if (existing) {
        return res.status(409).json({ message: "Already registered for this service" });
      }

      const provider = await Provider.create({
        name: data.name,
        phone: data.phone,
        service: canonical,
        serviceAliases: aliases,
        pincode: data.pincode,
        location: data.location,
        city: data.city,
        ...(data.bio && { bio: data.bio }),
        ...(data.price && { price: data.price }),
      });
      res.status(201).json({ message: "success", data: provider });
    } catch (error: any) {
      if (error?.code === 11000) {
        return res.status(409).json({ message: "Already registered for this service" });
      }
      console.error("Registration Error:", error);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

router.patch("/:id/availability", async (req: Request, res: Response) => {
  const { available } = req.body;
  if (typeof available !== "boolean") {
    return res.status(400).json({ message: "available must be a boolean" });
  }
  try {
    const provider = await Provider.findByIdAndUpdate(
      req.params.id,
      { available },
      { new: true, select: "name available" }
    );
    if (!provider) return res.status(404).json({ message: "Provider not found" });
    res.json({ message: "success", data: provider });
  } catch {
    res.status(400).json({ message: "Invalid provider ID" });
  }
});

export default router;
