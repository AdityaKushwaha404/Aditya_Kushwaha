"use client";
import React from "react";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  return (
    <>
      <nav className="hidden md:block w-full">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            {navItems.map((navItem, idx) => (
              <Link key={`link=${idx}`} href={navItem.link} className="text-sm text-neutral-300 hover:text-white">
                {navItem.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile: only show a simple hamburger button, positioned safely below status bar */}
      <div
        className="md:hidden fixed right-2 z-[5000]"
        style={{ top: "calc(env(safe-area-inset-top, 0px) + 12px)" }}
      >
        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white hover:bg-white/5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
};
