// src/components/Tag/Tag.tsx
import React from "react";

interface TagProps {
  text: string;
  icon?: React.ReactNode;
  size?: "small" | "medium";
  bgColor?: string; // Tailwind classes
}

export default function Tag({
  text,
  icon,
  size = "medium",
  bgColor = "bg-indigo-600"
}: TagProps) {
  const baseClasses =
    "flex items-center rounded-full text-white font-medium w-auto max-w-max";

  const sizeClasses =
    size === "small" ? "text-sm px-3 py-1 gap-2" : "text-lg px-4 py-2 gap-3";

  return (
    <div className={`${baseClasses} ${bgColor} ${sizeClasses}`}>
      {icon && (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500">
          {icon}
        </span>
      )}
      <span>{text}</span>
    </div>
  );
}
