import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  provider: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
}

const ReviewSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: Schema.Types.ObjectId, ref: "Provider", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

// Compound index to prevent multiple reviews from same user for same provider
ReviewSchema.index({ user: 1, provider: 1 }, { unique: true });
// Index on provider for fast retrieval of all reviews for a service
ReviewSchema.index({ provider: 1 });

export default mongoose.model<IReview>("Review", ReviewSchema);
