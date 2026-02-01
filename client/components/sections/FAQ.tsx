// components/sections/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-2">FAQ</h2>
      <p className="text-gray-600 mb-10">Questions about how Around-U works and what to expect.</p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I know providers are trustworthy?</AccordionTrigger>
          <AccordionContent>
            Every provider on Around-U verifies their phone number and uploads an ID (Aadhar). 
            We check them before they go live. Reviews from real users tell you exactly what to expect.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How much does it cost?</AccordionTrigger>
          <AccordionContent>
             You negotiate directly with the provider. No hidden fees. No markups. 
             What you agree on is what you pay. That's the whole point.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What if no one is available?</AccordionTrigger>
          <AccordionContent>
             Around-U is hyperlocal, so availability depends on who is working in your area. 
             We are starting with one neighborhood and growing from there.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}