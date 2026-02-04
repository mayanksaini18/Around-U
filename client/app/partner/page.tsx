"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, DollarSign, Clock, ShieldCheck } from "lucide-react";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

         <div className="container mx-auto max-w-4xl text-center">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wide mb-8">
               For Professionals
            </div> */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
               EARN ON <br /> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">YOUR TERMS.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
               Join the hyperlocal revolution. No middlemen. No commissions. 
               Just you and your customers.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button className="h-14 px-10 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-bold">
                  Join Now
               </Button>
               <Button variant="outline" className="h-14 px-10 rounded-full border-white/20 text-white hover:bg-white/10 text-lg">
                  How it works
               </Button>
            </div> */}
         </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-zinc-900">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-black p-8 rounded-[2.5rem] border border-white/10">
                  <div className="h-12 w-12 bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                     <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">0% Commission</h3>
                  <p className="text-gray-400">
                     We don't take a cut of your hard work. Negotiate your own rates and keep 100% of what you earn.
                  </p>
               </div>
               <div className="bg-black p-8 rounded-[2.5rem] border border-white/10">
                  <div className="h-12 w-12 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                     <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Flexible Schedule</h3>
                  <p className="text-gray-400">
                     Work when you want. Toggle your status to "Online" when you're free, and "Offline" when you're not.
                  </p>
               </div>
               <div className="bg-black p-8 rounded-[2.5rem] border border-white/10">
                  <div className="h-12 w-12 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                     <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Instant Trust</h3>
                  <p className="text-gray-400">
                     Our verified badge gives you instant credibility in your neighborhood, helping you get more clients.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Simple Form Section */}
      <section className="py-24 px-4 bg-black">
         <div className="container mx-auto max-w-5xl bg-zinc-900 rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                  <h2 className="text-4xl font-bold mb-6">Ready to start?</h2>
                  <p className="text-gray-400 mb-8">
                     Fill out this form and we'll contact you within 24 hours for verification.
                  </p>
                  <ul className="space-y-4">
                     {["Aadhar Card Required", "Active Phone Number", "Skill Certificate (Optional)"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                           <CheckCircle2 className="h-5 w-5 text-green-500" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="bg-black p-8 rounded-3xl border border-white/10">
                  <div className="space-y-4">
                     <div>
                        <label className="text-sm font-bold text-gray-500 ml-1">Full Name</label>
                        <Input className="bg-zinc-900 border-zinc-800 h-12 rounded-xl text-white mt-1" placeholder="Ramesh Kumar" />
                     </div>
                     <div>
                        <label className="text-sm font-bold text-gray-500 ml-1">Phone Number</label>
                        <Input className="bg-zinc-900 border-zinc-800 h-12 rounded-xl text-white mt-1" placeholder="+91 98765 43210" />
                     </div>
                     <div>
                        <label className="text-sm font-bold text-gray-500 ml-1">Your Skill</label>
                        <Input className="bg-zinc-900 border-zinc-800 h-12 rounded-xl text-white mt-1" placeholder="Plumber, Electrician, etc." />
                     </div>
                     <Button className="w-full h-14 bg-white text-black hover:bg-gray-200 rounded-xl text-lg font-bold mt-4">
                        Submit Application
                     </Button>
                  </div>
               </div>
            </div>

         </div>
      </section>

      <Footer />
    </main>
  );
}