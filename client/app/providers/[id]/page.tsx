import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { API_URL } from "@/lib/api";
import { MapPin, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewForm from "./ReviewForm";

type Provider = {
  _id: string;
  name: string;
  service: string;
  phone: string;
  pincode: string;
  location: string;
  city: string;
  bio?: string;
  rating: number;
  reviewCount: number;
  price?: string;
  image?: string;
  badges?: string[];
  verified?: boolean;
  available?: boolean;
};

async function getProvider(id: string): Promise<Provider | null> {
  try {
    const res = await fetch(`${API_URL}/api/worker/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const provider = await getProvider(id);
  if (!provider) return { title: "Provider not found" };
  return {
    title: `${provider.name} — ${provider.service} | Around-U`,
    description: provider.bio ?? `${provider.name} offers ${provider.service} services in ${provider.city}.`,
  };
}

export default async function ProviderProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const provider = await getProvider(id);
  if (!provider) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">

          {/* Header card */}
          <div className="bg-white rounded-[2rem] border border-gray-200 p-8 mb-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative h-24 w-24 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                {provider.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={provider.image} alt={provider.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-3xl font-black text-gray-400">
                    {provider.name?.[0]?.toUpperCase() ?? "?"}
                  </span>
                )}
                {provider.verified && (
                  <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-white" />
                  </span>
                )}
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{provider.service}</span>
                  {provider.verified && (
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                      Verified
                    </span>
                  )}
                  {provider.available === false && (
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      Unavailable
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">{provider.name}</h1>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {provider.location}, {provider.city} — {provider.pincode}
                  </span>
                  {provider.price && (
                    <span className="flex items-center gap-1 font-bold text-black">
                      <Wrench className="h-4 w-4" />
                      {provider.price}
                    </span>
                  )}
                </div>

                {provider.rating > 0 && (
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{provider.rating.toFixed(1)}</span>
                      <span className="text-xs text-gray-500">({provider.reviewCount} reviews)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {provider.bio && (
              <blockquote className="mt-6 border-l-4 border-gray-200 pl-4 text-gray-600 italic text-sm leading-relaxed">
                "{provider.bio}"
              </blockquote>
            )}

            {provider.badges && provider.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {provider.badges.map((badge) => (
                  <span key={badge} className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg">
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <a href={`tel:${provider.phone}`} className="flex-1">
                <Button className="w-full rounded-xl bg-black h-12">
                  <Phone className="h-4 w-4 mr-2" /> Call {provider.name.split(" ")[0]}
                </Button>
              </a>
            </div>
          </div>

          {/* Review form */}
          <ReviewForm providerId={provider._id} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
