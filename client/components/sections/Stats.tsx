// components/sections/Stats.tsx
export default function Stats() {
  return (
    <section className="py-24 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider text-gray-500">By the numbers</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-gray-900">Growing trust in your neighborhood</h2>
          <p className="mt-4 text-lg text-gray-600">Around-U is building something real, one neighborhood at a time.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
             <span className="text-gray-400 font-medium">Map/Growth Visual</span>
          </div>

          {/* Stats Side */}
          <div className="grid gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-sm font-medium text-gray-600 mb-1">Active providers</p>
              <p className="text-5xl font-bold tracking-tight text-gray-900">50+</p>
              <p className="mt-2 text-sm text-gray-500">Verified service professionals ready to work.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-sm font-medium text-gray-600 mb-1">Tasks completed</p>
              <p className="text-5xl font-bold tracking-tight text-gray-900">500+</p>
              <p className="mt-2 text-sm text-gray-500">Real jobs done. Real people helped.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-sm font-medium text-gray-600 mb-1">Coverage area</p>
              <p className="text-5xl font-bold tracking-tight text-gray-900">1</p>
              <p className="mt-2 text-sm text-gray-500">Starting with one pin code. Expanding from there.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}