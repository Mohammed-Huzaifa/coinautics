"use client";

import Image from "next/image";
import lostImg from "@/assets/images/lost.png";
import Tag from "@/components/Tag/Tag";

export default function SecondSection() {
  return (
    <section className="relative w-full min-h-[836px] bg-white overflow-hidden">
      {/* Foundation Spacing */}
      <div className="h-section w-full" />

      {/* Main Content Div */}
      <div className="max-w-[1184px] mx-auto px-6 sm:px-12 min-h-[580px] flex flex-col gap-14 md:flex-row">
        
        {/* Image Section (Left) */}
        <div className="w-[580px] h-[580px]">
          <Image
            src={lostImg}
            alt="Lost Opportunities Illustration"
            width={580}
            height={580}
            className="w-full h-full object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Right Side Div */}
        <div className="w-[503px] h-[580px] flex flex-col justify-center">
          
          {/* Inner Content Frame */}
          <div className="w-[503px] h-[397px] flex flex-col gap-8">
            
            {/* Tag Component */}
            <Tag text="Vision Mission" size="small" bgColor="bg-indigo-200/20 text-[#111133]" />

            {/* Heading + Paragraph */}
            <div className="w-full flex flex-col gap-3">
              <h2 className="font-clash text-[32px] leading-[1.2] text-[#111133]">
                Most traders miss when <br/>capital enters or exits the <br/>market, leading to lost <br/>opportunities
              </h2>
              <p className="font-poppins text-[16px] leading-[1.5] text-text-sub">
                We believe the imbalance must end. Our mission is<br/> to democratize access to real-time flow intelligence, 
                giving <br/>every trader, researcher, and community insider the tools <br/>to see ahead, manage risk, and capitalize 
                on market shifts <br/>before they become headlines.
              </p>
            </div>

          </div>

        </div>

      </div>
      <div className="h-section w-full" />
    </section>
  );
}
