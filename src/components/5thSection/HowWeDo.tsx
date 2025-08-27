import React from "react";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import info1 from "@/assets/images/info1.png"; // adjust extension if needed
import info2 from "@/assets/images/info2.png";
import info3 from "@/assets/images/info3.png";
import info4 from "@/assets/images/info4.png";
import info5 from "@/assets/images/info5.png";




export default function HowWeDo() {
  return (
    <section
        id="how-we-do"
        className="relative z-10 w-full text-text-inverse pt-section pb-section rounded-[36px] md:rounded-[48px] overflow-hidden"
        style={{
            background:
            "linear-gradient(180deg, #23236B 0%, #2B2B73 40%, #111133 100%)",
        }}
        >
        {/* content container stays as you set it */}
        <div className="w-full max-w-[1184px] mx-auto flex flex-col items-start gap-0 pl-6 pr-6 sm:pl-12 sm:pr-12 md:pl-[195px] md:pr-0">
            {/* Foundation Spacing — TOP (128px) */}
            <div className="h-section w-full" aria-hidden />
            {/* Infographic block (W: Fill, H: Hug, gap: 56px) */}
            <div className="w-full flex flex-col items-start gap-14">
                {/* 1) Text-only content block */}
                <div className="w-full max-w-[782px] flex flex-col items-start gap-10">
                    <div className="w-full flex flex-col items-start gap-5">
                        {/* Tag wrapper — W/H Hug, gap 8, L=16 R=8, on dark bg */}
                        <div className="self-center inline-flex items-center gap-2 rounded-full bg-[#DDDDFF] pl-4 pr-2 py-2">
                            <Tag text="How we do it?" size="medium" bgColor="bg-transparent" />
                        </div>
                        {/* Heading + subtext group (W Fill, H Hug, gap 12) */}
                        {/* Heading + subtext group */}
                        <div className="w-full max-w-[782px] self-center flex flex-col items-center text-center gap-3 mt-5">
                        <h1 className="font-clash font-normal text-[32px] leading-[120%] md:text-[40px] text-text-inverse">
                            Built for clarity. Powered <br /> by intelligence
                        </h1>
                        <p className="font-normal text-[16px] leading-[150%] text-text-sub">
                            We combine rich blockchain data, smart classification, and seamless visual
                            storytelling to help you think, decode, and act — all in one platform.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2) Visual content group (placeholder) */}
            {/* 2) Visual content group */}
            <div className="w-full flex flex-col items-center gap-8 mt-20">
            {/* Row 1 — title L, image, text R */}
            <div className="w-full flex items-start gap-10">
                <h2 className="font-clash font-normal text-text-inverse text-[24px] leading-[130%] md:text-[32px] md:leading-[120%] w-[240px]">
                <span className="whitespace-nowrap">Dual&#8209;Hemisphere</span><br />
                Visualisation
                </h2>
                <Image
                src={info1}
                alt="Dual-Hemisphere visualisation"
                width={200}
                height={200}
                className="shrink-0 rounded-md object-contain object-top -mt-3"
                />
                <p className="w-[420px] font-normal text-[16px] leading-[150%] text-text-sub">
                A two-sided view that reveals where capital is coming from and where it’s headed
                </p>
            </div>

            {/* Row 2 — text L, image, title R (zig-zag) */}
            <div className="w-full flex items-start gap-10">
                <p className="w-[420px] font-normal text-[16px] leading-[150%] text-text-sub">
                Follow token movements seamlessly across multiple blockchains in real time
                </p>
                <Image
                src={info2}
                alt="Cross-Chain flow visual"
                width={200}
                height={200}
                className="shrink-0 rounded-md object-contain object-top -mt-3"
                />
                <h2 className="font-clash font-normal text-text-inverse text-[24px] leading-[130%] md:text-[32px] md:leading-[120%] w-[240px]">
                Cross&#8209;Chain<br />Flow Tracking
                </h2>
            </div>

            {/* Row 3 — title L, image, text R */}
            <div className="w-full flex items-start gap-10">
                <h2 className="font-clash font-normal text-text-inverse text-[24px] leading-[130%] md:text-[32px] md:leading-[120%] w-[240px]">
                Classified Wallet<br />Behavior
                </h2>
                <Image
                src={info3}
                alt="Classified wallet behavior visual"
                width={200}
                height={200}
                className="shrink-0 rounded-md object-contain object-top -mt-3"
                />
                <p className="w-[420px] font-normal text-[16px] leading-[150%] text-text-sub">
                Identify and segment wallets by type — whales, traders, institutions, and more
                </p>
            </div>

            {/* Row 4 — text L, image, title R */}
            <div className="w-full flex items-start gap-10">
                <p className="w-[420px] font-normal text-[16px] leading-[150%] text-text-sub">
                Set custom triggers to spot key movements and patterns automatically
                </p>
                <Image
                src={info4}
                alt="Smart AI agent alerts visual"
                width={200}
                height={200}
                className="shrink-0 rounded-md object-contain object-top -mt-3"
                />
                <h2 className="font-clash font-normal text-text-inverse text-[24px] leading-[130%] md:text-[32px] md:leading-[120%] w-[240px]">
                Smart AI<br />Agent Alerts
                </h2>
            </div>

            {/* Row 5 — title L, image, text R */}
            <div className="w-full flex items-start gap-10">
                <h2 className="font-clash font-normal text-text-inverse text-[24px] leading-[130%] md:text-[32px] md:leading-[120%] w-[240px]">
                Social-Ready<br />Dashboards
                </h2>
                <Image
                src={info5}
                alt="Social-ready dashboards visual"
                width={200}
                height={200}
                className="shrink-0 rounded-md object-contain object-top -mt-3"
                />
                <p className="w-[420px] font-normal text-[16px] leading-[150%] text-text-sub">
                Instantly share insights, trends, or visual reports with your team or audience
                </p>
            </div>
            </div>
            <div className="h-section w-full" aria-hidden />
        </div>
    </section>

  );
}
