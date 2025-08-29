import FoundationButton from "@/components/CTA_Button/FoundationButton";
import FloatingFrames from "../FloatingFrames";

export default function AudiencesSection() {
  return (
    <section id="audiences" className="relative w-full bg-white text-black relative">
      {/* Foundation spacing — top (128px) */}
      <div className="h-section w-full" aria-hidden />

      {/* Main wrapper */}
      <div className="w-full max-w-[1184px] mx-auto px-6 sm:px-12">
        {/* Upper (content) */}
        <div className="w-full flex flex-col items-center gap-5">
          {/* Sub-upper (title + copy) */}
          <div className="w-full max-w-[782px] flex flex-col items-center text-center gap-3">
            <h1 className="font-clash font-normal text-[32px] leading-[120%] md:text-[40px]">
              From solo traders <br className="hidden md:block" />
              to institutional giants
            </h1>
            <p className="text-[16px] leading-[150%] text-[#6B7280]">
              Coinautics is built for every kind of crypto mind, empowering
              individuals, teams, and ecosystems with deep, visual, and
              actionable capital flow intelligence.
            </p>
          </div>

          {/* CTA group */}
          <div className="mt-4 flex items-center gap-4">
            {/* Primary / Dark */}
            <FoundationButton
              ariaLabel="Book a demo"
              className="bg-black border-black text-white shadow-[0_2px_8px_0_rgba(39,110,241,0.25)]"
            >
              Book a demo
            </FoundationButton>

            {/* Secondary / Light */}
            <FoundationButton
              ariaLabel="Talk to our team"
              className="bg-white text-black border-black/20 shadow-none"
            >
              Talk to our team
            </FoundationButton>
          </div>
        </div>
      </div>
      <FloatingFrames
        zIndex={0}
        frames={[
          { key: "cryptoTraders",       desktop: { top: 120, left: 360 } },
          { key: "influencers",         desktop: { top: 20,  left: 840 } },
          { key: "institutions",        desktop: { top: 120, left: 1340 } },
          { key: "analysts",            desktop: { top: 380, left: 520 } },
          { key: "platformsProtocols",  desktop: { top: 360, left: 1240 } },
        ]}
      />
      <div className="h-section w-full" aria-hidden />
    </section>
  );
}
