// components/layout/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-blue-600">Around-U</Link>
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