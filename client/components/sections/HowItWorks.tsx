// components/sections/HowItWorks.tsx
import { Search, Phone, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="h-6 w-6 text-white" />,
    step: "Search",
    title: "Type your service and pincode.",
    desc: "Enter what you need — plumber, electrician, cleaner — and your pincode. We show you who's available nearby right now.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    icon: <Phone className="h-6 w-6 text-white" />,
    step: "Call",
    title: "Call directly. No forms, no bots.",
    desc: "See the worker's name, service, location, and price. Hit Call Now and speak to them directly. No middlemen, no platform markup.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    step: "Done",
    title: "Agree on terms. Get it done.",
    desc: "Settle the price directly with the worker before they arrive. Pay them directly when the job is done. That's it.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wide mb-6">
            How it works
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6 leading-[0.9]">
            SEARCH. CALL. <br />
            <span className="text-green-500">DONE.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl">
            Three steps. No downloads required on web. No accounts needed to search.
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
                {/* Step Number */}
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
                    className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Line */}
        <div className="hidden lg:block absolute top-[40%] left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
