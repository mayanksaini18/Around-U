import dotenv from "dotenv";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Provider from "../models/Provider.js";
import { normalizeService } from "../lib/serviceAliases.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type SeedRow = {
  name: string;
  phone: string;
  service: string;
  pincode: string;
  location: string;
  city: string;
  rating?: number;
  reviewCount?: number;
  price?: string;
  bio?: string;
  badges?: string[];
  verified?: boolean;
};

async function run() {
  await connectDB();

  const fileArg = process.argv.find((a) => a.endsWith(".json"));
  const jsonFile = fileArg ?? "partners.json";
  const raw = await readFile(path.join(__dirname, jsonFile), "utf-8");
  const rows: SeedRow[] = JSON.parse(raw);

  const mode = process.argv.includes("--reset") ? "reset" : "upsert";

  if (mode === "reset") {
    await Provider.deleteMany({});
    console.log("Cleared existing providers");
  }

  const ops: any[] = rows.map((r) => {
    const { canonical, aliases } = normalizeService(r.service);
    const doc: Record<string, unknown> = {
      name: r.name,
      phone: r.phone,
      service: canonical,
      serviceAliases: aliases,
      pincode: r.pincode,
      location: r.location,
      city: r.city.toLowerCase(),
      rating: r.rating ?? 0,
      reviewCount: r.reviewCount ?? 0,
      badges: r.badges ?? [],
      verified: r.verified ?? false,
      available: true,
    };
    if (r.price) doc.price = r.price;
    if (r.bio) doc.bio = r.bio;
    return {
      updateOne: {
        filter: { phone: r.phone, service: canonical },
        update: { $set: doc },
        upsert: true,
      },
    };
  });

  const result = await Provider.bulkWrite(ops);
  console.log(
    `Seed complete — upserted ${result.upsertedCount}, modified ${result.modifiedCount}, total rows ${rows.length}`
  );

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
