import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero.png";
import EmailWaitlistInput from "@/components/JoinWaitlistButton/JoinWaitlistButton";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[790px] px-section py-section">
      {/* Background */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      {/* Content container */}
      <div
        className="
          flex flex-col items-center text-center max-w-[1140px] 
          space-y-6 relative z-10
          px-6 sm:px-12 md:px-16
        "
      >
        {/* Heading */}
        <h1
          className="
            font-clash text-text-inverse font-regular
            text-[32px] leading-[40px] 
            sm:text-[40px] sm:leading-[48px] 
            md:text-[48px] md:leading-[56px]
          "
        >
          Follow the Flow. <br className="sm:hidden" /> Master the Market.
        </h1>

        {/* Subheading */}
        <p
          className="
            font-poppins text-text-sub
            text-[14px] leading-[20px]
            sm:text-[16px] sm:leading-[24px]
            max-w-full sm:max-w-[782px] 
            px-4 sm:px-0 mx-auto
            break-words whitespace-normal
          "
        >
          Coinautics transforms blockchain complexity into beautiful, real-time
          visual insights, letting you see where crypto money moves, across
          chains, wallets, and protocols.
        </p>

        {/* CTA */}
        <div className="mt-6 w-full flex justify-center">
          <EmailWaitlistInput />
        </div>
      </div>
    </section>
  );
}
