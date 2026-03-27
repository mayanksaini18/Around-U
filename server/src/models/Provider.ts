import mongoose, { Schema, Document } from "mongoose";

export interface IProvider extends Document {
  name: string;
  phone: string;
  pincode: string;
  location: string;
  service: string;
  city: string;
  bio?: string;
  rating: number;
  reviewCount: number;
}

const ProviderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    pincode: { type: String, required: true },
    location: { type: String, required: true },
    service: { type: String, required: true },
    city: { type: String, required: true },
    bio: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 🔥 performance index
ProviderSchema.index({ pincode: 1, service: 1 });
ProviderSchema.index({ rating: -1 }); // Index for sorting by top rated

export default mongoose.model<IProvider>("Provider", ProviderSchema);
