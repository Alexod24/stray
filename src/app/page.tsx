import Navbar from "@/components/easya/Navbar";
import Hero from "@/components/easya/Hero";
import BentoFeatures from "@/components/easya/BentoFeatures";
import Partners from "@/components/easya/Partners";
import LearnByDoing from "@/components/easya/LearnByDoing";
import Events from "@/components/easya/Events";
import Testimonials from "@/components/easya/Testimonials";
import PartnerCTA from "@/components/easya/PartnerCTA";
import AppDownload from "@/components/easya/AppDownload";
import Footer from "@/components/easya/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <BentoFeatures />
      <Partners />
      <LearnByDoing />
      <Events />
      <PartnerCTA />
      <Testimonials />
      <AppDownload />
      <Footer />
    </main>
  );
}
