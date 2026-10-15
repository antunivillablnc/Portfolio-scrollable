import Section from "./Section";
import { about } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-3">
        <p className="text-base leading-relaxed text-slate-300 md:col-span-2 md:text-lg">
          {about.bio}
        </p>
        <ul className="space-y-3">
          {about.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
