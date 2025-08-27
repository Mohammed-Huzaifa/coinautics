import Image from "next/image";
import phone from "@/assets/images/phone.png";
import Tag from "@/components/Tag/Tag"

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full bg-white text-brand-black">
      <div className="w-full max-w-[1184px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Foundation spacing (128) */}
        <div className="h-[128px]" aria-hidden />

        {/* Content row */}
        <div className="w-full flex items-start justify-between gap-14">
          {/* LEFT: image container (580 × 725) */}
          <div className="relative w-[580px] h-[725px] rounded-[24px] overflow-hidden shrink-0">
            <Image
              src={phone}
              alt="How it works phone mock"
              className="absolute inset-0 h-full w-full object-cover"
              priority
            />
          </div>

          {/* RIGHT: content container (503 × 725) */}
            <div className="w-[503px] h-[725px] flex flex-col">
            {/* Top group — W: Fill, H: 513, gap: 32 */}
                <div className="w-full min-h-[513px] flex flex-col items-start gap-8">
                    {/* ── sub-top-1 (first group inside TOP group) ───────────────────────── */}
                    <div className="sub-top-1 w-full md:w-[503px] min-h-[265px] flex flex-col items-start gap-10">
                        <div className="w-full flex flex-col items-start gap-5">
                            <div className="self-start inline-flex items-center gap-2 rounded-full bg-[#DDDDFF] pl-4 pr-2 py-2">
                                <Tag text="How does it work?" size="small" bgColor="bg-transparent" />
                            </div>
                            {/* Heading wrapper — W: Fill, H: Hug, gap: 12px */}
                            <div className="w-full flex flex-col items-start gap-3">
                                <h1 className="font-clash font-normal text-title text-[32px] leading-[120%] md:text-[40px]">
                                    Data that <br /> Speaks, Visually
                                </h1>
                                <p className="text-[16px] leading-[150%] text-black">
                                    See the story behind the flow. Explore interactive diagrams that simplify wallet
                                    behaviours, token movements, and capital trends, all designed to help you act
                                    faster and smarter.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* sub-top-2 */}
                    <div className="w-full flex flex-col items-start gap-6">
                        <div className="w-full flex items-start gap-4">
                            <span className="w-1 self-stretch rounded-full bg-[#5F67FF]" />
                            <div className="flex w-full flex-col gap-2">
                                <h4 className="text-[16px] leading-[150%] font-normal text-[#6C79FF]">Title</h4>
                                <p className="text-[14px] leading-[150%] font-normal text-text-sub">Subtext goes here</p>
                            </div>
                        </div>
                        <div className="w-full flex items-start gap-4">
                            <span className="w-1 self-stretch rounded-full bg-[#5F67FF]" />
                            <div className="flex w-full flex-col gap-2">
                                <h4 className="text-[16px] leading-[150%] font-normal text-[#6C79FF]">Title</h4>
                                <p className="text-[14px] leading-[150%] font-normal text-text-sub">Subtext goes here</p>
                            </div>
                        </div>
                        <div className="w-full flex items-start gap-4">
                            <span className="w-1 self-stretch rounded-full bg-[#5F67FF]" />
                            <div className="flex w-full flex-col gap-2">
                                <h4 className="text-[16px] leading-[150%] font-normal text-[#6C79FF]">Title</h4>
                                <p className="text-[14px] leading-[150%] font-normal text-text-sub">Subtext goes here</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Group 2 — CTAs (Hug x 48, gap 24) */}
                <div className="mt-20 flex items-center gap-6">
                {/* Primary (dark) */}
                <button
                    type="button"
                    className="inline-flex h-12 items-center rounded-full px-6
                            bg-[#0D0B1A] text-white
                            ring-1 ring-[#6C79FF]/30
                            shadow-[0_8px_24px_rgba(108,121,255,0.25)]
                            hover:brightness-110 transition"
                >
                    Get a demo
                </button>

                {/* Secondary (light) */}
                <button
                    type="button"
                    className="inline-flex h-12 items-center rounded-full px-6
                            bg-white text-[#0D0B1A]
                            border border-[#6C79FF]/40
                            shadow-[0_2px_10px_rgba(0,0,0,0.08)]
                            hover:bg-neutral-50 transition"
                >
                    Talk to our team
                </button>
                </div>
            </div>
            {/* group 2 — CTA row (wrapper only) */}
        </div>
        <div className="h-[128px]" aria-hidden />
      </div>
    </section>
  );
}
