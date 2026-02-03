// components/sections/Testimonials.tsx
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Fixed my leaky tap for less than I expected. No fuss.",
    author: "Amit Patel",
    role: "Homeowner, Indiranagar",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The carpenter understood what I wanted and got it right the first time.",
    author: "Neha Singh",
    role: "Manager, Koramangala",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    featured: true, // We will style this one differently
  },
  {
    quote: "Found a tutor for my son in my neighborhood. Couldn't ask for better.",
    author: "Vikram Desai",
    role: "Parent, HSR Layout",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-wide mb-6">
             Social Proof
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            REAL PEOPLE. <br />
            <span className="text-gray-400">REAL HELP.</span>
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-[2.5rem] flex flex-col justify-between transition-transform hover:-translate-y-2 duration-300 ${
                review.featured 
                  ? "bg-black text-white shadow-2xl scale-105 z-10" // Featured Card Style
                  : "bg-gray-50 text-black border border-gray-200"   // Standard Card Style
              }`}
            >
              {/* Quote Icon Background */}
              <Quote className={`absolute top-8 right-8 h-12 w-12 opacity-20 ${review.featured ? 'text-gray-500' : 'text-gray-300'}`} />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 fill-current ${review.featured ? "text-yellow-400" : "text-black"}`} 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`text-xl font-bold leading-snug mb-8 ${review.featured ? "text-gray-100" : "text-gray-800"}`}>
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-dashed border-gray-500/30">
                <div className={`p-1 rounded-full ${review.featured ? "bg-white/10" : "bg-white border"}`}>
                  <img 
                    src={review.image}
                    alt={review.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-base">{review.author}</div>
                  <div className={`text-xs font-medium uppercase tracking-wider ${review.featured ? "text-gray-400" : "text-gray-500"}`}>
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Metric - Bottom */}
        <div className="mt-20 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Trusted by 500+ neighbors in your area
            </p>
        </div>

      </div>
    </section>
  );
}