import React from "react";

export const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0c.6 6 5.4 10.8 11.4 12C17.4 13.2 12.6 18 12 24c-.6-6-5.4-10.8-11.4-12C6.6 10.8 11.4 6 12 0z" />
  </svg>
);

export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const OneMillionWomenLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 850 140" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="#1F1A14" fontFamily="'DM Sans', system-ui, sans-serif" fontWeight="500" fontSize="58" letterSpacing="1.5">
      <text x="0" y="58">ONE MILLION WOMEN</text>
      <text x="0" y="122">IN DESIGN &amp; AI</text>
    </g>
    <g fill="#B5552A" transform="translate(480, 20)">
      <path d="M 120,60 C 80,10 20,0 -30,-5 C 50,20 80,45 90,100 Z" />
      <path d="M 140,60 C 180,10 260,-15 340,-20 C 250,20 200,50 170,130 Z" />
      <ellipse cx="130" cy="15" rx="5" ry="9" transform="rotate(30 130 15)" />
    </g>
  </svg>
);

/**
 * Kolam-inspired geometric ornament.
 * A continuous, dot-based line pattern in the tradition of Tamil Nadu
 * threshold drawings. Thin strokes only, no fill — a quiet mark of place.
 * Colour and opacity are controlled by the consuming element via `className`
 * (uses currentColor) so it can sit as a hero watermark, a section divider,
 * or the favicon.
 */
export const KolamOrnament = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
    aria-hidden="true"
  >
    {/* dot grid */}
    <g fill="currentColor" stroke="none">
      <circle cx="12" cy="12" r="0.9" />
      <circle cx="24" cy="12" r="0.9" />
      <circle cx="36" cy="12" r="0.9" />
      <circle cx="12" cy="24" r="0.9" />
      <circle cx="24" cy="24" r="0.9" />
      <circle cx="36" cy="24" r="0.9" />
      <circle cx="12" cy="36" r="0.9" />
      <circle cx="24" cy="36" r="0.9" />
      <circle cx="36" cy="36" r="0.9" />
    </g>

    {/* continuous looping line — sikku kolam style */}
    <path d="M12 6 C 18 6 18 12 12 12 C 6 12 6 18 12 18 C 18 18 18 12 24 12 C 30 12 30 18 24 18 C 18 18 18 24 24 24 C 30 24 30 18 36 18 C 42 18 42 24 36 24 C 30 24 30 30 36 30 C 42 30 42 36 36 36 C 30 36 30 30 24 30 C 18 30 18 36 24 36 C 30 36 30 42 24 42 C 18 42 18 36 12 36 C 6 36 6 30 12 30 C 18 30 18 24 12 24 C 6 24 6 18 12 18" />

    {/* outer frame loops */}
    <path d="M12 6 C 6 6 6 0 12 0 C 18 0 18 6 12 6" />
    <path d="M36 12 C 42 12 42 6 36 6 C 30 6 30 12 36 12" />
    <path d="M36 36 C 42 36 42 42 36 42 C 30 42 30 36 36 36" />
    <path d="M12 42 C 6 42 6 48 12 48 C 18 48 18 42 12 42" />
  </svg>
);
