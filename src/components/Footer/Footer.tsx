"use client";
import { Instagram, Github, Linkedin, Send, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] px-32 py-12 flex items-center justify-between border-t border-[#1A1A1A]">
      {/* Left Side: Socials + Copyright */}
      <div className="flex flex-col gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <Link href="#" className="hover:text-[#5757FF] transition-colors">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="hover:text-[#5757FF] transition-colors">
            <Github size={20} />
          </Link>
          <Link href="#" className="hover:text-[#5757FF] transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href="#" className="hover:text-[#5757FF] transition-colors">
            <Send size={20} />
          </Link>
          <Link href="#" className="hover:text-[#5757FF] transition-colors">
            <Youtube size={20} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[14px] font-poppins text-text-sub">
          © 2025 Coinautics. All rights reserved.
        </p>
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="flex items-center gap-8 text-[15px] font-poppins text-text-sub">
        <Link
          href="#"
          className="flex items-center gap-1 text-white hover:text-[#5757FF] transition-colors"
        >
          About <span className="text-white">›</span>
        </Link>
        <Link href="#" className="hover:text-[#5757FF] transition-colors">
          Blog
        </Link>
        <Link href="#" className="hover:text-[#5757FF] transition-colors">
          Security
        </Link>
        <Link href="#" className="hover:text-[#5757FF] transition-colors">
          Terms
        </Link>
        <Link href="#" className="hover:text-[#5757FF] transition-colors">
          Careers
        </Link>
      </nav>
    </footer>
  );
}
