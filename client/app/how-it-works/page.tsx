import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const steps = [
  {
    number: "01",
    title: "Search by service & pincode",
    description:
      "Type what you need — plumber, electrician, cleaner, tutor — and enter your pincode. That's it.",
  },
  {
    number: "02",
    title: "See workers near you",
    description:
      "We show you verified workers in your neighbourhood, with their service, location, and contact info.",
  },
  {
    number: "03",
    title: "Call directly",
    description:
      "No chat bots, no booking forms. Hit Call Now and speak to the worker directly. Zero middlemen.",
  },
  {
    number: "04",
    title: "Get the job done",
    description:
      "Agree on terms, get the work done. Simple, fast, and local — the way it should be.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-48 pb-32">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">How it works</p>
        <h1 className="text-5xl font-black tracking-tighter text-black mb-6">
          Find local help<br />in under a minute.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl">
          Around-U cuts straight to the point. Search, find, call — no platform fees, no waiting.
        </p>

        <div className="mt-20 space-y-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-10 py-10 border-t border-gray-100 last:border-b"
            >
              <span className="text-4xl font-black text-gray-100 w-14 shrink-0 pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
