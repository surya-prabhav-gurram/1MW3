import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { KolamOrnament } from "../components/VectorIcons";
import { MissionCentralSvg, MissionCommunitySvg } from "../components/IllustrationSVGs";
import { useLang } from "../i18n";

const KolamDivider = () => (
  <div className="kolam-divider py-10">
    <KolamOrnament className="w-12 h-12 text-terracotta opacity-30" />
  </div>
);

function ImpactCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [progWidth, setProgWidth] = useState("0%");
  const [hasRun, setHasRun] = useState(false);
  const TARGET = 48750;
  const GOAL = 1000000;
  const { t } = useLang();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun) {
        setHasRun(true);
        obs.disconnect();
        const duration = 2400;
        const start = performance.now();
        const pct = ((TARGET / GOAL) * 100).toFixed(2) + "%";
        requestAnimationFrame(function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          setCount(Math.round(ease * TARGET));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(TARGET);
        });
        setTimeout(() => setProgWidth(pct), 16);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasRun]);

  return (
    <div ref={ref}>
      <span className="block font-display italic leading-none text-ink" style={{ fontSize: "clamp(5rem,12vw,9rem)" }}>
        {count.toLocaleString("en-IN")}
      </span>
      <div className="label text-ink-muted mt-4 mb-6">{t("home.impact.label")}</div>
      <div className="progress-track max-w-sm">
        <div className="progress-fill" style={{ width: progWidth }} />
      </div>
      <p className="text-[0.78rem] font-body text-ink-muted mt-3 italic" style={{ fontFamily: "var(--font-display)" }}>
        {t("home.impact.goal")}
      </p>
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const hi = lang === "hi";

  return (
    <div className="w-full">

      {/* ══ HERO — fills viewport ══ */}
      <section className="bg-ivory border-b border-line hero-full">
        {/* Main content row */}
        <div className="container-wide flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-center w-full py-[clamp(64px,8vw,100px)]">

            {/* Left */}
            <div>
              <p className={`hero-eyebrow eyebrow ${hi ? "hindi-text" : ""}`}>{t("home.hero.eyebrow")}</p>
              <h1 className="hero-h1 font-display italic font-light text-ink max-w-[16ch]">
                {t("home.hero.h1a")}{" "}
                <em style={{ color: "var(--color-terracotta)" }}>{t("home.hero.h1b")}</em>{" "}
                {t("home.hero.h1c")}
              </h1>
              <p className={`hero-body text-ink-muted mt-6 max-w-[44ch] text-[1.08rem] leading-relaxed ${hi ? "hindi-text" : ""}`}>
                {t("home.hero.body")}{" "}
                <a href="https://www.umo.design/" target="_blank" rel="noreferrer" className="text-link">
                  UMO Design Foundation
                </a>, India.
              </p>
              <div className="hero-cta flex flex-wrap gap-3 mt-8">
                <Link to="/#involve" className="btn btn-primary">{t("home.hero.cta1")}</Link>
                <Link to="/mission" className="btn btn-ghost">{t("home.hero.cta2")}</Link>
              </div>
            </div>

            {/* Right: illustration — vertically centred */}
            <div className="hero-illustration flex items-center justify-center">
              <div
                className="border border-line illustration-float overflow-hidden relative w-full"
                style={{ background: "var(--color-stone)", padding: "clamp(32px,5vw,64px)" }}
              >
                <KolamOrnament
                  className="absolute bottom-4 right-4 text-terracotta pointer-events-none"
                  style={{ width: 300, height: 300, opacity: 0.04 } as React.CSSProperties}
                />
                <MissionCentralSvg />
              </div>
            </div>
          </div>
        </div>

        {/* Identity strip — pinned to bottom */}
        <div className="border-t border-line">
          <div className="container-wide py-[10px]">
            <p className={`${hi ? "hindi-text" : ""}`} style={{ fontSize: 8, letterSpacing: "0.2em", fontFamily: hi ? "var(--font-hindi)" : "var(--font-body)", color: "var(--color-ink-muted)", textTransform: hi ? "none" : "uppercase" }}>
              {t("home.hero.strip")}
            </p>
          </div>
        </div>
      </section>

      {/* ══ STAKES ══ */}
      <section className="bg-ink border-b border-[rgba(253,250,244,0.08)]" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide max-w-[680px]">
          <p className={`eyebrow on-dark reveal reveal-1 ${hi ? "hindi-text" : ""}`}>{t("home.stakes.eyebrow")}</p>
          <h2 className={`font-display italic text-paper reveal reveal-2 ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", lineHeight: 1.05 }}>
            {t("home.stakes.h2")}
          </h2>
          <p className={`text-[rgba(253,250,244,0.62)] mt-6 text-[1.08rem] leading-relaxed reveal reveal-3 ${hi ? "hindi-text" : ""}`} style={{ maxWidth: "52ch" }}>
            {t("home.stakes.body")}
          </p>
          <div className="flex flex-wrap gap-3 mt-8 reveal reveal-4">
            <Link to="/mission" className="btn btn-ghost-light">{t("home.stakes.cta")}</Link>
          </div>
        </div>
      </section>

      {/* ══ IMPACT COUNTER ══ */}
      <section className="bg-stone texture-khadi border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10 items-center">
            <div className="reveal reveal-1">
              <ImpactCounter />
            </div>
            <div className="border border-line bg-paper p-10 reveal reveal-2 flex flex-col justify-center">
              <div className="font-display italic text-terracotta" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>
                {t("home.impact.stat")}
              </div>
              <p className={`label text-ink-muted mt-2 mb-4 ${hi ? "hindi-text" : ""}`}>{t("home.impact.statLabel")}</p>
              <p className={`text-[0.95rem] text-ink-muted leading-relaxed ${hi ? "hindi-text" : ""}`}>{t("home.impact.statBody")}</p>
            </div>
          </div>
        </div>
      </section>

      <KolamDivider />

      {/* ══ PATHWAY CARDS ══ */}
      <section className="bg-paper border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="mb-12 reveal reveal-1">
            <p className={`eyebrow ${hi ? "hindi-text" : ""}`}>{t("home.pathway.eyebrow")}</p>
            <h2 className={`font-display italic text-ink ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>
              {t("home.pathway.h2")}
            </h2>
            <p className={`text-ink-muted mt-4 max-w-[50ch] text-[1.05rem] ${hi ? "hindi-text" : ""}`}>
              {t("home.pathway.body")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-line">
            {(["01","02","03","04"] as const).map((n, i) => (
              <Link
                key={n}
                to="/pathway"
                className={`pathway-card bg-paper border-line p-8 flex flex-col gap-4 relative group ${i < 3 ? "border-r border-line" : ""} reveal reveal-${(i + 1) as 1|2|3|4}`}
              >
                <span className="font-display italic text-[2rem] text-ink-muted leading-none">{n}</span>
                <div>
                  <p className={`label text-terracotta mb-2 ${hi ? "hindi-text" : ""}`}>{t(`step.${n}.label`)}</p>
                  <h3 className="font-body text-ink tracking-normal normal-case" style={{ fontSize: "1.05rem", letterSpacing: 0, textTransform: "none", fontWeight: 400 }}>
                    <span className={hi ? "hindi-text" : ""}>{t(`step.${n}.title`)}</span>
                  </h3>
                </div>
                <p className={`text-ink-muted text-[0.92rem] leading-relaxed flex-1 ${hi ? "hindi-text" : ""}`}>{t(`step.${n}.body`)}</p>
                <span className="arrow-affordance text-terracotta mt-auto inline-flex items-center gap-1 text-[0.78rem] tracking-[0.1em] uppercase">
                  {t("home.pathway.cta")} <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="bg-ivory border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <p className={`eyebrow reveal reveal-1 ${hi ? "hindi-text" : ""}`}>{t("home.voices.eyebrow")}</p>
          <h2 className={`font-display italic text-ink mb-12 reveal reveal-2 ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>
            {t("home.voices.h2")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-line reveal reveal-3">
            {(["t1","t2","t3"] as const).map((k) => (
              <figure key={k} className="testimonial-figure px-8 first:pl-0 last:pr-0 flex flex-col gap-5">
                <blockquote className={`font-display italic text-ink-muted ${hi ? "hindi-text" : ""}`} style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
                  "{t(`${k}.q`)}"
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-auto">
                  <span className="w-16 h-16 rounded-full bg-stone flex items-center justify-center text-ink flex-none font-display italic" style={{ fontSize: "1.1rem" }}>
                    {t(`${k}.name`)[0]}
                  </span>
                  <span className="flex flex-col">
                    <b className="font-body font-light text-ink text-[0.9rem]">{t(`${k}.name`)}</b>
                    <span className={`text-[0.8rem] font-light text-ink-muted ${hi ? "hindi-text" : ""}`}>{t(`${k}.role`)}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GET INVOLVED ══ */}
      <section id="involve" className="border-b border-[rgba(253,250,244,0.08)]" style={{ background: "#1F1A14", paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <p className={`eyebrow on-dark reveal reveal-1 ${hi ? "hindi-text" : ""}`}>{t("home.involve.eyebrow")}</p>
          <h2 className={`font-display italic text-paper mb-12 reveal reveal-2 ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 300 }}>
            {t("home.involve.h2")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(253,250,244,0.08)]">
            {(["learn","mentor","vol","partner"] as const).map((key, i) => (
              <div
                key={key}
                className={`p-8 flex flex-col gap-4 transition-colors duration-300 hover:bg-[rgba(253,250,244,0.04)] ${i < 3 ? "border-r border-[rgba(253,250,244,0.08)]" : ""} reveal reveal-${(i+1) as 1|2|3|4}`}
              >
                <h3 className={`font-body text-paper text-[0.95rem] tracking-[0.18em] uppercase ${hi ? "hindi-text" : ""}`}>{t(`involve.${key}.title`)}</h3>
                <p className={`text-[rgba(253,250,244,0.55)] text-[0.92rem] leading-relaxed flex-1 ${hi ? "hindi-text" : ""}`}>{t(`involve.${key}.body`)}</p>
                <a
                  href={key === "partner" ? "/partner" : key === "learn" ? "/#involve" : "mailto:team@umo.design"}
                  className="text-terracotta text-[9.5px] tracking-[0.18em] uppercase font-body inline-flex items-center gap-1"
                >
                  {t(`involve.${key}.cta`)} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KolamDivider />

      {/* ══ IMPACT STATS ══ */}
      <section id="impact" className="bg-stone texture-khadi border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <p className={`eyebrow reveal reveal-1 ${hi ? "hindi-text" : ""}`}>{t("home.stats.eyebrow")}</p>
          <h2 className={`font-display italic text-ink mb-12 reveal reveal-2 ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>
            {t("home.stats.h2")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-line">
            {[
              { n: "22",        unit: hi ? "वर्ष"        : "years",       body: hi ? "UMO डिज़ाइन शिक्षा के वर्ष जो इस मिशन को शक्ति देते हैं।" : "of UMO design education powering the mission." },
              { n: "~3,00,000", unit: hi ? "जीवन"        : "lives",       body: hi ? "UMO कार्यक्रमों के माध्यम से पहले से छुए जीवन।" : "already touched through UMO programs." },
              { n: "10,00,000", unit: hi ? "लक्ष्य"       : "goal",        body: hi ? "2030 तक डिज़ाइन और AI साक्षरता वाली महिलाएँ।" : "women with Design & AI literacy by 2030." },
              { n: "FC 2026",   unit: hi ? "पहचान"       : "recognition", body: hi ? "फ़ास्ट कंपनी वर्ल्ड चेंजिंग आइडियाज़।" : "Fast Company World Changing Ideas." },
            ].map((stat, i) => (
              <div key={stat.unit} className={`bg-paper p-8 border-line ${i < 3 ? "border-r border-line" : ""} reveal reveal-${(i+1) as 1|2|3|4}`}>
                <div className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>{stat.n}</div>
                <p className={`label text-terracotta mt-1 mb-3 ${hi ? "hindi-text" : ""}`}>{stat.unit}</p>
                <p className={`text-ink-muted text-[0.9rem] leading-relaxed ${hi ? "hindi-text" : ""}`}>{stat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNER / DONATE SPLIT ══ */}
      <section className="border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-0 border border-line">
          <div className="bg-ink p-10 flex flex-col gap-6 border-b lg:border-b-0 border-r-0 lg:border-r border-[rgba(253,250,244,0.08)] reveal reveal-1">
            <p className={`eyebrow on-dark ${hi ? "hindi-text" : ""}`}>{t("home.companies.eyebrow")}</p>
            <h2 className={`font-display italic text-paper font-light ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(1.8rem,3.2vw,2.6rem)", lineHeight: 1.05 }}>
              {t("home.companies.h2")}
            </h2>
            <p className={`text-[rgba(253,250,244,0.6)] text-[0.95rem] leading-relaxed max-w-[40ch] ${hi ? "hindi-text" : ""}`}>
              {t("home.companies.body")}
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              <Link to="/partner" className="btn btn-rose">{t("home.companies.cta1")}</Link>
              <Link to="/partner" className="btn btn-ghost-light">{t("home.companies.cta2")}</Link>
            </div>
          </div>
          <div className="bg-paper p-10 flex flex-col gap-6 reveal reveal-2">
            <p className={`eyebrow ${hi ? "hindi-text" : ""}`}>{t("home.indiv.eyebrow")}</p>
            <h2 className={`font-display italic text-ink ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(1.8rem,3.2vw,2.6rem)", lineHeight: 1.05 }}>
              {t("home.indiv.h2")}
            </h2>
            <p className={`text-ink-muted text-[0.95rem] leading-relaxed max-w-[40ch] ${hi ? "hindi-text" : ""}`}>
              {t("home.indiv.body")}
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              <Link to="/donate" className="btn btn-primary">{t("home.indiv.cta1")}</Link>
              <Link to="/donate" className="btn btn-ghost">{t("home.indiv.cta2")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NEWSLETTER ══ */}
      <section style={{ background: "#1F1A14", paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide text-center">
          <div className="kolam-divider mb-8">
            <KolamOrnament className="w-12 h-12 inline-block" style={{ color: "rgba(253,250,244,0.15)" } as React.CSSProperties} />
          </div>
          <p className={`eyebrow on-dark reveal reveal-1 ${hi ? "hindi-text" : ""}`} style={{ display: "block", textAlign: "center" }}>{t("home.nl.eyebrow")}</p>
          <h2 className={`font-display italic text-paper font-light mb-4 reveal reveal-2 ${hi ? "hindi-text" : ""}`} style={{ fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 300 }}>
            {t("home.nl.h2")}
          </h2>
          <p className={`text-[rgba(253,250,244,0.55)] mb-8 max-w-[44ch] mx-auto text-[1rem] reveal reveal-3 ${hi ? "hindi-text" : ""}`}>
            {t("home.nl.body")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto reveal reveal-4">
            <input
              type="email"
              placeholder={t("home.nl.ph")}
              className="flex-1 bg-transparent px-4 py-3 text-paper text-[0.9rem] font-body outline-none"
              style={{ border: "1px solid rgba(253,250,244,0.18)", transition: "border-color 200ms" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(253,250,244,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(253,250,244,0.18)")}
            />
            <button type="button" className="btn btn-primary whitespace-nowrap">{t("home.nl.cta")}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
