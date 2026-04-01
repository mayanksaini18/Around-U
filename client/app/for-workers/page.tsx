import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const perks = [
  {
    title: "Get discovered in your pincode",
    description:
      "Register once with your service and area. Customers searching nearby will find you automatically.",
  },
  {
    title: "Zero commission, zero fees",
    description:
      "We don't take a cut. You and the customer agree on a price — all of it goes to you.",
  },
  {
    title: "Customers call you directly",
    description:
      "No middlemen, no chat queues. When someone needs you, they call your number directly.",
  },
  {
    title: "Works for any trade",
    description:
      "Plumber, electrician, carpenter, cleaner, painter, tutor — if people need it locally, you belong here.",
  },
];

const requirements = [
  "Aadhaar card for identity verification",
  "Active phone number",
  "Skill certificate (optional but helpful)",
];

export default function ForWorkersPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-48 pb-32">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">For Workers</p>
        <h1 className="text-5xl font-black tracking-tighter text-black mb-6">
          Your skill.<br />Your neighbourhood.<br />Your income.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl">
          Around-U puts you in front of customers who are already looking for what you do — right where you live.
        </p>

        <div className="mt-20 space-y-0">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="py-8 border-t border-gray-100 last:border-b flex gap-6 items-start"
            >
              <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0" />
              <div>
                <h3 className="text-base font-bold text-black mb-1">{perk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">To get started you need</p>
          <ul className="space-y-3">
            {requirements.map((req, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                {req}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/partner">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8 h-12 text-sm font-medium">
                Register as a worker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
