// app/(site)/components/WhoWeServe.tsx
import React from "react";

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="relative w-full bg-white text-[#111]">
      {/* content container */}
      <div className="w-full max-w-[1184px] mx-auto px-6 sm:px-12">
        {/* Foundation/Spacing (top) */}
        <div className="h-[128px]" aria-hidden />

        {/* Foundation/Heading */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="font-clash font-normal text-[40px] leading-[120%] md:text-[56px]">
            From solo traders<br className="hidden md:block" /> to institutional giants
          </h1>
          <p className="max-w-[760px] text-[16px] leading-[150%] text-[#61646B]">
            Coinautics is built for every kind of crypto mind, empowering individuals, teams,
            and ecosystems with deep, visual, and actionable capital flow intelligence
          </p>
        </div>

        {/* Foundation/Spacing (bottom) */}
        <div className="h-[128px]" aria-hidden />
      </div>

      {/* Group 2 (the 5 “frames” / floating pills). Position these AFTER the section is built */}
      {/* <FloatingFrames /> */}
    </section>
  );
}
