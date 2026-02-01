// components/sections/HowItWorks.tsx
import { Search, Phone, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    step: "Search",
    title: "Browse available providers near you",
    desc: "See their skills, rates, and what others say.",
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    step: "Connect",
    title: "Call or message to agree on the work",
    desc: "Talk directly. No middleman. No surprises.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
    step: "Done",
    title: "Work gets done. You pay what you agreed.",
    desc: "Leave a review so others know who to trust.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-semibold text-blue-600">Simple</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Three steps to get help</h2>
          <p className="mt-4 text-lg text-gray-600">Tell us what you need and where you are.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border w-fit">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-gray-500 mb-2">{item.step}</span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{item.desc}</p>
              
              {/* Image Placeholder matching wireframe */}
              <div className="bg-gray-100 rounded-lg aspect-[4/3] w-full mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}