import React from "react";
import { Link } from "react-router-dom";
import { KolamOrnament } from "../components/VectorIcons";
import { MissionCommunitySvg } from "../components/IllustrationSVGs";
import { useLang } from "../i18n";

const KolamDivider = () => (
  <div className="kolam-divider py-10">
    <KolamOrnament className="w-12 h-12 text-terracotta opacity-30" />
  </div>
);

export default function Mission() {
  const { t, lang } = useLang();
  const hi = lang === "hi";

  return (
    <div className="w-full">

      {/* Interior Hero — fills 56vh min */}
      <section className="page-hero">
        <div className="container-wide w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
          <div>
            <p className="label text-[rgba(253,250,244,0.38)] mb-4">
              <Link to="/" className="hover:text-paper transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>
              {t("mission.breadcrumb")}
            </p>
            <h1 className={`font-display italic text-paper font-light mb-5 ${hi ? "hindi-text" : ""}`}>
              {t("mission.h1")}
            </h1>
            <p className={`text-[rgba(253,250,244,0.65)] text-[1.05rem] leading-relaxed max-w-[46ch] ${hi ? "hindi-text" : ""}`}>
              {t("mission.hero.body")}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/donate" className="btn btn-rose">{t("mission.cta1")}</Link>
              <Link to="/partner" className="btn btn-ghost-light">{t("mission.cta2")}</Link>
            </div>
          </div>
          {/* Illustration — vertically centred */}
          <div className="flex items-center justify-center">
            <div className="border border-[rgba(253,250,244,0.08)] bg-[rgba(253,250,244,0.04)] p-8 illustration-float w-full">
              <MissionCommunitySvg />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-ivory border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div className="max-w-[68ch]">
            <p className="eyebrow reveal reveal-1">The problem</p>
            <h2 className="font-display italic text-ink reveal reveal-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              The gap is about to get wider.
            </h2>
            <p className="text-ink text-[1.18rem] leading-relaxed mt-5 mb-4 reveal reveal-3">
              Every creative and knowledge job is being rewritten by AI. The people fluent in it will lead the next decade of design. Today, women are under-represented in both design and AI — and without action, that gap compounds in the AI era.
            </p>
            <p className="text-ink-muted text-[1.02rem] mb-4 reveal reveal-4">
              1MW closes it at the root: with literacy that's free and reaches everyone, skills that lead to real work, mentors who make the path visible, and careers that put women in the rooms where products — and the AI inside them — get designed.
            </p>
            <p className="text-ink-muted text-[1.02rem] reveal reveal-4">
              We are an initiative of the <a href="https://www.umo.design/" target="_blank" rel="noreferrer" className="text-link">UMO Design Foundation</a>, building on 22 years of design education and a community that already spans India and beyond.
            </p>
          </div>
          {/* Stat card — vertically aligned with text start */}
          <div className="border border-line bg-stone texture-khadi p-8 self-start reveal reveal-2">
            <div className="font-display italic text-terracotta" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>22</div>
            <p className="label text-ink-muted mt-1 mb-3">Years of track record</p>
            <p className="text-ink-muted text-[0.92rem] leading-relaxed">UMO Design Foundation's proven record across India and globally.</p>
          </div>
        </div>
      </section>

      <KolamDivider />

      {/* Theory of change */}
      <section className="bg-paper border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">Theory of change</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>How the change happens.</h2>
            <p className="text-ink-muted text-[1.05rem] mt-4">A simple chain from what we put in to the impact we're accountable for.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-line">
            {[
              { label: "Inputs",    body: "Curriculum, mentors, chapters, a digital platform, partners and funding." },
              { label: "Activities",body: "The four-step Pathway: literacy, skills, mentorship, careers." },
              { label: "Outputs",   body: "Women reached, skilled, mentored and placed — counted and verified." },
              { label: "Outcomes",  body: "Women entering and advancing in design and AI careers; real economic mobility." },
              { label: "Impact",    body: "A more inclusive design-and-AI economy. A million women by 2030." },
            ].map((item, i) => (
              <div key={item.label} className={`bg-paper p-6 border-line ${i < 4 ? "border-r border-line" : ""} reveal reveal-${Math.min(i+1,4) as 1|2|3|4}`}>
                <p className="label text-terracotta mb-3">{item.label}</p>
                <p className="text-ink-muted text-[0.9rem] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6 reveal reveal-3">
            {["SDG 4 · Quality Education","SDG 5 · Gender Equality","SDG 8 · Decent Work","SDG 9 · Innovation"].map(s => (
              <span key={s} className="border border-line text-ink-muted px-3 py-1.5 text-[0.78rem] font-body tracking-[0.06em]">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* The 2030 Plan */}
      <section className="bg-stone texture-khadi border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">The 2030 plan</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>The honest path to a million.</h2>
            <p className="text-ink-muted text-[1.05rem] mt-4">We don't pretend in-person classes scale to a million. They don't. The reach comes from a free digital course; the depth comes from cohorts, mentors and careers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-line">
            {[
              { n: "~3,00,000", label: "Lives touched", body: "over 22 years of UMO design education — the track record the million is built on." },
              { n: "85–90%",    label: "Digital reach",  body: "of the million reached through free, self-paced digital literacy — the only mechanism proven to scale." },
              { n: "~$14M",     label: "Blended cost",   body: "over five years to reach a million — not the $45M a naive per-head figure implies." },
            ].map((stat, i) => (
              <div key={stat.n} className={`bg-paper p-8 border-line ${i < 2 ? "border-r border-line" : ""} reveal reveal-${(i+1) as 1|2|3}`}>
                <div className="font-display italic text-terracotta" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>{stat.n}</div>
                <p className="label text-ink-muted mt-2 mb-3">{stat.label}</p>
                <p className="text-ink-muted text-[0.9rem] leading-relaxed">{stat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-ivory border-b border-line" id="leadership" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">Leadership &amp; board</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>The people behind the mission.</h2>
            <p className="text-ink-muted text-[1.05rem] mt-4">A credible board opens doors — to funders, press and partners. We're assembling a founding board and advisory council.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-line">
            <div className="bg-paper p-8 border-r border-line reveal reveal-1">
              <div className="w-16 h-16 rounded-full bg-stone flex items-center justify-center text-ink mb-4 font-display italic text-[1.4rem]">KB</div>
              <p className="font-body text-ink text-[1rem] mb-0.5">Kaladhar Bapu</p>
              <p className="label text-terracotta mb-3">Founder · UMO Design</p>
              <p className="text-ink-muted text-[0.88rem] leading-relaxed">Founder of UMO Design Foundation and the UXINDIA conference; two decades advancing design in India and globally.</p>
            </div>
            {[
              { title: "Board Chair",            desc: "A respected leader to chair governance and unlock high-level networks." },
              { title: "AI / Technology Leader", desc: "A senior voice from AI or big tech to guide the AI-literacy mission and open doors." },
              { title: "CSR / Philanthropy Leader",desc: "Someone who can champion 1MW inside corporate CSR and foundation circles." },
            ].map((seat, i) => (
              <div key={seat.title} className={`bg-paper p-8 border-line ${i < 2 ? "border-r border-line" : ""} reveal reveal-${(i+2) as 2|3|4}`} style={{ border: "1px dashed var(--color-line)" }}>
                <div className="w-16 h-16 rounded-full border border-dashed border-line flex items-center justify-center text-ink-muted mb-4 text-[0.7rem] tracking-widest uppercase">Open</div>
                <p className="font-body text-ink text-[1rem] mb-0.5">{seat.title}</p>
                <p className="label text-ink-muted mb-3">Seat open</p>
                <p className="text-ink-muted text-[0.88rem] leading-relaxed">{seat.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[0.88rem] text-ink-muted mt-5 reveal reveal-4">
            Are you — or do you know — the right person?{" "}
            <a href="mailto:team@umo.design" className="text-link">team@umo.design</a>
          </p>
        </div>
      </section>

      {/* Team structure */}
      <section className="bg-paper border-b border-line" style={{ paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
        <div className="container-wide">
          <div className="max-w-[58ch] mb-12 reveal reveal-1">
            <p className="eyebrow">Team structure</p>
            <h2 className="font-display italic text-ink" style={{ fontSize: "clamp(2rem,4vw,3.3rem)" }}>How we're built to deliver.</h2>
            <p className="text-ink-muted text-[1.05rem] mt-4">A lean founding team of ~20, organised around the work.</p>
          </div>
          <div className="bg-ink text-paper p-6 text-center border border-line mb-0 reveal reveal-2">
            <p className="font-body text-paper text-[0.95rem] tracking-[0.12em] uppercase">Executive Director</p>
            <p className="text-[rgba(253,250,244,0.55)] text-[0.85rem] mt-1">Strategy · fundraising · partnerships · board</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-line border-t-0">
            {[
              { name: "Programs & Curriculum",     count: "~5 people", items: ["Design & AI literacy","Skilling tracks","Content partnerships","Scholarships"] },
              { name: "Community & Chapters",      count: "~4 people", items: ["Campus & city chapters","Mentorship network","Events: WSummit","Volunteers"] },
              { name: "Partnerships & Funding",    count: "~3 people", items: ["Corporate & CSR","Foundations & grants","Individual giving","Careers / placements"] },
              { name: "Platform & Tech",           count: "~3 people", items: ["Learning platform","The public counter","Localisation / languages","Data & security"] },
              { name: "Marketing & Comms",         count: "~2 people", items: ["Brand & website","Press & storytelling","Social & campaigns"] },
              { name: "Ops, Finance & Compliance", count: "~3 people", items: ["Finance & CSR compliance","India entity / FCRA","Impact measurement (M&E)","HR & admin"] },
            ].map((dept, i) => (
              <div key={dept.name} className={`bg-paper p-6 border-line border-t ${i % 3 < 2 ? "border-r border-line" : ""} reveal reveal-${Math.min((i%4)+1,4) as 1|2|3|4}`}>
                <p className="font-body text-ink text-[0.9rem] tracking-[0.1em] uppercase mb-1">{dept.name}</p>
                <p className="label text-ink-muted mb-4">{dept.count}</p>
                <ul className="flex flex-col gap-1">
                  {dept.items.map(item => (
                    <li key={item} className="text-ink-muted text-[0.88rem] pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-terracotta">{item}</li>
                  ))}
                </ul>
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
          <h2 className="font-display italic text-paper font-light mb-4" style={{ fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 300 }}>
            Help put a million women in the room.
          </h2>
          <p className="text-[rgba(253,250,244,0.6)] mb-8 max-w-[48ch]">
            Back the mission as a partner, a donor, or a board member who can open the doors a movement needs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/partner" className="btn btn-rose">Partner with us</Link>
            <Link to="/donate" className="btn btn-ghost-light">Donate</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
