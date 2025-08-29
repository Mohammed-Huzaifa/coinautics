import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ThirdSection from "@/components/3rdSection/what_do_we_do";
import WhoWeDoItForSection from "@/components/4thSection/WhoDoWeDoItFor";
import HowWeDo from "@/components/5thSection/HowWeDo";
import HowItWorksSection  from "@/components/6thSectionn/HowItWorksSection";
import WhoWeServe from "@/components/7thSection/WhoWeServe";
// import CTA_Section from "@/components/CTA_Section/CTA_Section";
import CTASection from "@/components/CTA_Section/CTA_Section";
import Footer from "@/components/Footer/Footer";
// import FoundationButton from "@/components/CTA_Button/FoundationButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThirdSection />
      <WhoWeDoItForSection />
      <HowWeDo />
      <HowItWorksSection />
      <WhoWeServe />
      <CTASection />
      <Footer />
      {/* <FoundationButton /> */}
    </main>
  );
}
