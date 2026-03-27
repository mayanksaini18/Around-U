"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-7 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between bg-white/70 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 w-full max-w-5xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center text-white font-black group-hover:bg-blue-600 transition-colors">U</div>
          <span className="text-2xl font-black tracking-tighter text-black hidden sm:block font-heading">Around-U</span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10 text-sm font-black text-gray-400 uppercase tracking-widest text-[10px]">
          <Link href="#" className="hover:text-black transition-colors">How it works</Link>
          <Link href="#" className="hover:text-black transition-colors">Safety</Link>
          <Link href="#" className="hover:text-black transition-colors">For Workers</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
           <Link href="#" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-black hidden sm:block transition-colors">Login</Link>
           <Button className="rounded-full bg-black text-white hover:bg-blue-600 px-8 py-6 text-sm font-black transition-all active:scale-95 shadow-xl hover:shadow-blue-500/20">
             Get the app
           </Button>
        </div>
      </nav>
    </motion.div>
  );
}