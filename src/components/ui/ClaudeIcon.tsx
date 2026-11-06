import React from "react";

export function ClaudeIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Glow Spark */}
      <path
        d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
        fill="currentColor"
      />
      {/* Inner Contrast Accent */}
      <circle cx="12" cy="12" r="2.5" fill="#14110E" />
    </svg>
  );
}
