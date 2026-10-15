import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-slate-100 transition hover:text-indigo-300"
        >
          <Image
            src="/antlogo.png"
            alt="antdev logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-md object-contain transition group-hover:scale-105"
          />
          <span className="text-base font-semibold tracking-tight">
            antdev
          </span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2 py-1.5 text-sm text-slate-300 transition hover:text-indigo-300 sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
