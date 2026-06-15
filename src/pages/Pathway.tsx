import React from "react";
import { Link } from "react-router-dom";
import { KolamOrnament } from "../components/VectorIcons";
import { HeroAscendSvg } from "../components/IllustrationSVGs";
import { useLang } from "../i18n";

const KolamDivider = () => (
  <div className="kolam-divider py-10">
    <KolamOrnament className="w-12 h-12 text-terracotta opacity-30" />
  </div>
);

const steps = [
  {
    n: "01",
    category: "Awareness · for everyone",
    title: "Design & AI Literacy",
    body: "A free, self-paced course — no coding, no cost. Understand what design and AI really are, and use today's AI tools with confidence.",
    sidebar: { label: "The engine of the million", note: "~10–15 hours · this is what the public counter measures." },
    features: ["Free, mobile-first, self-paced","English + priority Indian languages","Certificate of completion","Distributed via campuses, NGOs & CSR programs"],
  },
  {
    n: "02",
    category: "Foundations · for the committed",
    title: "Skills & Frameworks",
    body: "Guided tracks in UX and product design, now AI-augmented — the models, methods and frameworks of the craft.",
    sidebar: { label: "Where depth begins", note: "Cohort & guided learning · scholarships open access." },
    features: ["UMO Design School tracks","Applied AI-for-designers modules","Scholarships for those who need them","Volunteer-led campus chapters"],
  },
  {
    n: "03",
    category: "Community · for belonging",
    title: "Mentorship & Community",
    body: "One-to-one mentors, peer circles, and the women of WSummit and UXINDIA. You cannot be what you cannot see.",
    sidebar: { label: "Belonging & role models", note: "Powered by your mentor network and flagship events." },
    features: ["1:1 and group mentoring","Peer learning circles","Speaker series & events","Visible women role models"],
  },
  {
    n: "04",
    category: "Careers · for the future",
    title: "Careers & Fellowships",
    body: "Portfolio reviews, internships with partner companies, and the 1MW Fellowship for emerging leaders.",
    sidebar: { label: "Outcomes that prove impact", note: "Smaller, deeper cohort — the proof literacy converts to careers." },
    features: ["Portfolio & interview prep","Internships & placements","The 1MW Fellowship","Alumni return as mentors — the flywheel"],
  },
];

export default function Pathway() {
  const { t, lang } = useLang();
  const hi = lang === "hi";

  return (
    <div className="w-full">
      {/* Interior Hero */}
      <section className="page-hero">
        <div className="container-wide w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
          <div>
            <p className="label text-[rgba(253,250,244,0.38)] mb-4">
              <Link to="/" className="hover:text-paper transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>
              {t("pathway.breadcrumb")}
            </p>
            <h1 className={`font-display italic text-paper font-light mb-5 ${hi ? "hindi-text" : ""}`}>
              {t("pathway.h1")}
            </h1>
            <p className={`text-[rgba(253,250,244,0.65)] text-[1.05rem] leading-relaxed max-w-[46ch] ${hi ? "hindi-text" : ""}`}>
              {t("pathway.hero.body")}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#step-01" className="btn btn-rose">{t("pathway.cta1")}</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="border border-[rgba(253,250,244,0.08)] bg-[rgba(253,250,244,0.04)] p-8 illustration-float w-full">
              <HeroAscendSvg />
            </div>
          </div>
        </div>
      </section>

      {/* The funnel */}
      <section className="bg-paper border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
        <div className="container-wide max-w-[680px]">
          <p className="eyebrow reveal reveal-1">The funnel</p>
          <h2 className="font-display italic text-ink reveal reveal-2" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>Wide at the top, deep at the bottom.</h2>
          <p className="text-ink text-[1.18rem] leading-relaxed mt-5 reveal reveal-3">
            The million is a literacy number. The careers are a smaller, deeper number that proves the literacy is real. Designing for both — and being honest about which is which — is what makes the goal credible.
          </p>
        </div>
      </section>

      {/* Detail steps */}
      <section className="bg-ivory border-b border-line" style={{ paddingTop: "clamp(64px,8vw,100px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="flex flex-col border-b border-line">
            {steps.map((step) => (
              <article
                key={step.n}
                id={`step-${step.n}`}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 py-10 border-t border-line reveal reveal-1"
              >
                <div className="font-display italic text-ink-muted leading-none" style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)" }}>
                  {step.n}
                </div>
                <div>
                  <p className="label text-terracotta mb-2">{step.category}</p>
                  <h3 className="font-body text-ink mb-3 normal-case tracking-normal" style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", letterSpacing: 0, textTransform: "none", fontWeight: 400 }}>
                    {step.title}
                  </h3>
                  <p className="text-ink-muted max-w-[60ch] mb-6">{step.body}</p>
                  <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
                    <ul className="flex flex-col gap-2">
                      {step.features.map(f => (
                        <li key={f} className="pl-5 relative text-ink-muted text-[0.95rem] before:content-['·'] before:absolute before:left-0 before:text-terracotta">{f}</li>
                      ))}
                    </ul>
                    <div className="border border-line bg-paper p-5 self-start">
                      <p className="label text-ink-muted mb-2">{step.sidebar.label}</p>
                      <p className="text-[0.92rem] text-ink-muted">{step.sidebar.note}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <KolamDivider />

      {/* Who it fits */}
      <section className="bg-stone texture-khadi border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">Who it fits</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>Wherever you start, the ladder fits.</h2>
            <p className="text-ink-muted text-[1.05rem] mt-4">The same four steps serve four kinds of learner — each with its own entry point, pace and goal.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-line">
            {[
              { title: "Students",          body: "Begin at literacy, find your spark on campus, and climb at your pace." },
              { title: "Early & mid-career",body: "Add AI fluency to real experience and stay ahead as the field shifts." },
              { title: "Returning to work", body: "Re-enter with current, in-demand skills and a community behind you." },
            ].map((p, i) => (
              <div key={p.title} className={`bg-paper p-8 border-line ${i < 2 ? "border-r border-line" : ""} reveal reveal-${(i+1) as 1|2|3}`}>
                <p className="font-body text-ink text-[0.95rem] tracking-[0.1em] uppercase mb-3">{p.title}</p>
                <p className="text-ink-muted text-[0.92rem] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide max-w-[640px] reveal reveal-1">
          <div className="kolam-divider mb-10">
            <KolamOrnament className="w-10 h-10 inline-block" style={{ color: "rgba(253,250,244,0.15)" } as React.CSSProperties} />
          </div>
          <h2 className="font-display italic text-paper font-light mb-4" style={{ fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 300 }}>Your first step is free.</h2>
          <p className="text-[rgba(253,250,244,0.6)] mb-8 max-w-[44ch]">Start with Design & AI literacy today — no cost, no coding, no prerequisites.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#step-01" className="btn btn-rose">Start learning</a>
            <Link to="/donate" className="btn btn-ghost-light">Sponsor a learner</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
