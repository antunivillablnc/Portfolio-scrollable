import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden pb-20 pt-24 md:pb-28 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            {profile.available && (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 motion-safe:animate-[heroFadeUp_0.65s_cubic-bezier(0.22,1,0.36,1)_both]"
                style={{ animationDelay: "40ms" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for new work
              </span>
            )}

            <h1
              className="mt-6 text-4xl font-bold tracking-tight text-slate-100 motion-safe:animate-[heroFadeUp_0.65s_cubic-bezier(0.22,1,0.36,1)_both] md:text-6xl"
              style={{ animationDelay: "90ms" }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
              .
            </h1>

            <p
              className="mt-4 text-xl font-medium text-slate-300 motion-safe:animate-[heroFadeUp_0.65s_cubic-bezier(0.22,1,0.36,1)_both] md:text-2xl"
              style={{ animationDelay: "140ms" }}
            >
              {profile.role}
            </p>

            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 motion-safe:animate-[heroFadeUp_0.65s_cubic-bezier(0.22,1,0.36,1)_both] md:text-lg"
              style={{ animationDelay: "190ms" }}
            >
              {profile.tagline}
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 motion-safe:animate-[heroFadeUp_0.65s_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition duration-200 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/35 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition duration-200 hover:border-indigo-400/70 hover:bg-indigo-500/5 hover:text-indigo-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div
            className="flex justify-center motion-safe:animate-[heroFadeUp_0.75s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none md:justify-end"
            style={{ animationDelay: "120ms" }}
          >
            <div className="group relative flex justify-center md:justify-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-indigo-500/25 via-fuchsia-500/20 to-transparent motion-safe:animate-[heroGlowPulse_5s_ease-in-out_infinite] blur-2xl transition duration-500 group-hover:opacity-100 group-hover:blur-3xl motion-reduce:animate-none"
              />
              <div className="relative motion-safe:animate-[heroFloat_5s_ease-in-out_infinite] motion-reduce:animate-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-indigo-400/80 via-fuchsia-500/70 to-indigo-500/80 opacity-80 blur-[2px] transition duration-500 group-hover:opacity-100 group-hover:blur-[3px]"
                />
                <div className="relative overflow-hidden rounded-2xl bg-slate-950/80 p-px shadow-xl shadow-slate-950/50 ring-1 ring-white/10 transition duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 group-hover:ring-indigo-400/30">
                  <Image
                    src={profile.image.src}
                    alt={profile.image.alt}
                    width={400}
                    height={480}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="h-auto w-full max-w-[280px] rounded-[calc(1rem-1px)] object-cover object-top transition duration-500 ease-out group-hover:scale-[1.04] md:max-w-[320px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
