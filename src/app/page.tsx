import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NumbersSection from "@/components/NumbersSection";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import MethodologyTimeline from "@/components/MethodologyTimeline";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 pt-24 md:px-8">
        <Hero />
        <NumbersSection />
        <HowItWorks />
        <WhoWeHelp />
        <MethodologyTimeline />
        <TechStack />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}