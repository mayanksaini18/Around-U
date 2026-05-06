import mongoose, { Schema, Document } from "mongoose";

export interface IProvider extends Document {
  name: string;
  phone: string;
  pincode: string;
  location: string;
  service: string;
  serviceAliases: string[];
  city: string;
  bio?: string;
  rating: number;
  reviewCount: number;
  price?: string;
  image?: string;
  badges: string[];
  verified: boolean;
  available: boolean;
  geo?: { lat: number; lng: number };
}

const ProviderSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, index: true },
    location: { type: String, required: true },
    service: { type: String, required: true, lowercase: true, trim: true, index: true },
    serviceAliases: { type: [String], default: [], index: true },
    city: { type: String, required: true, lowercase: true, trim: true },
    bio: { type: String, maxlength: 300 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0, min: 0 },
    price: { type: String },
    image: { type: String },
    badges: { type: [String], default: [] },
    verified: { type: Boolean, default: false },
    available: { type: Boolean, default: true },
    geo: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { timestamps: true }
);

ProviderSchema.index({ pincode: 1, service: 1 });
ProviderSchema.index({ pincode: 1, serviceAliases: 1 });
ProviderSchema.index({ phone: 1, service: 1 }, { unique: true });

export default mongoose.model<IProvider>("Provider", ProviderSchema);
