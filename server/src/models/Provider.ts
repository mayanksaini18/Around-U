import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true }, // Verified via OTP later
  skills: [{ type: String }], // e.g., ["Plumber", "Carpenter"]
  
  // The "Hyperlocal" Secret Sauce: GeoJSON
  location: {
    type: {
      type: String,
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number], // [Longitude, Latitude] - Note the order!
      required: true
    }
  },
  
  bio: String,
  hourlyRate: Number, // Negotiable baseline
  isVerified: { type: Boolean, default: false }, // After Aadhar check
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 }
}, { timestamps: true });

// CRITICAL: Create a 2dsphere index for geospatial queries
providerSchema.index({ location: "2dsphere" });

export const Provider = mongoose.model("Provider", providerSchema);