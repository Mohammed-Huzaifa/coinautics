"use client";

import ContactForm from "@/components/Contact/ContactForm";
import CTASection from "@/components/CTA_Section/CTA_Section";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function ContactPage() {
  return (
    <main>
        <Navbar />
        <ContactForm />
        <CTASection />
        <Footer />
    </main>
  );
}
