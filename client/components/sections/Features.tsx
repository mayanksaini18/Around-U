// components/sections/Features.tsx
import { MapPin, MessageSquare, Wrench } from "lucide-react"; // Icons

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-blue-600" />,
    title: "Hyperlocal discovery",
    desc: "Find service providers within minutes of your location. See who is available right now in your neighborhood.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Negotiable pricing",
    desc: "Talk directly with providers and agree on fair rates. No fixed markups. No hidden fees. Just honest pricing.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    title: "Microtasks on demand",
    desc: "From hanging a picture to fixing a tap, we handle it. Small jobs matter. We make them simple and affordable.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-semibold text-blue-600 mb-2">Why choose us</p>
          <h2 className="text-3xl font-bold sm:text-4xl">What makes us different</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-lg border shadow-sm">
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-600 mb-4">{f.desc}</p>
              <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                Explore &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}