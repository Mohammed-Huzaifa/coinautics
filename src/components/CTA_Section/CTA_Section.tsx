"use client";

import EmailWaitlistInput from "@/components/JoinWaitlistButton/JoinWaitlistButton";

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[504px] bg-[#0A0A0A] flex flex-col items-center justify-center">
  {/* Foundation Spacing */}
  <div className="w-full h-[128px]" />

  {/* Main Content Wrapper */}
  <div className="w-full flex flex-col items-center text-center gap-10">
    {/* Heading + Subtext Wrapper */}
    <div className="w-[782px] flex flex-col items-center text-center gap-4">
      {/* h1 */}
      <h1 className="font-clash text-[40px] leading-[1.2] text-text-inverse">
        Ready to <br />
        decode the crypto maze?
      </h1>

      {/* p */}
      <p className="font-poppins text-[16px] leading-[1.5] text-text-sub">
        Visualise what the blockchain really says
      </p>
    </div>
    <EmailWaitlistInput />

  </div>

  {/* Foundation Spacing */}
  <div className="w-full h-[128px]" />
</section>
  );
}
