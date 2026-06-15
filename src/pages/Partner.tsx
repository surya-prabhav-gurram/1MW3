import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, KolamOrnament } from "../components/VectorIcons";
import { PartnerSvg } from "../components/IllustrationSVGs";
import { useLang } from "../i18n";

const faqs = [
  { q: "Can we route Indian CSR funds to 1MW?", a: "1MW's work sits squarely in CSR Schedule VII (education, skilling, women's empowerment). The Indian entity is completing CSR-1, 12A and 80G registration to receive CSR directly; until then we can structure giving through partners. Talk to us about the cleanest route for your company." },
  { q: "How do you report impact?", a: "Every partnership comes with a defined metric — women reached, scholarships funded, chapters launched — and a report against it, plus a place in our public counter and annual impact report." },
  { q: "Can we co-brand the literacy course?", a: "Yes — Literacy and Founding Partners can co-brand the Tier-1 course and certificate, including in specific languages or regions you care about." },
  { q: "Do you partner outside India?", a: "Yes. Delivery depth is India-first, but the digital literacy course is global, and we welcome global funders and multinational CSR. A US entity is being established for global giving." },
];

const tiers = [
  { name: "Scholarship Sponsor", price: "$10,000",    inr: "≈ ₹8L",      perks: ["Funds a cohort of full scholarships","Named scholarship","Impact report"], featured: false },
  { name: "Chapter Sponsor",     price: "$25–50,000", inr: "≈ ₹20–40L",  perks: ["Backs a cluster of campus chapters","Mentor & volunteer engagement","Brand on chapter materials"], featured: false },
  { name: "Literacy Partner",    price: "$100,000",   inr: "≈ ₹85L",     perks: ["Underwrites Tier-1 literacy at scale","Co-branded course & certificate","Internship pipeline access","Featured in press & report"], featured: true },
  { name: "Founding Partner",    price: "$250,000+",  inr: "≈ ₹2Cr+",    perks: ["Names a national program (multi-year)","Lead brand association","Board / advisory engagement","First access to talent & events"], featured: false },
];

