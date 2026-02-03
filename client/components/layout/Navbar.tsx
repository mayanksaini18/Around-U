// components/layout/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-7 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between bg-black/5 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 w-full max-w-5xl shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center text-white font-bold">U</div>
          <span className="text-xl font-bold tracking-tighter text-black hidden sm:block">Around-U</span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="#" className="hover:text-black transition-colors">How it works</Link>
          <Link href="#" className="hover:text-black transition-colors">Safety</Link>
          <Link href="#" className="hover:text-black transition-colors">For Workers</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
           <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black hidden sm:block">Login</Link>
           <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6">
             Get the app
           </Button>
        </div>
      </nav>
    </div>
  );
}