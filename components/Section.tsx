import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        {(eyebrow || title) && (
          <header className="mb-10 md:mb-14">
            {eyebrow && (
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-indigo-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
