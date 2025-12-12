"use client";

import React from "react";
import { motion } from "framer-motion";

const bullets = [
  {
    title: "Scalable backend for real-world load",
    desc: "APIs and services built with caching, queues, observability, and horizontal scaling.",
    accent: "from-purple-400/80 via-purple-400/40 to-purple-400/0",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-300"
      >
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Clean architecture & testing",
    desc: "Modular boundaries, predictable layers, CI-ready tests, and clear code ownership.",
    accent: "from-blue-400/80 via-blue-400/40 to-blue-400/0",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-300"
      >
        <path
          d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12l3 3 4-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Frontend polish + backend depth",
    desc: "Aesthetics meet systems thinking - cohesive UX with robust foundations.",
    accent: "from-pink-400/80 via-pink-400/40 to-pink-400/0",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-300"
      >
        <path
          d="M4 6h10v4H4zM14 6l6 4-6 4V6z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 14h8v4H4z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Ownership, speed, iteration",
    desc: "Deliver fast, measure, iterate - accountable workflows and continuous improvement.",
    accent: "from-emerald-400/80 via-emerald-400/40 to-emerald-400/0",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-300"
      >
        <path
          d="M4 12h9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11 8l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const softSkills = [
  "Ownership",
  "Communication",
  "Problem-solving",
  "Collaboration",
  "Adaptability",
  "Time management",
  "Leadership",
];

const glowVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Clients = () => {
  return (
    <section id="why-me" className="py-20">
      <h1 className="heading">
        Why <span className="text-purple">Me?</span>
      </h1>

      <div className="mx-auto mt-12 max-w-5xl">
        {/* Glass panel with subtle grid and glow */}
        <div className="relative rounded-3xl p-6 md:p-10 bg-[rgb(14_18_49/0.22)] border border-white/15 ring-1 ring-white/20 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_48px_rgba(2,6,23,0.6)]">
          {/* faint grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* top sweep */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute left-6 right-6 -top-1 h-10 rounded-[40px] bg-gradient-to-b from-white/12 to-transparent blur-md"
          />
          {/* bottom glow */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="pointer-events-none absolute left-10 right-10 -bottom-2 h-8 rounded-[40px] bg-purple-400/10 blur-lg"
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {bullets.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0% -20% 0%" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="relative rounded-2xl p-4 md:p-6 bg-white/6 border border-white/12 ring-1 ring-white/15 backdrop-blur-xl hover:bg-white/8 hover:shadow-[0_8px_28px_rgba(2,6,23,0.45)] hover:-translate-y-0.5 transition-all"
              >
                {/* accent bar varies per card */}
                <div
                  className={`absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b ${b.accent} z-20`}
                />
                <div className="pl-3 md:pl-4">
                  <div className="flex items-center gap-2">
                    {b.icon}
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {b.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm md:text-base text-white/80">
                    {b.desc}
                  </p>
                </div>
                {/* corner highlight */}
                <div className="pointer-events-none absolute right-3 bottom-3 h-6 w-10 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-sm" />
              </motion.div>
            ))}
          </div>
          {/* Soft skills pills */}
          <div className="mt-8">
            <h3 className="text-white/90 text-sm md:text-base font-semibold">
              Soft skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/6 border border-white/12 text-white/85 backdrop-blur-xl hover:bg-white/10 hover:shadow-[0_4px_16px_rgba(124,58,237,0.25)] transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
