import type { Request, Response } from "express";
import { z } from "zod";
import Provider from "../models/Provider.js";
import { normalizeService } from "../lib/serviceAliases.js";

const querySchema = z.object({
  service: z.string().min(2),
  pincode: z.string().regex(/^\d{6}$/),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  nearby: z.coerce.boolean().optional(),
});

export const searchProviders = async (req: Request, res: Response) => {
  const parsed = querySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid query",
      errors: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
    });
  }

  const { service, pincode, page, limit, nearby } = parsed.data;
  const { canonical, aliases } = normalizeService(service);

  const serviceFilter = {
    $or: [{ service: canonical }, { serviceAliases: { $in: [canonical, ...aliases] } }],
  };

  try {
    const baseQuery = { ...serviceFilter, pincode };
    let providers = await Provider.find(baseQuery)
      .sort({ verified: -1, rating: -1, reviewCount: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    let total = await Provider.countDocuments(baseQuery);
    let usedNearby = false;

    if (providers.length === 0 && nearby !== false) {
      const prefix = pincode.slice(0, 3);
      const nearbyQuery = { ...serviceFilter, pincode: { $regex: `^${prefix}` } };
      providers = await Provider.find(nearbyQuery)
        .sort({ verified: -1, rating: -1, reviewCount: -1 })
        .limit(limit)
        .lean();
      total = providers.length;
      usedNearby = providers.length > 0;
    }

    res.json({
      message: "success",
      count: providers.length,
      total,
      page,
      limit,
      usedNearby,
      data: providers,
    });
  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
