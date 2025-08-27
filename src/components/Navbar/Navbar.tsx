"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-12 right-12 z-50 flex items-center justify-between">
      {/* Left: Logo / Text */}
      <div className="text-white font-mono text-lg font-bold tracking-wide">
        COINAUTICS
      </div>

      {/* Right: Expanding Nav */}
      <motion.div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        animate={{ width: isOpen ? 480 : 220 }} // expand smoothly
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        className="h-12 flex items-center rounded-full bg-gradient-to-r from-[#1a174d] to-[#0a0a2e] shadow-lg px-3 overflow-hidden"
      >
        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-8 h-8 text-white"
        >
          <ChevronRight size={18} />
        </motion.div>

        {/* Nav Links */}
        <motion.div
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
          transition={{ duration: 0.4 }}
          className={`flex items-center gap-6 text-gray-200 text-sm font-medium ml-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/blogs">Blogs</Link>
        </motion.div>

        {/* Request Demo Button */}
        <Link
          href="/demo"
          className="ml-auto bg-white text-black rounded-full px-5 py-1.5 font-medium text-sm shadow-md"
        >
          Request a Demo
        </Link>
      </motion.div>
    </nav>
  );
}
