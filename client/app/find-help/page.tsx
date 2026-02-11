"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search,MapPin, Star, Phone, Filter, ArrowUpRight ,MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Plumber", "Electrician", "Carpenter", "Cleaner", "Painter", "Tutor"];

export default function FindHelpPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [pincode, setPincode] = useState("");
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {

  if (!activeCategory || !pincode) {
    alert("Please enter service and pincode");
    return;
  }
      setLoading(true);
      try {
        
        const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/search?service=${activeCategory.toLowerCase()}&pincode=${pincode}`
);

        const result = await res.json();
        if(res.ok){
         setProviders(result.data);
        } else {
          alert(result.message);
          setProviders([]);
        }
      } catch (error) {
        console.error("Failed to fetch providers", error);
        setProviders([]);
      } finally {
        setLoading(false);
      }
    };
  

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />
      <Link href="/">
      </Link>

      {/* Sticky Search Header */}
      <section className="pt-32 pb-8 px-4 bg-white top-0 z-30 shadow-sm border-b border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            WHO DO YOU NEED?
          </h1>
          
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
             <div className="relative flex-grow">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
               <Input 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                 placeholder="Search for 'Plumber' or 'AC Repair'..." 
                 className="h-14 pl-12 rounded-full text-lg border-gray-200 bg-gray-50 focus:bg-white transition-all"
               />
             </div>
             <div className="relative md:w-1/3">
               <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
               <Input 
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                 placeholder="pincode" 
                 className="h-14 pl-12 rounded-full text-lg border-gray-200 bg-gray-50 focus:bg-white transition-all"
               />
             </div>
             <Button 
                onClick={handleSearch}
                className="h-14 px-8 rounded-full bg-black text-white hover:bg-gray-800 text-lg font-bold">
               Search
             </Button>
          </div>

          {/* Categories
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? "bg-black text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 px-4 container mx-auto max-w-5xl">
         <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">
              {providers.length} Providers near <span className="underline decoration-wavy decoration-yellow-400">Indiranagar</span>
            </h2>
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
               <Filter className="h-4 w-4" /> Filters
            </Button>
         </div>

         {loading ? (
           <div className="text-center py-20">Loading providers...</div>
         ) : (
         <div className="grid md:grid-cols-2 gap-6">
            {providers.map((provider: any) => (
              <div key={provider._id} className="group bg-white rounded-[2rem] p-6 border border-gray-200 hover:shadow-xl hover:border-black/10 transition-all duration-300 flex flex-col sm:flex-row gap-6">
                 
                 {/* Left: Image & Rating */}
                 <div className="flex flex-col items-center sm:items-start">
                    <div className="relative h-24 w-24 rounded-2xl overflow-hidden mb-3">
                       <img src={provider.image || "https://via.placeholder.com/150"} alt={provider.name} className="h-full w-full object-cover" />
                       
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                       <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                       {/* <span className="text-sm font-bold">{provider.rating}</span> */}
                       {/* <span className="text-xs text-gray-500">({provider.reviewCount})</span> */}
                    </div>
                 </div>

                 {/* Right: Info */}
                 <div className="flex-grow flex flex-col justify-between">
                    <div>
                       <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{provider.service}</span>
                            <h3 className="text-xl font-bold text-gray-900 leading-tight">{provider.name}</h3>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-black">{provider.price}</div>
                            <div className="text-xs text-gray-500 flex items-center justify-end gap-1">
                               <MapPin className="h-3 w-3" /> {provider.location} ,{provider.city}
                            </div>
                          </div>
                       </div>
                       
                       {/* Badges */}
                       <div className="flex flex-wrap gap-2 mt-3">
                          {provider.badges?.map((badge: string) => (
                             <span key={badge} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                               {badge}
                             </span>
                          ))}
                       </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-6">
                       <a href={`tel:${provider.phone}`} className="flex-1">
  <Button className="w-full rounded-xl bg-black">
    <Phone className="h-4 w-4 mr-2" /> Call Now
  </Button>
</a>

                       <Button variant="outline" className="rounded-xl border-gray-200">
                          <ArrowUpRight className="h-4 w-4" /> Profile
                       </Button>
                    </div>
                 </div>
              </div>
            ))}

         </div>
         )}
      </section>

      <Footer />
    </main>
  );
}