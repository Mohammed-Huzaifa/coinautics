import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/About/HeroSection/HeroSection"
import SecondSection from "@/components/About/2ndSection/SecondSection";
import AudiencesSection from "@/components/7thSection/WhoWeServe";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black text-text-inverse">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <AudiencesSection />
    </main>
  );
}


