import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { Features } from "@/components/landing/Features";
import { Testimonial } from "@/components/landing/Testimonial";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main className="isolate">
        <Hero />
        <LogoCloud />
        <Features />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
