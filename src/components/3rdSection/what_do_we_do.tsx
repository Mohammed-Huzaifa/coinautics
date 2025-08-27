"use client";

import React from "react";
import Tag from "@/components/Tag/Tag";
import ImageSection from "@/assets/images/what-do-we.png";
import Image from "next/image";

export default function WhatDoWeDoSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-indigo-600/40 to-indigo-900/40 text-white px-6 sm:px-12 md:px-16 py-20">
      <div className="max-w-[1140px] mx-auto flex flex-col items-center">
        
        {/* Tag */}
        <Tag text="What do we do?" size="medium" bgColor="bg-indigo-600" />

        {/* Spacing */}
        <div className="h-12 sm:h-20" />

        {/* Card */}
        <div
          className="relative w-full max-w-[1184px] h-[471px] rounded-[32px] 
                     overflow-hidden border border-transparent 
                     bg-gradient-to-r from-indigo-600/40 to-indigo-900/40 
                     shadow-[inset_0_0_20px_rgba(87,87,255,0.3)] 
                     backdrop-blur-md"
        >
          {/* Background image */}
          <Image
            src={ImageSection}
            alt="What do we do"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content overlay */}
          <div className="relative z-10 flex flex-col justify-between h-full p-10">
            {/* Icon button top-left */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600">
              {/* Eye Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.574-3.008-9.964-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            {/* Text content */}
            <div className="mt-auto max-w-[470px]">
              <h3 className="text-white text-[28px] font-regular leading-tight">
                We turn blockchain chaos into clarity
              </h3>
              <p className="mt-3 text-gray-300 text-[16px] leading-relaxed">
                With Coinautics, you watch tokens flow across the crypto landscape —
                tracking wallets, identifying whales, and uncovering on-chain
                trends visually and instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
