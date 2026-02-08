"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, DollarSign, Clock, ShieldCheck } from "lucide-react";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
         {/* Background Glow - Adjusted for Light Mode */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] -z-10" />

         <div className="container mx-auto max-w-4xl text-center">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold uppercase tracking-wide mb-8">
               For Professionals
            </div> */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-black">
               EARN ON <br /> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">YOUR TERMS.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-medium">
               Join the hyperlocal revolution. No middlemen. No commissions. 
               Just you and your customers.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button className="h-14 px-10 rounded-full bg-black text-white hover:bg-gray-800 text-lg font-bold">
                  Join Now
               </Button>
               <Button variant="outline" className="h-14 px-10 rounded-full border-gray-300 text-black hover:bg-gray-50 text-lg">
                  How it works
               </Button>
            </div> */}
         </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
               
               {/* Card 1 */}
               <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200">
                  <div className="h-12 w-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                     <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">0% Commission</h3>
                  <p className="text-gray-600">
                     We don't take a cut of your hard work. Negotiate your own rates and keep 100% of what you earn.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200">
                  <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                     <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Flexible Schedule</h3>
                  <p className="text-gray-600">
                     Work when you want. Toggle your status to "Online" when you're free, and "Offline" when you're not.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200">
                  <div className="h-12 w-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                     <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Instant Trust</h3>
                  <p className="text-gray-600">
                     Our verified badge gives you instant credibility in your neighborhood, helping you get more clients.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* Simple Form Section */}
      <section className="py-24 px-4 bg-white">
         <div className="container mx-auto max-w-5xl bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-200 relative overflow-hidden shadow-sm">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                  <h2 className="text-4xl font-bold mb-6 text-black">Ready to start?</h2>
                  <p className="text-gray-600 mb-8 font-medium">
                     Fill out this form and we'll contact you within 24 hours for verification.
                  </p>
                  <ul className="space-y-4">
                     {["Aadhar Card Required", "Active Phone Number", "Skill Certificate (Optional)"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                           <CheckCircle2 className="h-5 w-5 text-green-600" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                  <div className="space-y-4">
                     <div>
                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                        <Input className="bg-white border-gray-200 h-12 rounded-xl text-black mt-1 focus:ring-black" placeholder="Ramesh Kumar" />
                     </div>
                     <div>
                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                        <Input className="bg-white border-gray-200 h-12 rounded-xl text-black mt-1 focus:ring-black" placeholder="+91 98765 43210" />
                     </div>
                     <div>
                        <label className="text-sm font-bold text-gray-700 ml-1">Your Skill</label>
                        <Input className="bg-white border-gray-200 h-12 rounded-xl text-black mt-1 focus:ring-black" placeholder="Plumber, Electrician, etc." />
                     </div>
                     <Button className="w-full h-14 bg-black text-white hover:bg-gray-800 rounded-xl text-lg font-bold mt-4">
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