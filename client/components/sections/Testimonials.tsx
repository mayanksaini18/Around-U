// components/sections/Testimonials.tsx
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Fixed my leaky tap for less than I expected. No fuss.",
    author: "Amit Patel",
    role: "Homeowner, Bangalore",
    rating: 5,
  },
  {
    quote: "The carpenter understood what I wanted and got it right the first time.",
    author: "Neha Singh",
    role: "Office Manager, Pune",
    rating: 5,
  },
  {
    quote: "Found a tutor for my son in my neighborhood. Couldn't ask for better.",
    author: "Vikram Desai",
    role: "Parent, Hyderabad",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Real feedback</h2>
          <p className="mt-4 text-gray-600">People trust Around-U because they hear from people like them.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg font-medium text-gray-900 mb-6">
                "{review.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full" /> {/* Avatar Placeholder */}
                <div>
                  <div className="font-semibold text-sm">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}