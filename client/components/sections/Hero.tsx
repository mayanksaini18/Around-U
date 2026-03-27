"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 text-center z-10 relative">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
        >
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest text-[10px]">Hyperlocal Infrastructure</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-black mb-6 leading-[0.85] font-heading"
        >
          ANY TASK. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">FAST.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto max-w-xl text-lg md:text-xl text-gray-500 mb-10 font-medium leading-relaxed"
        >
          Your neighborhood's operating system. <br className="hidden md:block"/>
          Connect with verified doers in <span className="text-black font-bold underline decoration-wavy decoration-blue-200">seconds</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Link href="/find-help">
            <Button className="h-16 px-10 rounded-full bg-black text-white text-xl font-black hover:scale-105 transition-all shadow-2xl hover:shadow-blue-500/20 active:scale-95">
              Find help now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/partner">
            <Button variant="outline" className="h-16 px-10 rounded-full border-2 border-gray-100 text-xl font-bold hover:bg-gray-50 active:scale-95 transition-all">
              Become a partner
            </Button>
          </Link>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center justify-center gap-8 grayscale hover:grayscale-0 transition-all duration-500"
        >
           <span className="text-sm font-black text-gray-400 tracking-[0.2em] uppercase">Trusted by 5,000+ Neighbors</span>
        </motion.div>
      </div>

      {/* Background Decor - Mesh Gradient & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-7xl opacity-30 blur-[120px] pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-300 rounded-full"></div>
      </div>
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear_gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}