/* eslint-disable jsx-a11y/control-has-associated-label */
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "#work", label: "Build log", id: "work" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#proof", label: "Proof", id: "proof" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("proof");
  const reduceMotion = useReducedMotion();

  const orderedIds = useMemo(() => links.map((x) => x.id), []);

  useEffect(() => {
    function onScroll() {
      let current = orderedIds[0];
      for (const id of orderedIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 160) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [orderedIds]);

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md border-b border-forest/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-ink">
          By Jawad
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                active === link.id ? "text-forest" : "text-ink/75 hover:text-forest"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#intake-form"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-forest text-cream text-sm font-semibold rounded-sm"
          >
            Start project
          </a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-forest/20 rounded-sm"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">≡</span>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            className="md:hidden fixed inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={reduceMotion ? false : { x: 40, opacity: 0 }}
              animate={reduceMotion ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
              exit={reduceMotion ? { x: 20, opacity: 0 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto w-[18rem] h-full bg-cream border-l border-forest/10 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg text-ink hover:text-forest"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#intake-form"
                  className="inline-flex items-center justify-center px-4 py-3 bg-forest text-cream text-sm font-semibold rounded-sm mt-2"
                  onClick={() => setOpen(false)}
                >
                  Start project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
