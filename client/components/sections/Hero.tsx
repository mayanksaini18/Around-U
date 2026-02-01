// components/sections/Hero.tsx
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Find the help you need, <br />
          right where you are
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Around-U connects you with trusted local service providers in your neighborhood. 
          No premium pricing. No long waits. Just real people ready to help.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Find help</Button>
          <Button size="lg" variant="outline">Learn more</Button>
        </div>
        
        {/* Placeholder for Hero Image */}
        <div className="mx-auto aspect-video w-full max-w-5xl rounded-xl bg-gray-100 object-cover border border-gray-200 shadow-sm flex items-center justify-center">
             <span className="text-gray-400">Hero Image Placeholder</span>
        </div>
      </div>
    </section>
  );
}