"use client";

import { useState } from "react";
import "./gradient-border.css"; // ✅ Importing gradient styles

export default function EmailWaitlistInput() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
      }}
      className="gradient-border relative w-full max-w-[480px] h-[56px]
                 shadow-[0_0_12px_#5757FF,0_0_24px_#5757FF]
                 transition focus-within:shadow-[0_0_16px_#5757FF,0_0_32px_#5757FF]"
    >
      <div className="flex h-full w-full items-center justify-between rounded-full bg-[#0A0A0A]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow h-full px-4 sm:px-6 bg-transparent text-[#EAEAEA]
                     text-[14px] sm:text-[16px] md:text-[18px] font-normal 
                     font-['Clash_Grotesk',_Poppins,_sans-serif]
                     outline-none placeholder:text-[#A0A0A0]"
        />
        <button
          type="submit"
          className="h-full px-4 sm:px-6 md:px-8 bg-white text-[#0A0A0A]
                     text-[14px] sm:text-[16px] md:text-[18px] font-medium 
                     font-['Clash_Grotesk',_Poppins,_sans-serif]
                     rounded-full hover:bg-gray-100 transition-all whitespace-nowrap"
        >
          Join Waitlist
        </button>
      </div>
    </form>
  );
}
