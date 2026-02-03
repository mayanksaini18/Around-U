// components/sections/HowItWorks.tsx
import { Search, Phone, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="h-6 w-6 text-white" />,
    step: "Discovery",
    title: "Find help in minutes, not days.",
    desc: "Browse verified providers in your immediate neighborhood. Filter by skill, price, and real reviews.",
    image: "https://images.unsplash.com/photo-1581578731117-104f2a863a30?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    icon: <Phone className="h-6 w-6 text-white" />,
    step: "Negotiation",
    title: "Talk directly. No middleman.",
    desc: "Call or chat instantly. Agree on a fair price before the work starts. No hidden platform fees.",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    step: "Completion",
    title: "Work done. Trust built.",
    desc: "Pay exactly what you agreed. Leave a review to help your neighbors find the best people.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", // Replaced with a more "home/service" vibe
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Header Section - Big & Bold */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wide mb-6">
             How it works
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6 leading-[0.9]">
            FROM CHAOS <br />
            TO <span className="text-gray-400">DONE.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl">
            Three simple steps to bridge the gap between "I need help" and "Problem solved."
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col justify-between bg-gray-50 rounded-[2rem] border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              
              {/* Content Top */}
              <div className="p-8 relative z-20">
                
                {/* Step Number (Big Background Text) */}
                <div className="absolute top-4 right-6 text-8xl font-black text-gray-200/50 select-none pointer-events-none group-hover:text-gray-300/50 transition-colors">
                  {item.id}
                </div>

                {/* Icon Badge */}
                <div className="h-12 w-12 bg-black rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <span className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {item.step}
                </span>
                
                <h3 className="text-2xl font-bold leading-tight mb-3 text-black group-hover:underline decoration-2 underline-offset-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Image Section (Bottom) */}
              <div className="relative mt-6 px-4 pb-4 h-64 overflow-hidden">
                <div className="h-full w-full rounded-2xl overflow-hidden relative">
                   <img 
                    src={item.image}
                    alt={item.step}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Optional Connection Line (Visual Flourish) */}
        <div className="hidden lg:block absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10 pointer-events-none" />

      </div>
    </section>
  );
}