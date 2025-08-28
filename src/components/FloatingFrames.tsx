"use client";
import * as React from "react";

type Pos = { top: number; left: number };

// keys for the floating labels we’ll place around the section
export type FrameKey =
  | "cryptoTraders"
  | "influencers"
  | "institutions"
  | "analysts"
  | "platformsProtocols";

// central content dictionary (edit later)
// 24×24 icon bubble + inline SVGs for all 5 pills
export const FRAME_CONTENT: Record<
  FrameKey,
  { title: string; subtitle?: string; icon?: React.ReactNode }
> = {
  cryptoTraders: {
    title: "Crypto Traders",
    subtitle: "Spot smart money",
    icon: (
      <div className="h-10 w-10 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5F67FF]">
        {/* Trending up (traders) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M1.5 9.5l3.5-3.5 2.5 2.5 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 4.5h3.5V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },

  influencers: {
    title: "Influencers",
    subtitle: "Share key insights",
    icon: (
      <div className="h-10 w-10 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5F67FF]">
        {/* Users (influencers) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle cx="6" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10.25" cy="4.25" r="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M2 11c.6-1.5 2.2-2.25 4-2.25s3.4.75 4 2.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },

  institutions: {
    title: "Institutions",
    subtitle: "Track larger moves",
    icon: (
      <div className="h-10 w-10 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5F67FF]">
        {/* Bank (institutions) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M7 2.25l4 2.25H3L7 2.25z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M3.5 5.5v4M7 5.5v4M10.5 5.5v4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9.5h8M2.25 11.25h9.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },

  analysts: {
    title: "Analysts",
    subtitle: "Decode wallet & tokens",
    icon: (
      <div className="h-10 w-10 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5F67FF]">
        {/* Bars (analytics) */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M3.25 11V7.25M7 11V5.25M10.75 11V8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12.25h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },

  platformsProtocols: {
    title: "Platforms & Protocols",
    subtitle: "Monitor ecosystem",
    icon: (
      <div className="h-10 w-10 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5F67FF]">
        {/* Network (platforms/protocols) */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="2.5" cy="3" r="1.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11.5" cy="3" r="1.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="2.5" cy="11" r="1.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11.5" cy="11" r="1.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3.6 3.9 5.6 5.9M10.4 3.9 8.4 5.9M3.6 10.1 5.6 8.1M10.4 10.1 8.4 8.1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
};


export type FloatingFrame = {
  key: FrameKey;
  desktop: Pos;
  mobile?: Pos;
  speed?: number;
  className?: string;
};

type Props = {
  frames: FloatingFrame[];
  className?: string;
  zIndex?: number;
  hideOnMobile?: boolean;
};

/** ──────────────────────────────────────────────────────────────────────
 * Pill shell – **structure only** per your screenshot:
 * - inline row auto-layout
 * - gap: 8px
 * - height: 52px
 * - min width set to 259px (so it doesn’t collapse below your target)
 * No visual design yet (bg/border/shadow to be added when you send specs).
 */
function PillShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 h-[52px] min-w-[259px] px-4 rounded-full",
        // keep visuals neutral for now:
        "bg-transparent border-0",
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
/** ────────────────────────────────────────────────────────────────────── */

export default function FloatingFrames({
  frames,
  className,
  zIndex = 0,
  hideOnMobile = false,
}: Props) {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        hideOnMobile ? "hidden md:block" : "",
        className || "",
      ].join(" ")}
      style={{ zIndex }}
      aria-hidden
    >
      {frames.map((f, i) => {
        const info = FRAME_CONTENT[f.key];
        const speed = f.speed ?? 10;
        const delta = (scrollY / 1000) * speed;

        return (
          <div
            key={f.key + i}
            className={["absolute transform-gpu animate-float", f.className || ""].join(" ")}
            style={{
              top: `calc(${f.desktop.top}px + ${delta}px)`,
              left: `${f.desktop.left}px`,
              animationDelay: `${(i % 5) * 0.2}s`,
            }}
          >
            {/* STRUCTURE-ONLY pill */}
            <PillShell>
              {/* icon placeholder (optional) */}
              {info.icon ? (
                <span className="shrink-0 pointer-events-auto">{info.icon}</span>
              ) : null}

              {/* text block (title + subtitle) */}
            <div className="pointer-events-auto leading-none flex h-[52px] min-w-[199px] flex-col justify-center rounded-3xl bg-[#E6E8FF] gap-2 pl-6 pr-2">
            <span className="text-[14px] font-medium text-[#111827]">
                {info.title}
            </span>
            {info.subtitle && (
                <span className="text-[12px] text-[#6B7280]">
                {info.subtitle}
                </span>
            )}
            </div>


            </PillShell>
          </div>
        );
      })}

      {/* scoped idle float keyframes */}
      <style jsx>{`
        @keyframes ffFloat {
            0%   { transform: translate3d(0, 0, 0); }
            50%  { transform: translate3d(0, -6px, 0); }
            100% { transform: translate3d(0, 0, 0); }
        }
        .animate-float { animation: ffFloat 7s ease-in-out infinite; }
        `}</style>
    </div>
  );
}