export default function Partner() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
              {t("partner.breadcrumb")}
            </p>
            <h1 className={`font-display italic text-paper font-light mb-5 ${hi ? "hindi-text" : ""}`}>
              {t("partner.h1")}
            </h1>
            <p className={`text-[rgba(253,250,244,0.65)] text-[1.05rem] leading-relaxed max-w-[46ch] ${hi ? "hindi-text" : ""}`}>
              {t("partner.hero.body")}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="mailto:team@umo.design?subject=1MW%20Partnership" className="btn btn-rose">{t("partner.cta1")}</a>
              <a href="#tiers" className="btn btn-ghost-light">{t("partner.cta2")}</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="border border-[rgba(253,250,244,0.08)] bg-[rgba(253,250,244,0.04)] p-8 illustration-float w-full">
              <PartnerSvg />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-ivory border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">Why partner</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>Why companies and foundations partner.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-line">
            {[
              { title: "A talent pipeline", body: "Reach and shape thousands of women entering design and AI — your future hires, mentees and interns." },
              { title: "A story worth telling", body: "Associate your brand with a Fast Company–recognised, world-changing mission — credible ESG and DEI impact, not a logo on a page." },
              { title: "CSR-ready in India", body: "1MW maps cleanly to Schedule VII (education, skilling, women's empowerment). Registrations are in progress to receive CSR directly." },
            ].map((card, i) => (
              <div key={card.title} className={`bg-paper p-8 card-hover border-line ${i < 2 ? "border-r border-line" : ""} reveal reveal-${(i+1) as 1|2|3}`}>
                <p className="font-body text-ink text-[0.95rem] tracking-[0.1em] uppercase mb-3">{card.title}</p>
                <p className="text-ink-muted text-[0.92rem] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-line border-t-0">
            {[
              { n: "10,00,000", label: "Goal",         body: "women — the 2030 goal your partnership helps reach." },
              { n: "22 yrs",    label: "Track record",  body: "of UMO track record and an existing India + global community." },
              { n: "FC 2026",   label: "Recognition",   body: "Fast Company World Changing Ideas recognition." },
            ].map((s, i) => (
              <div key={s.label} className={`bg-paper p-8 border-line ${i < 2 ? "border-r border-line" : ""} reveal reveal-${(i+1) as 1|2|3}`}>
                <div className="font-display italic text-terracotta" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>{s.n}</div>
                <p className="label text-ink-muted mt-2 mb-3">{s.label}</p>
                <p className="text-ink-muted text-[0.9rem] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-stone texture-khadi border-b border-line" id="tiers" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">Partnership tiers</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>Ways to partner.</h2>
            <p className="text-ink-muted text-[1.05rem] mt-4">Illustrative tiers — we'll tailor a package to your goals, budget and geography. India CSR amounts available on request.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-line">
            {tiers.map((tier, i) => (
              <div key={tier.name} className={`bg-paper p-7 flex flex-col gap-4 border-line relative ${i < 3 ? "border-r border-line" : ""} ${tier.featured ? "ring-1 ring-terracotta ring-inset" : ""} reveal reveal-${(i+1) as 1|2|3|4}`}>
                {tier.featured && <span className="absolute -top-px left-6 right-6 h-px bg-terracotta" />}
                {tier.featured && <p className="label text-terracotta">Most partnered</p>}
                <p className="font-body text-ink text-[0.95rem] tracking-[0.1em] uppercase">{tier.name}</p>
                <div>
                  <div className="font-display italic text-ink" style={{ fontSize: "1.7rem", lineHeight: 1.1 }}>{tier.price}</div>
                  <div className="text-[0.72rem] text-ink-muted mt-1">{tier.inr}</div>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.perks.map(p => (
                    <li key={p} className="text-ink-muted text-[0.9rem] pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-terracotta">{p}</li>
                  ))}
                </ul>
                <a href="mailto:team@umo.design?subject=1MW%20Partnership" className={`btn mt-2 ${tier.featured ? "btn-rose" : "btn-ghost"}`}>Get in touch</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="max-w-[60ch] reveal reveal-1">
              <p className="eyebrow">How it works</p>
              <h2 className="font-display italic text-ink mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>More than a cheque.</h2>
              <p className="text-ink text-[1.15rem] leading-relaxed mb-8">The strongest partnerships work on three levels at once — the model proven by the best corporate programs in this space.</p>
              {[
                { h: "Fund",   body: "Underwrite literacy, scholarships, chapters or careers — directly tied to women reached." },
                { h: "Host",   body: "Open your offices and people for cohorts, workshops and events." },
                { h: "Mentor", body: "Your team mentors and your roles become internships — the pipeline closes the loop." },
              ].map((item) => (
                <div key={item.h} className="mb-6 border-t border-line pt-6">
                  <p className="font-body text-ink text-[0.9rem] tracking-[0.12em] uppercase mb-2">{item.h}</p>
                  <p className="text-ink-muted text-[1rem] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="reveal reveal-2">
              <p className="label text-ink-muted mb-5">Already supported by</p>
              <div className="flex flex-wrap gap-2 items-center mb-10">
                {["Microsoft","Target","Netcracker","Whatfix"].map(name => (
                  <span key={name} className="h-11 min-w-[110px] px-4 border border-dashed border-line flex items-center justify-center text-ink-muted text-[0.78rem] font-body bg-paper">{name}</span>
                ))}
                <span className="h-11 min-w-[110px] px-4 border border-dashed border-terracotta flex items-center justify-center text-terracotta text-[0.78rem] font-body">Your brand?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone texture-khadi border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[760px] mx-auto">
            <div className="mb-10 reveal reveal-1">
              <p className="eyebrow">FAQ</p>
              <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>Partner questions.</h2>
            </div>
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-line reveal reveal-2">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-5 font-display italic text-ink flex justify-between items-center gap-4 hover:text-terracotta transition-colors" style={{ fontSize: "1.1rem" }} aria-expanded={openFaq === i}>
                    {faq.q}
                    <ChevronDownIcon className={`w-5 h-5 flex-none text-terracotta transition-transform duration-250 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`accordion-panel ${openFaq === i ? "open" : ""}`}>
                    <div><p className="text-ink-muted pb-5 pr-8">{faq.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide max-w-[640px] reveal reveal-1">
          <div className="kolam-divider mb-10">
            <KolamOrnament className="w-10 h-10 inline-block" style={{ color: "rgba(253,250,244,0.15)" } as React.CSSProperties} />
          </div>
          <h2 className="font-display italic text-paper font-light mb-4" style={{ fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 300 }}>Let's design a partnership.</h2>
          <p className="text-[rgba(253,250,244,0.6)] mb-8 max-w-[46ch]">Tell us your goals and geography — we'll come back with a tailored package and the impact it buys.</p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:team@umo.design?subject=1MW%20Partnership" className="btn btn-rose">Book a call</a>
            <a href="mailto:team@umo.design?subject=1MW%20Partner%20Deck" className="btn btn-ghost-light">Request the deck</a>
          </div>
        </div>
      </section>
    </div>
  );
}
