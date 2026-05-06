"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiUrl } from "@/lib/api";

export default function ReviewForm({ providerId }: { providerId: string }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setStatus({ type: "error", message: "Please select a star rating." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch(apiUrl(`/api/review/${providerId}`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment: comment.trim() || undefined }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to submit review");
      setStatus({ type: "success", message: `Thanks! New rating: ${result.rating.toFixed(1)} (${result.reviewCount} reviews)` });
      setRating(0);
      setComment("");
    } catch (err) {
      setStatus({ type: "error", message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
      <h2 className="text-xl font-black text-gray-900 mb-1">Leave a Review</h2>
      <p className="text-sm text-gray-500 mb-6">Help others by rating this provider.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Star selector */}
        <div>
          <label className="text-sm font-bold text-gray-700 block mb-2">Your Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 transition-colors ${
                    star <= (hovered || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-200 fill-gray-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="text-sm font-bold text-gray-700 block mb-2">
            Comment <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 500))}
            placeholder="Great work, very professional..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-xs text-gray-400 mt-1 text-right">{comment.length}/500</p>
        </div>

        {status.message && (
          <div
            className={`p-3 rounded-xl text-sm font-medium ${
              status.type === "success" ? "bg-green-50 text-green-800 border border-green-100" : "bg-red-50 text-red-800 border border-red-100"
            }`}
          >
            {status.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={loading || rating === 0}
          className="w-full h-12 bg-black text-white hover:bg-gray-800 rounded-xl font-bold disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}
