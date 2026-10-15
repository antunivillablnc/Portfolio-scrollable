import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies">
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
              {category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-700/60 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
