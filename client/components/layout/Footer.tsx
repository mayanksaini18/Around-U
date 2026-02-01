// components/layout/Footer.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Newsletter Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-gray-600">Get updates on new providers, features, and when we launch in your area.</p>
          </div>
          <div className="flex gap-2 max-w-md w-full">
            <Input type="email" placeholder="Enter your email" />
            <Button className="bg-blue-600">Sign up</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t pt-12">
           {/* Column 1 */}
           <div>
              <div className="font-bold text-xl text-blue-600 mb-4">Around-U</div>
              <p className="text-sm text-gray-500">
                Get the latest updates on new providers and features.
              </p>
           </div>
           
           {/* Column 2 */}
           <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Product</h4>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">Service Providers</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">How it works</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">Blog</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">Contact</Link>
           </div>

           {/* Column 3 */}
           <div className="flex flex-col gap-3">
              <h4 className="font-semibold">About us</h4>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">Careers</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">Press</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">Partners</Link>
           </div>

           {/* Column 4 */}
           <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Follow us</h4>
              <div className="flex gap-4">
                <Instagram className="h-5 w-5 text-gray-600" />
                <Facebook className="h-5 w-5 text-gray-600" />
                <Youtube className="h-5 w-5 text-gray-600" />
              </div>
           </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Around-U. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}