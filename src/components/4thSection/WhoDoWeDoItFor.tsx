"use client";

import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";

import Tag from "@/components/Tag/Tag";
import FoundationButton from "../CTA_Button/FoundationButton";

export default function FourthSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#111133] to-[#0A0A0A] text-brand-white px-6 sm:px-12 md:px-16 py-20 overflow-x-hidden">
      {/* Decorative BG: soft indigo glow + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(87,87,255,0.35) 0%, rgba(87,87,255,0) 70%)",
          }}
        />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative max-w-[1184px] mx-auto flex flex-col items-center text-center">
        {/* Foundation Spacing (top) */}
        <div className="h-20 sm:h-32" />

        {/* Tag */}
        <Tag text="What do we do?" size="medium" bgColor="bg-indigo-600" />

        {/* Gap between tag and heading */}
        <div className="h-6 sm:h-10" />

        {/* Heading L — 40px / 120% / Regular (Clash) */}
        <h2 className="font-clash text-[40px] leading-[120%] font-normal text-brand-white max-w-[782px] mx-auto">
          Because the future of finance should be transparent & intelligent
        </h2>

        {/* Subtext — Para M: 18px / 150% */}
        <p className="mt-5 text-[18px] leading-[150%] font-normal text-text-sub max-w-[782px]">
          We believe on-chain data shouldn’t be cryptic. Coinautics helps:
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <FoundationButton className="bg-white text-brand-black hover:bg-neutral-200">
            Know More About Us
          </FoundationButton>
        </div>

        {/* Cards Container (outer) */}
        <div className="mt-16 w-full">
          {/* Inner row wrapper per Figma: W=1184 (we’re already inside that), H=471, gap=24 */}
          <div className="w-full h-[471px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card slots will go here */}
            {/* Card 1 foundation */}
            <div className="rounded-3xl border border-[rgba(87,87,255,0.4)] bg-[rgba(17,17,51,0.4)] backdrop-blur-md h-full w-full">
              <Image
                src={card1}
                alt="Card illustration 1"
                className="rounded-3xl w-full h-[303px] object-cover"
              />
              <span className="absolute left-10 top-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                {/* Graph icon (strokes use currentColor) */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 20V6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 20h18"   stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <div className="w-full px-10 py-10 text-left space-y-10">
                <div className="space-y-3">
                  {/* Title + subtext will go here */}
                  <h3 className="font-clash text-[24px] leading-[140%] font-normal text-text-inverse">
                    Traders and Institutions
                  </h3>
                  <p className="text-[14px] leading-[150%] font-normal text-text-sub">
                    Spot hidden flows & large movements early, before the market
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 foundation */}
            <div className="rounded-3xl border border-[rgba(87,87,255,0.4)] bg-[rgba(17,17,51,0.4)] backdrop-blur-md h-full w-full">
            <Image
                src={card2}
                alt="Card illustration 1"
                className="rounded-3xl w-full h-[303px] object-cover"
              />
              <span className="absolute left-10 top-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div className="w-full px-10 py-10 text-left space-y-10">
                <div className="space-y-3">
                  {/* Title + subtext will go here */}
                  <h3 className="font-clash text-[24px] leading-[140%] font-normal text-text-inverse">
                    Analysts and Researchers
                  </h3>
                  <p className="text-[14px] leading-[150%] font-normal text-text-sub">
                    Dig into wallet behaviour and cross-chain trends with clarity & precision
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 foundation */}
            <div className="rounded-xl border border-[rgba(87,87,255,0.4)] bg-[rgba(17,17,51,0.4)] backdrop-blur-md h-full w-full">
            <Image
                src={card3}
                alt="Card illustration 1"
                className="rounded-3xl w-full h-[303px] object-cover"
              />
              <span className="absolute left-10 top-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div className="w-full px-10 py-10 text-left space-y-10">
                <div className="space-y-3">
                  {/* Title + subtext will go here */}
                  <h3 className="font-clash text-[24px] leading-[140%] font-normal text-text-inverse">
                    Crypto Communities
                  </h3>
                  <p className="text-[14px] leading-[150%] font-normal text-text-sub">
                    make smarter, faster, and data-backed decisions with real-time flow tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Control bar container (below cards row) */}
        <div className="mt-8 flex w-full justify-center">
          {/* group: progress pill + pause pill */}
          <div className="flex items-center gap-2">
            {/* PROGRESS pill (shrunk) */}
            <div className="w-[144px] h-8 rounded-full bg-[#3B3B3B] flex items-center px-2">
              {/* transparent inner group — 128×32, gap 8, px 12 */}
              <div className="w-[128px] h-8 flex items-center gap-2 px-3">
                {/* active bar 40×8 */}
                <span className="h-2 w-10 rounded-full bg-white" />
                {/* four dots 8×8 */}
                <span className="h-2 w-2 rounded-full bg-[#6C6C6C]" />
                <span className="h-2 w-2 rounded-full bg-[#6C6C6C]" />
                <span className="h-2 w-2 rounded-full bg-[#6C6C6C]" />
                <span className="h-2 w-2 rounded-full bg-[#6C6C6C]" />
              </div>
            </div>

            {/* PAUSE pill (outside the progress pill) */}
            <div className="h-8 w-8 rounded-full bg-[#3B3B3B] flex items-center justify-center">
              <div className="h-6 w-6 flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true" className="text-white">
                  <rect x="0" y="1" width="4" height="12" rx="1" fill="currentColor" />
                  <rect x="8" y="1" width="4" height="12" rx="1" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Foundation Spacing (bottom) */}
        <div className="h-section" aria-hidden />


      </div>
    </section>
  );
}
