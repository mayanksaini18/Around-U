"use client";

import { X, Check, Star, Zap, ShieldCheck, Banknote } from "lucide-react";
import { motion } from "motion/react";

export default function ProblemGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#0070f3_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 font-heading">
            THE SYSTEM IS <span className="line-through decoration-blue-500 decoration-8 text-gray-300">BROKEN</span>.
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Finding help shouldn't involve calling 10 people or waiting for a callback that never comes. We built the cure.
          </p>
        </motion.div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 01: Speed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="absolute top-8 right-10 text-gray-50 text-8xl font-black z-0 group-hover:text-blue-50 transition-colors">01</div>
            <div className="relative z-10">
              <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                <Zap className="h-7 w-7 fill-blue-600/10" />
              </div>
              <h3 className="text-2xl font-black mb-4 font-heading">Endless Calling</h3>
              <p className="text-gray-400 mb-8 font-medium italic">
                "I called three plumbers. One didn't pick up, two are busy until next week."
              </p>
              <div className="pt-8 border-t border-gray-50">
                <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-wider">
                  <Check className="h-4 w-4 stroke-[3]" /> <span>The Around-U Way</span>
                </div>
                <p className="text-sm mt-3 text-gray-500 leading-relaxed">
                  Broadcast your task. Only available experts respond in minutes. No chasing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 02: Pricing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500"
          >
            <div className="absolute top-8 right-10 text-gray-50 text-8xl font-black z-0 group-hover:text-cyan-50 transition-colors">02</div>
            <div className="relative z-10">
              <div className="h-14 w-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-8 text-cyan-600 group-hover:scale-110 transition-transform duration-500">
                <Banknote className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black mb-4 font-heading">Random Pricing</h3>
              <p className="text-gray-400 mb-8 font-medium italic">
                "He quoted ₹500 on the phone but asked for ₹1200 after arriving."
              </p>
              <div className="pt-8 border-t border-gray-50">
                <div className="flex items-center gap-2 text-cyan-600 font-black text-sm uppercase tracking-wider">
                  <Check className="h-4 w-4 stroke-[3]" /> <span>Upfront Clarity</span>
                </div>
                <p className="text-sm mt-3 text-gray-500 leading-relaxed">
                  Negotiate and lock the price before they even start their bike.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 03: Trust */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-black text-white rounded-[2rem] p-10 shadow-2xl md:col-span-2 lg:col-span-1 overflow-hidden"
          >
            <div className="absolute top-8 right-10 text-white/5 text-8xl font-black z-0 group-hover:text-white/10 transition-colors">03</div>
            
            {/* Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="h-14 w-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 text-blue-400">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-black mb-4 font-heading">The Trust Gap</h3>
                <p className="text-gray-400 mb-8 font-medium">
                  Allowing strangers into your home is scary. We removed the fear by verifying every person on the platform.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <p className="font-black text-blue-400 mb-1 flex items-center gap-2">
                   <Star className="h-4 w-4 fill-current" /> 100% VERIFIED
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Aadhar, Phone, and Face verification completed for every partner.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}