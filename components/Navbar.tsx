
"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2.5 text-slate-100 transition hover:text-indigo-300"
        >
          <Image
            src="/antlogo.png"
            alt="ANT Studio logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-md object-contain transition group-hover:scale-105"
          />
          {/* <span className="text-base font-semibold tracking-tight">
            ANT<span className="text-indigo-400">.</span>
            <span className="ml-1 text-sm font-medium text-indigo-300">
              studio
            </span>
          </span> */}
          <span className="text-base font-semibold tracking-tight">
             AntStudio
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-200 transition hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 md:hidden"
        >
          {menuOpen ? (
            /* Close icon */
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>

        {/* Mobile dropdown menu */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full border-b border-slate-800 bg-slate-950/95 px-4 shadow-xl shadow-black/20 backdrop-blur transition-all duration-200 md:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="mx-auto max-w-5xl py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? 0 : -1}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
