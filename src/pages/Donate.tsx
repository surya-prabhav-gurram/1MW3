import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, KolamOrnament } from "../components/VectorIcons";
import { DonateSvg } from "../components/IllustrationSVGs";
import { useLang } from "../i18n";

const faqs = [
  { q: "Is my donation tax-deductible?", a: "We're completing 80G registration in India and establishing a US 501(c)(3) for tax-deductible giving abroad. Until those are live we'll be transparent about your gift's status — ask us and we'll tell you exactly where things stand." },
  { q: "Can I give from outside India?", a: "Yes — we accept global payments and are setting up a US entity so international donors can give and, soon, deduct." },
  { q: "What does monthly giving do?", a: "Monthly gifts are the most valuable kind — predictable funding lets us commit to cohorts and chapters in advance. $40/month sponsors a new woman every month." },
  { q: "Can my company give instead?", a: "Absolutely — and in India this may qualify as CSR. See partnerships for company and foundation giving." },
];

export default function Donate() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [recurrence, setRecurrence] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<"40" | "200" | "850" | "4000" | "custom">("40");
  const { t, lang } = useLang();
  const hi = lang === "hi";

  const getImpactMessage = () => {
    switch (amount) {
      case "40":     return <><strong>1 woman</strong> fully equipped with Design &amp; AI literacy</>;
      case "200":    return <><strong>5 women</strong> through the full literacy program</>;
      case "850":    return <>a <strong>campus chapter</strong> of ~20 women for a term</>;
      case "4000":   return <><strong>100 women</strong> reached with literacy — a whole cohort</>;
      case "custom": return <>every rupee or dollar is a name on the path to a million</>;
    }
  };

  return (
    <div className="w-full">
      {/* Interior Hero */}
      <section className="page-hero">
        <div className="container-wide w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
          <div>
            <p className="label text-[rgba(253,250,244,0.38)] mb-4">
              <Link to="/" className="hover:text-paper transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>
              {t("donate.breadcrumb")}
            </p>
            <h1 className={`font-display italic text-paper font-light mb-5 ${hi ? "hindi-text" : ""}`}>
              {t("donate.h1")}
            </h1>
            <p className={`text-[rgba(253,250,244,0.65)] text-[1.05rem] leading-relaxed max-w-[46ch] ${hi ? "hindi-text" : ""}`}>
              {t("donate.hero.body")}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="border border-[rgba(253,250,244,0.08)] bg-[rgba(253,250,244,0.04)] p-8 illustration-float w-full">
              <DonateSvg />
            </div>
          </div>
        </div>
      </section>

      {/* Donate widget + Transparency */}
      <section className="bg-paper border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-start">
            <div className="border border-line bg-paper p-8 md:p-10 reveal reveal-1">
              <div className="flex border border-line mb-6" role="group">
                {(["one-time", "monthly"] as const).map((r) => (
                  <button key={r} onClick={() => setRecurrence(r)} className={`flex-1 py-2.5 text-[9.5px] tracking-[0.12em] uppercase font-body transition-colors duration-200 ${recurrence === r ? "bg-ink text-paper" : "bg-transparent text-ink-muted hover:text-ink"}`}>
                    {r === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                {(["40", "200", "850", "4000", "custom"] as const).map((a) => (
                  <button key={a} onClick={() => setAmount(a)} className={`border p-4 text-center transition-all duration-200 ${amount === a ? "border-terracotta bg-[rgba(181,85,42,0.06)]" : "border-line bg-paper hover:border-ink-muted"}`}>
                    <div className="font-display italic text-ink" style={{ fontSize: "clamp(1.4rem,3vw,1.7rem)", lineHeight: 1.1 }}>
                      {a === "custom" ? "Other" : `$${parseInt(a).toLocaleString("en-IN")}`}
                    </div>
                    <small className="block font-body text-ink-muted mt-1 text-[0.68rem] tracking-[0.05em]">
                      {a === "40" ? "1 woman" : a === "200" ? "5 women" : a === "850" ? "a chapter" : a === "4000" ? "100 women" : "you choose"}
                    </small>
                  </button>
                ))}
              </div>
              <div className="border border-line bg-stone p-4 mb-5 text-[0.95rem] text-ink">
                <span className="text-terracotta mr-1">→</span> {getImpactMessage()}
              </div>
              <button className="btn btn-primary w-full justify-center py-4 text-[0.85rem]">Give now</button>
              <div className="flex flex-wrap gap-4 mt-5 text-[0.72rem] text-ink-muted">
                <span>Secure checkout</span>
                <span>Razorpay · Stripe</span>
                <span>India &amp; global</span>
              </div>
              <p className="text-[0.68rem] text-ink-muted mt-3 leading-relaxed">* 80G tax-deduction (India) and US tax-deductibility available as registrations complete.</p>
            </div>

            <div className="reveal reveal-2">
              <p className="eyebrow">Transparency</p>
              <h2 className="font-display italic text-ink mb-4" style={{ fontSize: "clamp(1.7rem,3.2vw,2.5rem)" }}>Where your money goes.</h2>
              <p className="text-ink text-[1.12rem] leading-relaxed mb-4">$40 is the real, all-in cost to take one woman through Design &amp; AI literacy — platform, support, software and access included.</p>
              <p className="text-ink-muted text-[1rem] mb-4">Because the literacy engine is digital, the overwhelming majority of every gift reaches a learner, not overhead. Larger gifts fund the deeper steps — skilling, mentorship and careers — that turn literacy into livelihoods.</p>
              <p className="text-ink-muted text-[1rem]">We publish what we reach. Your gift shows up in the public counter and the annual impact report — verified, not rounded.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone texture-khadi border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-line">
            {[
              { n: "$40",       label: "Per woman",  body: "equips one woman, end to end." },
              { n: "~3,00,000", label: "Lives touched", body: "already reached in 22 years." },
              { n: "10,00,000", label: "The goal",   body: "your gift moves us toward." },
            ].map((s, i) => (
              <div key={s.label} className={`bg-paper p-8 border-line ${i < 2 ? "border-r border-line" : ""} reveal reveal-${(i+1) as 1|2|3}`}>
                <div className="font-display italic text-terracotta" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>{s.n}</div>
                <p className="label text-ink-muted mt-2 mb-3">{s.label}</p>
                <p className="text-ink-muted text-[0.9rem]">{s.body}</p>
              </div>
            ))}
          </div>
          <figure className="border border-line bg-paper p-8 md:p-10 max-w-2xl mx-auto mt-12 reveal reveal-2">
            <blockquote className="font-display italic text-ink text-center" style={{ fontSize: "1.25rem", lineHeight: 1.5 }}>
              "1MW opened doors to a world of possibilities I never knew existed."
            </blockquote>
            <figcaption className="flex items-center justify-center gap-3 mt-6">
              <span className="w-11 h-11 rounded-full bg-stone flex items-center justify-center font-display italic text-ink flex-none">A</span>
              <span className="flex flex-col text-left">
                <b className="font-body font-light text-ink text-[0.92rem]">Ankita Chandavarkar</b>
                <span className="text-[0.8rem] font-light text-ink-muted">1MW participant</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[760px] mx-auto">
            <div className="mb-10 reveal reveal-1">
              <p className="eyebrow">FAQ</p>
              <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>Giving questions.</h2>
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
          <h2 className="font-display italic text-paper font-light mb-4" style={{ fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 300 }}>Be a name on the path to a million.</h2>
          <p className="text-[rgba(253,250,244,0.6)] mb-8 max-w-[46ch]">Your $40 is one woman who walks into the age of AI ready, not left behind.</p>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-rose" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Donate now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
