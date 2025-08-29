"use client";

import Image from "next/image";
import heroBg from "@/assets/images/About_hero.png"; // replace with your actual image path
import JoinWaitlistButton from "@/components/JoinWaitlistButton/JoinWaitlistButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[790px] bg-brand-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="About Us Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-12 ml-12">
            <div className="max-w-[580px] space-y-5">
            <h1 className="font-clash text-[40px] leading-[1.2] text-text-inverse">
                Follow the Flow <br /> Master the Market
            </h1>
            <p className="font-poppins text-[18px] leading-[1.5] text-text-sub">
                Coinautics transforms blockchain complexity into beautiful, real-time
                visual insights, letting you see where crypto money moves, across chains,
                wallets, and protocols.
            </p>
            {/* Input field container */}
            <div className="w-full max-w-md mt-8">
                <JoinWaitlistButton />
            </div>
        </div>
      </div>
    </section>
  );
}
