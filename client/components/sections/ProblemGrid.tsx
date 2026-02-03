// components/sections/ProblemGrid.tsx
import { X, Check, Star } from "lucide-react";

export default function ProblemGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            THE SYSTEM IS <span className="line-through decoration-red-500 decoration-4 text-gray-400">BROKEN</span>.
          </h2>
          <p className="text-xl text-gray-600">
            Finding help shouldn't involve calling 10 people or waiting for a callback that never comes.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 01: Speed */}
          <div className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
            <div className="absolute top-8 right-8 text-gray-200 text-6xl font-black z-0">01</div>
            <div className="relative z-10">
              <div className="h-12 w-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                <X className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Endless Calling</h3>
              <p className="text-gray-500 mb-6">
                "I called three plumbers. One didn't pick up, two are busy until next week."
              </p>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <Check className="h-5 w-5" /> <span>Around-U Solution</span>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  Broadcast your task. Only available workers respond in minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 02: Pricing */}
          <div className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
            <div className="absolute top-8 right-8 text-gray-200 text-6xl font-black z-0">02</div>
            <div className="relative z-10">
              <div className="h-12 w-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                <X className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Random Pricing</h3>
              <p className="text-gray-500 mb-6">
                "He quoted ₹500 on the phone but asked for ₹1200 after arriving."
              </p>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <Check className="h-5 w-5" /> <span>Around-U Solution</span>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  Negotiate upfront. Lock the price before work starts.
                </p>
              </div>
            </div>
          </div>

          {/* Card 03: Trust */}
          <div className="group relative bg-black text-white rounded-3xl p-8 shadow-2xl md:col-span-2 lg:col-span-1">
            <div className="absolute top-8 right-8 text-gray-700 text-6xl font-black z-0">03</div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <h3 className="text-2xl font-bold mb-3">The Trust Gap</h3>
                <p className="text-gray-400 mb-6">
                  Allowing strangers into your home is scary. Who are they? Are they safe?
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <p className="font-bold text-green-400 mb-1">100% Verified IDs</p>
                <p className="text-sm text-gray-400">
                  Every provider submits Aadhar & Phone verification before joining.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}