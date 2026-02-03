// components/sections/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header - Matches the other sections */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wide mb-6">
             Support
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6 leading-[0.9]">
            GOT QUESTIONS? <br />
            <span className="text-gray-300">WE'VE GOT ANSWERS.</span>
          </h2>
        </div>
        
        {/* The Accordion Block */}
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          
          <AccordionItem value="item-1" className="border border-gray-200 bg-gray-50 rounded-3xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-xl data-[state=open]:border-black transition-all duration-300">
            <AccordionTrigger className="text-xl font-bold text-left hover:no-underline py-6">
              How do I know providers are trustworthy?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-600 leading-relaxed pb-6">
              Safety is our "Product". Every provider on Around-U must verify their <strong>Phone Number (OTP)</strong> and upload a government <strong>ID (Aadhar)</strong> before they can accept a single task. We also rely on community reviews—if a provider's rating drops, they are removed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 bg-gray-50 rounded-3xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-xl data-[state=open]:border-black transition-all duration-300">
            <AccordionTrigger className="text-xl font-bold text-left hover:no-underline py-6">
              How much does it cost?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-600 leading-relaxed pb-6">
               <span className="text-black font-semibold">You decide.</span> We don't set fixed menus like other apps. You negotiate directly with the provider based on the job. No hidden platform fees, no middleman markups. You pay exactly what you agreed upon.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 bg-gray-50 rounded-3xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-xl data-[state=open]:border-black transition-all duration-300">
            <AccordionTrigger className="text-xl font-bold text-left hover:no-underline py-6">
              What if no one is available?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-600 leading-relaxed pb-6">
               Around-U is strictly hyperlocal. Availability depends on real-time worker status in your specific neighborhood. We are currently rolling out pin-code by pin-code to ensure high availability where we are live.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 bg-gray-50 rounded-3xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-xl data-[state=open]:border-black transition-all duration-300">
            <AccordionTrigger className="text-xl font-bold text-left hover:no-underline py-6">
              Is there a cancellation fee?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-600 leading-relaxed pb-6">
               No. Life happens. If you need to cancel, just let the provider know as soon as possible so they don't waste their travel time. Mutual respect is the currency here.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* "Still Stuck?" CTA Box */}
        <div className="mt-12 p-8 bg-black rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
           <div>
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-gray-400">Can't find the answer you're looking for? Chat to our friendly team.</p>
           </div>
           <Button className="bg-white text-black hover:bg-gray-200 rounded-full h-12 px-8 font-bold text-md shrink-0">
              <MessageCircle className="mr-2 h-5 w-5" /> Chat with us
           </Button>
        </div>

      </div>
    </section>
  );
}