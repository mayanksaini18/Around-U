// components/layout/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Heart, Apple, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6 px-4 relative">
      {/* Main Dark Container 
         Added 'relative' here so the absolutely positioned text inside knows where its boundaries are.
      */}
      <div className="relative mx-auto max-w-7xl bg-black text-white rounded-[2.5rem] overflow-hidden px-8 py-16 md:px-16 md:py-20">
        
        {/* Top Grid: Logo + 4 Columns of Links */}
        <div className="grid gap-12 lg:grid-cols-5 mb-20 relative z-10">
          
          {/* Brand / Logo Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
              Around-U
            </Link>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-200">Trust & Legal</h4>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Safety Guidelines</Link>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-200">Company</h4>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-200">Support</h4>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">FAQs</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">How it Works</Link>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-200">Join In</h4>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Waitlist</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Partners</Link>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px bg-gray-800 w-full mb-12 relative z-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10 pb-10">
          
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-gray-200 font-medium">
              <span>Follow us</span>
              <div className="flex gap-4 ml-4">
                <Link href="#" className="hover:scale-110 transition-transform"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="hover:scale-110 transition-transform"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="hover:scale-110 transition-transform"><Instagram className="h-5 w-5" /></Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-green-500 text-green-500" /> 
              <span>for your neighborhood</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start md:items-end gap-6">
             <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mr-2">Mobile App</div>
                <Apple className="h-6 w-6 text-white cursor-pointer hover:opacity-80" />
                <Smartphone className="h-6 w-6 text-white cursor-pointer hover:opacity-80" />
             </div>
             <div className="flex gap-6 text-xs text-gray-500">
                <Link href="#" className="hover:text-white">Terms</Link>
                <Link href="#" className="hover:text-white">Privacy</Link>
             </div>
          </div>
        </div>

        {/* THE HYPERLOCAL CLIPPED TEXT EFFECT 
           - absolute bottom-0: sticks it to the bottom.
           - text-[18vw]: Makes the font huge relative to viewport width.
           - translate-y-[30%]: Pushes it down so the bottom gets cut off by the container's overflow-hidden.
           - opacity-[0.07]: Makes it very subtle.
           - z-0: Ensures it stays behind the links.
        */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none leading-none select-none font-black text-center text-white opacity-[0.07] z-0">
           <span className="block text-[18vw] tracking-tighter translate-y-[30%]">HYPERLOCAL</span>
        </div>

      </div>
    </footer>
  );
}