import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { OneMillionWomenLogo } from "./VectorIcons";
import { Menu, X } from "lucide-react";
import { useLang } from "../i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setDrawerOpen(false); }, [location]);

  const navLinks = [
    { labelKey: "nav.mission",     path: "/mission" },
    { labelKey: "nav.pathway",     path: "/pathway" },
    { labelKey: "nav.getInvolved", path: "/#involve" },
    { labelKey: "nav.partner",     path: "/partner" },
    { labelKey: "nav.impact",      path: "/#impact" },
  ];

  const LangToggle = ({ className }: { className?: string }) => (
    <div className={clsx("lang-toggle", className)}>
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title="English"
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true" />
      <button
        className={lang === "hi" ? "active" : ""}
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        title="हिंदी"
      >
        हि
      </button>
    </div>
  );

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-[100] h-[60px] transition-all duration-300 border-b",
          scrolled
            ? "bg-[rgba(245,240,232,0.92)] backdrop-blur-md border-line"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container-wide h-full flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 group">
            <span className="font-body text-[11px] tracking-[0.22em] uppercase text-ink">
              UMO<span className="text-terracotta">.</span>DESIGN
            </span>
            <span className="hidden md:block h-5 w-px bg-line" aria-hidden="true" />
            <OneMillionWomenLogo className="h-5 md:h-6 w-auto" />
          </Link>

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <li key={link.labelKey}>
                    <Link
                      to={link.path}
                      className={clsx(
                        "nav-link relative pb-2 text-[9.5px] font-normal tracking-[0.15em] uppercase",
                        active ? "text-terracotta" : "text-ink-muted hover:text-ink"
                      )}
                    >
                      {t(link.labelKey)}
                      {active && <span className="absolute left-0 bottom-0 h-px w-6 bg-terracotta" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <LangToggle className="hidden lg:inline-flex" />
            <Link to="/#involve" className="hidden lg:inline-flex btn btn-ghost">
              {t("nav.startLearning")}
            </Link>
            <Link to="/donate" className="btn btn-primary">
              {t("nav.donate")}
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-line text-ink"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-ink/40 z-[150] transition-opacity duration-300",
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setDrawerOpen(false)}
      />
      {/* Mobile drawer */}
      <aside
        className={clsx(
          "fixed inset-y-0 right-0 w-[min(86vw,360px)] bg-paper z-[160] border-l border-line transform transition-transform duration-300 ease-[var(--ease-out-circ)] flex flex-col p-6 gap-1 overflow-y-auto",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="font-display italic text-2xl text-ink">1MW</span>
          <button onClick={() => setDrawerOpen(false)} className="text-ink" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.labelKey}
            to={link.path}
            className="py-3 border-b border-line text-ink text-[0.95rem] nav-link hover:text-terracotta"
          >
            {t(link.labelKey)}
          </Link>
        ))}

        <LangToggle className="mt-5" />

        <Link to="/#involve" className="btn btn-ghost mt-5 justify-center">
          {t("nav.startLearning")}
        </Link>
        <Link to="/donate" className="btn btn-primary mt-2 justify-center">
          {t("nav.donate")}
        </Link>
      </aside>
    </>
  );
}
