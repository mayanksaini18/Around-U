// components/sections/CTA.tsx
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Ready to find help nearby?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands who've already discovered the easier way to get things done.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Start now</Button>
          <Button size="lg" variant="outline">Explore</Button>
        </div>
        
        {/* Large visual placeholder */}
        <div className="mx-auto max-w-4xl bg-gray-100 rounded-xl aspect-[16/9] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
               alt="App Interface" 
               className="w-full h-full object-cover"
             />
        </div>
      </div>
    </section>
  );
}