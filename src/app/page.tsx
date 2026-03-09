import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NumbersSection from "@/components/NumbersSection";
import PainPoints from "@/components/PainPoints";
import WhoWeHelp from "@/components/WhoWeHelp";
import MethodologyTimeline from "@/components/MethodologyTimeline";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-zinc-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 pt-24 md:gap-28 md:px-6 lg:px-8">
        <Hero />
        <NumbersSection />
        <PainPoints />
        <WhoWeHelp />
        <MethodologyTimeline />
        <TechStack />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
