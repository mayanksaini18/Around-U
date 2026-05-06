import { Router } from "express";
import type { Request, Response } from "express";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import Provider from "../models/Provider.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const reviewLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many reviews submitted. Try again tomorrow." },
});

const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(500).optional(),
});

router.post("/:id", reviewLimiter, validate(reviewSchema), async (req: Request, res: Response) => {
  const data = (req as any).validated as z.infer<typeof reviewSchema>;

  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) return res.status(404).json({ message: "Provider not found" });

    const prevTotal = provider.rating * provider.reviewCount;
    provider.reviewCount += 1;
    provider.rating = parseFloat(((prevTotal + data.rating) / provider.reviewCount).toFixed(2));
    await provider.save();

    res.json({ message: "success", rating: provider.rating, reviewCount: provider.reviewCount });
  } catch {
    res.status(400).json({ message: "Invalid provider ID" });
  }
});

export default router;
