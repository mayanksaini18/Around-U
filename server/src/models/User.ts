import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String, required: true, unique: true },
  savedLocations: [{
    name: String, // "Home", "Office"
    lat: Number,
    lng: Number
  }]
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);