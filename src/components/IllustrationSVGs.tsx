import React from "react";

/**
 * Shared figure motif — a seated/standing silhouette rendered as two flat
 * shapes (head + draped form). Reused across illustrations at different
 * scales and positions so the set reads as one family.
 */
const Figure = ({
  transform,
  fill = "var(--color-ink)",
  opacity = 1,
}: {
  transform: string;
  fill?: string;
  opacity?: number;
}) => (
  <g transform={transform} opacity={opacity}>
    <circle cx="0" cy="-34" r="22" fill={fill} />
    <path d="M-40 58 a40 46 0 0 1 80 0 z" fill={fill} />
  </g>
);

export const HeroAscendSvg = () => (
  <svg viewBox="0 0 600 470" role="img" aria-label="A woman ascending steps toward a career" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
    <circle cx="300" cy="235" r="170" fill="none" stroke="var(--color-line)" strokeWidth="1" />
    <rect x="150" y="360" width="84" height="40" fill="var(--color-stone)" />
    <rect x="270" y="320" width="84" height="80" fill="var(--color-stone)" />
    <rect x="390" y="280" width="84" height="120" fill="var(--color-line)" />
    <rect x="500" y="235" width="84" height="165" fill="var(--color-terracotta)" opacity="0.16" />
    <Figure transform="translate(192 300) scale(0.7)" fill="var(--color-ink)" opacity="0.85" />
    <Figure transform="translate(432 200) scale(0.85)" fill="var(--color-terracotta)" />
    <g stroke="var(--color-terracotta)" strokeWidth="0.8" opacity="0.5" fill="none">
      <circle cx="160" cy="140" r="3" fill="var(--color-terracotta)" stroke="none" />
      <circle cx="480" cy="90" r="3" fill="var(--color-terracotta)" stroke="none" />
      <line x1="160" y1="140" x2="480" y2="90" strokeDasharray="2 4" />
    </g>
  </svg>
);

export const DonateSvg = () => (
  <svg viewBox="0 0 600 470" role="img" aria-label="Giving to equip a woman with design and AI literacy" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
    <circle cx="300" cy="235" r="170" fill="none" stroke="var(--color-line)" strokeWidth="1" />
    <path d="M300 305 C 245 260 255 205 300 225 C 345 205 355 260 300 305 Z" fill="var(--color-terracotta)" opacity="0.85" />
    <path d="M215 300 q85 65 170 0" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    <Figure transform="translate(300 140) scale(0.7)" fill="var(--color-ink)" />
    <g fill="none" stroke="var(--color-terracotta)" strokeWidth="0.8" opacity="0.5">
      <circle cx="150" cy="120" r="3" fill="var(--color-terracotta)" stroke="none" />
      <circle cx="450" cy="340" r="3" fill="var(--color-terracotta)" stroke="none" />
    </g>
  </svg>
);

export const PartnerSvg = () => (
  <svg viewBox="0 0 600 470" role="img" aria-label="Companies partnering with 1MW" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
    <circle cx="300" cy="235" r="170" fill="none" stroke="var(--color-line)" strokeWidth="1" />
    <Figure transform="translate(230 235) scale(0.9)" fill="var(--color-ink)" />
    <Figure transform="translate(380 250) scale(0.78)" fill="var(--color-terracotta)" opacity="0.9" />
    <rect x="430" y="150" width="34" height="34" fill="var(--color-stone)" />
    <rect x="470" y="150" width="34" height="34" fill="var(--color-line)" />
    <rect x="450" y="112" width="34" height="34" fill="var(--color-terracotta)" opacity="0.18" />
    <g stroke="var(--color-terracotta)" strokeWidth="1" opacity="0.6">
      <line x1="240" y1="220" x2="372" y2="245" />
    </g>
    <circle cx="240" cy="220" r="3" fill="var(--color-terracotta)" />
    <circle cx="372" cy="245" r="3" fill="var(--color-terracotta)" />
  </svg>
);

export const MissionCentralSvg = () => (
  <svg viewBox="0 0 600 470" role="img" aria-label="A woman at the centre of design and AI" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
    <circle cx="300" cy="235" r="170" fill="none" stroke="var(--color-line)" strokeWidth="1" />
    <Figure transform="translate(300 225) scale(1.05)" fill="var(--color-ink)" />

    <g opacity="0.7">
      <g stroke="var(--color-terracotta)" strokeWidth="0.8" fill="none">
        <line x1="120" y1="130" x2="170" y2="110" />
        <line x1="120" y1="130" x2="160" y2="175" />
        <line x1="170" y1="110" x2="160" y2="175" />
      </g>
      <circle cx="120" cy="130" r="4" fill="var(--color-terracotta)" />
      <circle cx="170" cy="110" r="4" fill="var(--color-ink)" />
      <circle cx="160" cy="175" r="4" fill="var(--color-stone)" />
    </g>

    <g transform="translate(410 140)">
      <rect width="110" height="74" fill="var(--color-paper)" stroke="var(--color-line)" />
      <rect x="14" y="16" width="60" height="9" fill="var(--color-ink)" opacity="0.5" />
      <rect x="14" y="34" width="82" height="7" fill="var(--color-terracotta)" opacity="0.4" />
      <circle cx="92" cy="56" r="9" fill="var(--color-terracotta)" />
    </g>

    <g transform="translate(420 320)">
      <rect x="0" y="20" width="20" height="40" fill="var(--color-line)" />
      <rect x="28" y="0" width="20" height="60" fill="var(--color-terracotta)" />
      <rect x="56" y="32" width="20" height="28" fill="var(--color-stone)" />
    </g>

    <circle cx="130" cy="380" r="11" fill="var(--color-terracotta)" />
    <circle cx="160" cy="380" r="11" fill="var(--color-ink)" opacity="0.15" />
    <circle cx="190" cy="380" r="11" fill="var(--color-stone)" />
  </svg>
);

export const MissionCommunitySvg = () => (
  <svg viewBox="0 0 600 470" role="img" aria-label="Community of women in design and AI" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
    <circle cx="300" cy="235" r="170" fill="none" stroke="var(--color-line)" strokeWidth="1" />
    <Figure transform="translate(300 225) scale(1.0)" fill="var(--color-ink)" />
    <Figure transform="translate(196 260) scale(0.78)" fill="var(--color-terracotta)" opacity="0.85" />
    <Figure transform="translate(404 260) scale(0.78)" fill="var(--color-ink)" opacity="0.55" />

    <g stroke="var(--color-terracotta)" strokeWidth="0.8" opacity="0.6" fill="none">
      <line x1="300" y1="210" x2="210" y2="245" />
      <line x1="300" y1="210" x2="390" y2="245" />
      <line x1="210" y1="245" x2="390" y2="245" />
    </g>
    <circle cx="300" cy="210" r="3.5" fill="var(--color-terracotta)" />
    <circle cx="210" cy="245" r="3.5" fill="var(--color-terracotta)" />
    <circle cx="390" cy="245" r="3.5" fill="var(--color-terracotta)" />
  </svg>
);
