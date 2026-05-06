"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Phone, Filter, ArrowUpRight, X, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { apiUrl } from "@/lib/api";
import Link from "next/link";

const CATEGORIES = ["Plumber", "Electrician", "Carpenter", "Cleaner", "Painter", "Tutor", "AC Repair", "Mechanic", "Gardener"];

type Provider = {
  _id: string;
  name: string;
  service: string;
  phone: string;
  pincode: string;
  location: string;
  city: string;
  bio?: string;
  rating?: number;
  reviewCount?: number;
  price?: string;
  image?: string;
  badges?: string[];
  verified?: boolean;
};

type SearchResponse = {
  message: string;
  count: number;
  total: number;
  page: number;
  limit: number;
  usedNearby: boolean;
  data: Provider[];
};

type SortOption = "rating" | "reviews" | "name";

export default function FindHelpPage() {
  const [service, setService] = useState("");
  const [pincode, setPincode] = useState("");
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [usedNearby, setUsedNearby] = useState(false);

  // filter state
  const [showFilters, setShowFilters] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>("rating");

  // pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const abortRef = useRef<AbortController | null>(null);

  const runSearch = useCallback(async (svc: string, pin: string, pg = 1) => {
    if (!svc.trim() || !/^\d{6}$/.test(pin)) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const res = await fetch(
        apiUrl(`/api/search?service=${encodeURIComponent(svc.toLowerCase())}&pincode=${pin}&page=${pg}&limit=20`),
        { signal: controller.signal }
      );
      const result: SearchResponse = await res.json();
      if (!res.ok) throw new Error(result.message || "Search failed");
      setProviders(result.data || []);
      setUsedNearby(result.usedNearby);
      setTotalPages(Math.max(1, Math.ceil(result.total / 20)));
      setPage(pg);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError((err as Error).message);
      setProviders([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => runSearch(service, pincode, 1), 400);
    return () => clearTimeout(t);
  }, [service, pincode, runSearch]);

  const canSubmit = useMemo(() => service.trim().length > 1 && /^\d{6}$/.test(pincode), [service, pincode]);

  const filteredProviders = useMemo(() => {
    let list = [...providers];
    if (verifiedOnly) list = list.filter((p) => p.verified);
    if (minRating > 0) list = list.filter((p) => (p.rating ?? 0) >= minRating);
    if (sortBy === "rating") list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    else if (sortBy === "reviews") list.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
    else if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [providers, verifiedOnly, minRating, sortBy]);

  const activeFilterCount = (verifiedOnly ? 1 : 0) + (minRating > 0 ? 1 : 0) + (sortBy !== "rating" ? 1 : 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-32 pb-8 px-4 bg-white top-0 z-30 shadow-sm border-b border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">WHO DO YOU NEED?</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="Search for 'Plumber' or 'AC Repair'..."
                className="h-14 pl-12 rounded-full text-lg border-gray-200 bg-gray-50 focus:bg-white transition-all"
              />
            </div>
            <div className="relative md:w-1/3">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Pincode (6 digits)"
                inputMode="numeric"
                className="h-14 pl-12 rounded-full text-lg border-gray-200 bg-gray-50 focus:bg-white transition-all"
              />
            </div>
            <Button
              onClick={() => runSearch(service, pincode, 1)}
              disabled={!canSubmit || loading}
              className="h-14 px-8 rounded-full bg-black text-white hover:bg-gray-800 text-lg font-bold disabled:opacity-50"
            >
              Search
            </Button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setService(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  service.toLowerCase() === cat.toLowerCase()
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 container mx-auto max-w-5xl">
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
            {error}
          </div>
        )}

        {hasSearched && !loading && !error && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {filteredProviders.length} {filteredProviders.length === 1 ? "Provider" : "Providers"}
              {usedNearby ? " nearby" : " near "}
              <span className="underline decoration-wavy decoration-yellow-400 ml-1">{pincode}</span>
            </h2>
            <Button
              variant="outline"
              size="sm"
              className={`gap-2 rounded-full transition-all ${showFilters ? "bg-black text-white border-black" : ""}`}
              onClick={() => setShowFilters((v) => !v)}
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </div>
        )}

        {/* Filter Panel */}
        {showFilters && hasSearched && (
          <div className="mb-8 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Filter & Sort</h3>
              <button
                onClick={() => { setVerifiedOnly(false); setMinRating(0); setSortBy("rating"); }}
                className="text-xs text-gray-400 hover:text-black transition-colors"
              >
                Reset all
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Verified only */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="rounded"
                />
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Verified only</span>
              </label>

              {/* Min rating */}
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium text-gray-700">Min rating:</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r === minRating ? 0 : r)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        minRating === r && r > 0 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {r === 0 ? "Any" : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort by */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Sort:</span>
                <div className="flex gap-1">
                  {(["rating", "reviews", "name"] as SortOption[]).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSortBy(opt)}
                      className={`px-3 h-8 rounded-lg text-xs font-bold capitalize transition-all ${
                        sortBy === opt ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-6 border border-gray-200 animate-pulse">
                <div className="flex gap-6">
                  <div className="h-24 w-24 rounded-2xl bg-gray-200" />
                  <div className="flex-grow space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/3" />
                    <div className="h-5 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-10 bg-gray-200 rounded mt-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : hasSearched && filteredProviders.length === 0 && !error ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
            <p className="text-lg font-bold text-gray-800">No providers found</p>
            <p className="text-sm text-gray-500 mt-2">
              {activeFilterCount > 0
                ? "Try relaxing your filters."
                : "Try a different service or a nearby pincode. You can also "}
              {activeFilterCount === 0 && (
                <a href="/partner" className="underline font-medium">become a partner</a>
              )}.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProviders.map((provider) => (
                <div
                  key={provider._id}
                  className="group bg-white rounded-[2rem] p-6 border border-gray-200 hover:shadow-xl hover:border-black/10 transition-all duration-300 flex flex-col sm:flex-row gap-6"
                >
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="relative h-24 w-24 rounded-2xl overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
                      {provider.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={provider.image} alt={provider.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-2xl font-black text-gray-400">
                          {provider.name?.[0]?.toUpperCase() ?? "?"}
                        </span>
                      )}
                      {provider.verified && (
                        <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                          <ShieldCheck className="h-3 w-3 text-white" />
                        </span>
                      )}
                    </div>
                    {provider.rating ? (
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold">{provider.rating.toFixed(1)}</span>
                        {provider.reviewCount ? (
                          <span className="text-xs text-gray-500">({provider.reviewCount})</span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                            {provider.service}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 leading-tight">{provider.name}</h3>
                        </div>
                        <div className="text-right">
                          {provider.price ? <div className="text-lg font-bold text-black">{provider.price}</div> : null}
                          <div className="text-xs text-gray-500 flex items-center justify-end gap-1">
                            <MapPin className="h-3 w-3" /> {provider.location}, {provider.city}
                          </div>
                        </div>
                      </div>

                      {provider.bio && (
                        <p className="text-sm text-gray-500 mt-2 italic line-clamp-2">"{provider.bio}"</p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-3">
                        {provider.badges?.map((badge) => (
                          <span key={badge} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <a href={`tel:${provider.phone}`} className="flex-1">
                        <Button className="w-full rounded-xl bg-black">
                          <Phone className="h-4 w-4 mr-2" /> Call Now
                        </Button>
                      </a>
                      <Link href={`/providers/${provider._id}`}>
                        <Button variant="outline" className="rounded-xl border-gray-200">
                          <ArrowUpRight className="h-4 w-4" /> Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && !loading && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <Button
                  variant="outline"
                  onClick={() => runSearch(service, pincode, page - 1)}
                  disabled={page <= 1}
                  className="rounded-full px-6"
                >
                  ← Prev
                </Button>
                <span className="text-sm font-medium text-gray-600">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => runSearch(service, pincode, page + 1)}
                  disabled={page >= totalPages}
                  className="rounded-full px-6"
                >
                  Next →
                </Button>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}
