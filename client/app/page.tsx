import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import ProblemGrid from "@/components/sections/ProblemGrid";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemGrid />
      {/* <Features /> */}
      {/* <Stats /> */}
      <HowItWorks />
      <Testimonials />
      <FAQ />
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}