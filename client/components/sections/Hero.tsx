// components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 text-center z-10 relative">
        
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Live in Indiranagar</span>
        </div> */}

        {/* Main Heading - The "Sayzo" Style */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6 leading-[0.9]">
          ANY TASK. <br />
          <span className="text-gray-400">ANY MOMENT.</span>
        </h1>

        <p className="mx-auto max-w-xl text-lg md:text-xl text-gray-600 mb-10 font-medium leading-relaxed">
          The hyperlocal infrastructure for your neighborhood. <br className="hidden md:block"/>
          Connect with verified doers in <span className="text-black font-bold underline decoration-wavy decoration-yellow-400">5 minutes</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="h-14 px-8 rounded-full bg-black text-white text-lg font-semibold hover:scale-105 transition-transform">
            Find help now
          </Button>
          <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-gray-200 text-lg font-semibold hover:bg-gray-50">
            Become a partner
          </Button>
        </div>

        {/* Social Proof Strip */}
        <div className="flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Replace with actual partner logos or trusted badges */}
           <span className="text-xl font-bold text-gray-400">TRUSTED BY 500+ NEIGHBORS</span>
        </div>
      </div>

      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear_gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}