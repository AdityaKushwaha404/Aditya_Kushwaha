"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/** CONFIG **/
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** HOOKS **/
function useScrollBlur() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string>(ids[0] || "#home");
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? -1 : 1
          );
        if (visible[0]) {
          const id = `#${visible[0].target.id}`;
          setActive(id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25] }
    );

    ids.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function useScrollDirection() {
  const [dir, setDir] = React.useState<"up" | "down">("up");
  React.useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 6) {
        setDir(y > lastY ? "down" : "up");
        lastY = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return dir;
}

/** NAVBAR **/
export const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScrollBlur();
  const active = useActiveSection(
    navItems.map((n) => n.href) // ["#home"...]
  );
  const scrollDir = useScrollDirection();

  // disable body scroll when mobile menu open
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  React.useEffect(() => {
    // enable smooth scrolling unless user prefers reduced motion
    if (typeof document !== "undefined") {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      document.documentElement.style.scrollBehavior = prefersReduced
        ? "auto"
        : "smooth";
    }
  }, []);

  function handleNavClick(href: string) {
    // close mobile when clicked
    setOpen(false);

    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.focus({ preventScroll: true }); // improves a11y
        // prefer native smooth scoll handled globally
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback to window location
        window.location.hash = href;
      }
    } else {
      // external link: navigate
      window.location.href = href;
    }
  }

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded px-3 py-2 bg-white/8 text-white"
      >
        Skip to content
      </a>

      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all",
          className
        )}
        aria-label="Main Navigation"
      >
        <div className="mx-auto max-w-3xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{
              opacity: 1,
              y: scrollDir === "down" ? -72 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={cn(
              "relative flex items-center gap-5 rounded-3xl px-5",
              // stronger glass
              "backdrop-blur-3xl backdrop-saturate-200",
              // layered translucent background with subtle gradient
              scrolled
                ? "bg-[rgb(14_18_49/0.28)] ring-1 ring-white/25 border border-white/15 shadow-[0_16px_64px_rgba(2,6,23,0.7)]"
                : "bg-[rgb(14_18_49/0.20)] ring-1 ring-white/25 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_40px_rgba(2,6,23,0.55)]"
            )}
          >
            {/* glass highlights and glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl">
              {/* inner highlight */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              {/* top light sweep */}
              <div className="absolute -top-0.5 left-4 right-4 h-10 rounded-[40px] bg-gradient-to-b from-white/15 to-transparent blur-md" />
              {/* bottom glow */}
              <div className="absolute -bottom-2 left-10 right-10 h-8 rounded-[40px] bg-purple-400/10 blur-lg" />
            </div>
            {/* Center: links only */}
            <div className="pointer-events-auto hidden md:flex w-full justify-center">
              <div className="flex gap-12">
                {navItems.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "group relative px-2 py-3 text-sm font-medium tracking-wide focus:outline-none",
                        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 focus-visible:rounded",
                        isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      {/* underline */}
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute left-0 right-0 bottom-0 block h-[3px] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0",
                          "transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                          isActive ? "scale-x-100" : ""
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile: show simple centered list without extra controls */}
            <div className="md:hidden w-full">
              <div className="flex items-center justify-center gap-6 py-3">
                {navItems.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "group relative text-xs font-medium px-2 py-2",
                        isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute left-0 right-0 bottom-0 block h-[3px] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0",
                          "transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                          isActive ? "scale-x-100" : ""
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Mobile menu panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="md:hidden mt-3"
              >
                <div className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl shadow-lg">
                  <nav aria-label="Mobile">
                    <ul className="flex flex-col py-2">
                      {navItems.map((item) => {
                        const isActive = active === item.href;
                        return (
                          <li key={item.href}>
                            <button
                              onClick={() => handleNavClick(item.href)}
                              className={cn(
                                "w-full text-left px-5 py-3 text-sm font-medium transition-colors",
                                isActive
                                  ? "text-white"
                                  : "text-white/85 hover:text-white",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                              )}
                              aria-current={isActive ? "page" : undefined}
                            >
                              {item.label}
                            </button>
                          </li>
                        );
                      })}
                      <li>
                        <a
                          href="/resume.pdf"
                          className="mx-4 my-3 inline-flex w-auto items-center justify-center rounded-md border border-white/12 px-4 py-2 text-sm font-semibold"
                        >
                          View resume
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
