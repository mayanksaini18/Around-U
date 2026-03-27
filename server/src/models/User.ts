import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // Optional for OAuth
  pincode: string;
  role: "user" | "admin" | "provider";
  savedProviders: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String },
    pincode: { type: String, required: true },
    role: { type: String, enum: ["user", "admin", "provider"], default: "user" },
    savedProviders: [{ type: Schema.Types.ObjectId, ref: "Provider" }],
  },
  { timestamps: true }
);

// Index for search/login
UserSchema.index({ email: 1 });
UserSchema.index({ pincode: 1 });

export default mongoose.model<IUser>("User", UserSchema);
