import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/About/HeroSection/HeroSection"
import SecondSection from "@/components/About/2ndSection/SecondSection";
import AudiencesSection from "@/components/7thSection/WhoWeServe";
import ThirdSection from "@/components/About/3rdSection/ThirdSection";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black text-text-inverse">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <AudiencesSection />
    </main>
  );
}


