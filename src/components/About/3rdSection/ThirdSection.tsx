"use client";
import Tag from "@/components/Tag/Tag";
import { Cpu, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import aiImg from "@/assets/images/Ai.png";
import clarity from "@/assets/images/clarity.png";
import built from "@/assets/images/built.png";

export default function ThirdSection() {
  return (
    <section className="relative w-full min-h-[798px] bg-[#0A0A0A] overflow-hidden flex justify-between">
      {/* Left Side Div */}
      <div className="w-[548px] h-[798px] flex flex-col gap-10 ml-72">
        {/* Foundation Spacing */}
        <div className="w-full h-[128px]" />
        <div className="w-[548px] h-[542px] flex flex-col gap-10">
          <Tag
            text="Why Choose Us and Why Now?"
            size="medium"
            bgColor="bg-[#343499] text-[#F3F3F3]"
          />
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-clash text-[40px] leading-[1.2] text-text-inverse">
              In a market moving<br /> faster than ever, clarity is <br /> no longer optional
            </h2>
            <p className="font-poppins text-[16px] leading-[1.5] text-text-sub">
              Coinautics combines powerful visuals, AI agents, and real-time flow
              tracking to help you stay ahead of trends, not behind them
            </p>
          </div>
        </div>
        <div className="w-full h-[128px]" />
      </div>

      {/* Right Side Div */}
      <div className="w-[708px] h-[798px] grid grid-cols-2 grid-rows-2 gap-0 mr-26">
        {/* Part 1 */}
        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A3D] backdrop-blur-md flex flex-col gap-6">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#343499] text-white">
            <Cpu size={20} />
          </button>
          <div className="flex flex-col gap-2">
            <h6 className="font-clash text-[22px] leading-[1.3] text-text-inverse">
              AI-Powered Flow Intelligence
            </h6>
            <p className="font-poppins text-[15px] leading-[1.6] text-text-sub">
              Real-time token mapping, wallet behaviour,
              & predictive alerts, all powered by AI to help
              you act before the market
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={aiImg}
            alt="AI Illustration"
            width={354}
            height={266}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Part 2 */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={clarity}
            alt="Clarity Illustration"
            width={354}
            height={266}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A3D] backdrop-blur-md flex flex-col gap-6">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#343499] text-white">
            <Eye size={20} />
          </button>
          <div className="flex flex-col gap-2">
            <h6 className="font-clash text-[22px] leading-[1.3] text-text-inverse">
              Clarity That Levels the Field
            </h6>
            <p className="font-poppins text-[15px] leading-[1.6] text-text-sub">
              Visual tools once reserved for institutions
              are now in your hands, helping you trade
              smarter, faster, and more confidently
            </p>
          </div>
        </div>

        {/* Part 3 */}
        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A3D] backdrop-blur-md flex flex-col gap-6">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#343499] text-white">
            <Share2 size={20} />
          </button>
          <div className="flex flex-col gap-2">
            <h6 className="font-clash text-[22px] leading-[1.3] text-text-inverse">
              Built for the Decentralised Era
            </h6>
            <p className="font-poppins text-[15px] leading-[1.6] text-text-sub">
              As crypto and AI converge, Coinautics empowers
              users, not just banks, with the next generation
              of market intelligence
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={built}
            alt="Decentralised Illustration"
            width={354}
            height={266}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
