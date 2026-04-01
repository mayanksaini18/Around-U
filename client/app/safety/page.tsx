import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const items = [
  {
    title: "Aadhaar-verified workers",
    description:
      "Every worker on Around-U is verified with a government ID before they appear in any search result.",
  },
  {
    title: "Pincode-based matching",
    description:
      "You only see workers who actually operate in your area — no fake listings from across the city.",
  },
  {
    title: "Direct contact, no anonymity",
    description:
      "Workers share their real name, phone number, and location. No hidden profiles, no bots.",
  },
  {
    title: "Ratings after every job",
    description:
      "Customers rate workers after each job. Consistently low-rated workers are reviewed and removed.",
  },
  {
    title: "No money handled by us",
    description:
      "Payments are settled directly between you and the worker — we never touch your money.",
  },
  {
    title: "Report a problem",
    description:
      "Something felt off? You can flag any worker and our team will follow up within 24 hours.",
  },
];

export default function SafetyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-48 pb-32">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Safety</p>
        <h1 className="text-5xl font-black tracking-tighter text-black mb-6">
          Real people.<br />Real accountability.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl">
          Around-U is built around trust. Every worker is a real, verified person from your neighbourhood.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8">
              <h3 className="text-base font-bold text-black mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
