import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-14">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-body text-[11px] tracking-[0.22em] uppercase text-paper">
                UMO<span className="text-terracotta">.</span>DESIGN
              </span>
            </Link>
            <p className="max-w-[34ch] mt-4 text-[0.92rem] text-paper/60 leading-relaxed">
              One Million Women in Design &amp; AI &mdash; an initiative of the UMO
              Design Foundation. Good design, for a better living.
            </p>
            <div className="label text-paper/35 flex gap-4 mt-6">
              <span title="Registered under Indian Company Act CSR provisions">CSR-1</span>
              <span title="80G Income Tax exemption for Indian donors">80G</span>
              <span title="12A Income Tax registration">12A</span>
            </div>
          </div>

          <div>
            <h4 className="text-paper/40 mb-4">Programs</h4>
            <ul className="flex flex-col gap-3 text-[0.92rem]">
              <li><Link to="/pathway" className="footer-link">Design &amp; AI Literacy</Link></li>
              <li><Link to="/pathway" className="footer-link">Skills &amp; Scholarships</Link></li>
              <li><Link to="/pathway" className="footer-link">Mentorship</Link></li>
              <li><Link to="/pathway" className="footer-link">Careers &amp; Fellowships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper/40 mb-4">Get involved</h4>
            <ul className="flex flex-col gap-3 text-[0.92rem]">
              <li><Link to="/#involve" className="footer-link">Learn</Link></li>
              <li><Link to="/#involve" className="footer-link">Mentor</Link></li>
              <li><Link to="/#involve" className="footer-link">Volunteer</Link></li>
              <li><Link to="/#involve" className="footer-link">Start a chapter</Link></li>
              <li><Link to="/donate" className="footer-link">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper/40 mb-4">Organisation</h4>
            <ul className="flex flex-col gap-3 text-[0.92rem]">
              <li><Link to="/mission" className="footer-link">Mission</Link></li>
              <li><Link to="/mission#leadership" className="footer-link">Leadership &amp; Board</Link></li>
              <li><Link to="/partner" className="footer-link">Partner</Link></li>
              <li><a href="https://www.umo.design/" target="_blank" rel="noreferrer" className="footer-link">UMO Design</a></li>
              <li><a href="mailto:team@umo.design" className="footer-link">team@umo.design</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(253,250,244,0.08)] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="text-[0.78rem] text-paper/35">&copy; {new Date().getFullYear()} UMO Design Foundation. An initiative based in India.</p>
          <div className="label text-paper/35 flex gap-4">
            <span title="Registered under Indian Company Act CSR provisions">CSR-1</span>
            <span title="80G Income Tax exemption for Indian donors">80G</span>
            <span title="12A Income Tax registration">12A</span>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="border-t border-[rgba(253,250,244,0.06)] pt-5 flex items-center overflow-hidden whitespace-nowrap relative">
          <div className="flex animate-marquee shrink-0 min-w-full">
            <span className="marquee-text on-dark px-4">
              Empowering One Million Women<span className="marquee-sep">&middot;</span>Design Literacy<span className="marquee-sep">&middot;</span>AI Intelligence<span className="marquee-sep">&middot;</span>Social Equity<span className="marquee-sep">&middot;</span>2030 Vision<span className="marquee-sep">&middot;</span>Indian Society Registration<span className="marquee-sep">&middot;</span>World Changing Ideas<span className="marquee-sep">&middot;</span>Join the Mission<span className="marquee-sep">&middot;</span>
            </span>
            <span className="marquee-text on-dark px-4">
              Empowering One Million Women<span className="marquee-sep">&middot;</span>Design Literacy<span className="marquee-sep">&middot;</span>AI Intelligence<span className="marquee-sep">&middot;</span>Social Equity<span className="marquee-sep">&middot;</span>2030 Vision<span className="marquee-sep">&middot;</span>Indian Society Registration<span className="marquee-sep">&middot;</span>World Changing Ideas<span className="marquee-sep">&middot;</span>Join the Mission<span className="marquee-sep">&middot;</span>
            </span>
          </div>
          <div className="flex animate-marquee shrink-0 min-w-full" aria-hidden="true">
            <span className="marquee-text on-dark px-4">
              Empowering One Million Women<span className="marquee-sep">&middot;</span>Design Literacy<span className="marquee-sep">&middot;</span>AI Intelligence<span className="marquee-sep">&middot;</span>Social Equity<span className="marquee-sep">&middot;</span>2030 Vision<span className="marquee-sep">&middot;</span>Indian Society Registration<span className="marquee-sep">&middot;</span>World Changing Ideas<span className="marquee-sep">&middot;</span>Join the Mission<span className="marquee-sep">&middot;</span>
            </span>
            <span className="marquee-text on-dark px-4">
              Empowering One Million Women<span className="marquee-sep">&middot;</span>Design Literacy<span className="marquee-sep">&middot;</span>AI Intelligence<span className="marquee-sep">&middot;</span>Social Equity<span className="marquee-sep">&middot;</span>2030 Vision<span className="marquee-sep">&middot;</span>Indian Society Registration<span className="marquee-sep">&middot;</span>World Changing Ideas<span className="marquee-sep">&middot;</span>Join the Mission<span className="marquee-sep">&middot;</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}