// components/layout/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
         
          <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                     <Image src="https://res.cloudinary.com/dq7yftv7z/image/upload/v1770101792/Untitled_design_nysfzv.png" alt="Logo" width={24} height={24} />
                </div>
            </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <Link href="#how-it-works">Find providers</Link>
            <Link href="#features">Service providers</Link>
            <Link href="#faq">Contact us</Link>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">Sign up</Button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
}