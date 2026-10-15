export const profile = {
  name: "Anthony Villablanca",
  role: "Web Developer & UGC Video Editor",
  tagline:
    "I build engaging web experiences and edit compelling short-form videos for creators and brands.",
  email: "villablancaanthony2@gmail.com",
  socials: {
    github: "https://github.com/antunivillablnc",
    linkedin: "https://linkedin.com/in/villablancaanthony",
    twitter: "https://twitter.com/yourhandle",
  },
  resumeUrl: "#",
  location: "Earth",
  available: true,
  image: {
    src: "/formal.png",
    alt: "Portrait of Your Name",
  },
};

export const about = {
  bio: "I'm a developer who enjoys turning ideas into thoughtful, reliable software. I care about clear code, smooth user experiences, and the small details that add up to something polished. Replace this paragraph with your own story.",
  highlights: [
    "Several years building production web apps",
    "Comfortable across the stack: TypeScript, React, Node.js",
    "Focused on performance, accessibility, and DX",
    "Open to remote roles and freelance projects",
  ],
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "SPARTA",
    description:
      "Short description of what this project does, who it's for, and why it stands out.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description:
      "Another concise summary highlighting the problem, your role, and one notable technical detail.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description:
      "One or two lines on a side project, library, or experiment that you're proud of.",
    tech: ["TypeScript", "Express", "Docker"],
    github: "#",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "Vercel", "Vite", "Jest"],
};

export type NavLink = { label: string; href: string };
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
