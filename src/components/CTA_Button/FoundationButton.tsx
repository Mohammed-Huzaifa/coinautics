"use client"; // Client Component for interaction

import React, { useState } from "react";

// Arrow icon now uses `currentColor` instead of hardcoded white
function ArrowIcon() {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="block"
    >
      <polyline
        points="9 6 15 12 9 18"
        stroke="currentColor" // ✅ follows text color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export default function FoundationButton({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
}: Props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    onClick?.();
    setTimeout(() => setClicked(false), 180);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={[
        "group relative inline-flex items-center justify-center",
        "h-12 px-6 py-3 gap-2",
        "rounded-[250px] border",
        "bg-black border-black",
        "text-[18px] font-semibold leading-[150%]",
        "transition-all duration-200 ease-out",
        "hover:pr-14 focus:pr-14",
        clicked ? "pr-14" : "",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "shadow-[0_2px_8px_0_rgba(39,110,241,0.25)]",
        className, // ✅ applied last, overrides defaults
      ].join(" ")}
    >
      <span className="block">{children}</span>
      <span
        className={[
          "pointer-events-none absolute right-6 flex items-center justify-center",
          "transition-all duration-200 ease-out",
          "opacity-0 translate-x-[-0.75rem] scale-90",
          "group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100",
          "group-focus:opacity-100 group-focus:translate-x-0 group-focus:scale-100",
          clicked ? "opacity-100 translate-x-0 scale-100" : "",
        ].join(" ")}
        style={{ transitionProperty: "opacity, transform" }}
      >
        <ArrowIcon />
      </span>
    </button>
  );
}
