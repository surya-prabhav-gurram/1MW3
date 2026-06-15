import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Pathway from "./pages/Pathway";
import Partner from "./pages/Partner";
import Donate from "./pages/Donate";

/**
 * Single, global scroll-reveal observer. Runs once on mount and watches
 * every `.reveal` element currently in the document, re-scanning on route
 * change. Adds `.visible` once an element crosses the 10% threshold, then
 * stops observing it — CSS in index.css handles the actual transition.
 */
function useRevealObserver() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal:not(.visible)");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);
}

function RevealRoot({ children }: { children: React.ReactNode }) {
  useRevealObserver();
  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <RevealRoot>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/pathway" element={<Pathway />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </Layout>
      </RevealRoot>
    </Router>
  );
}
