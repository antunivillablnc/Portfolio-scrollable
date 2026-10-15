import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-indigo-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-indigo-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 transition hover:text-indigo-300"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
