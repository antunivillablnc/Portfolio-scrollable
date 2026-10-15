# Portfolio

A single-page personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

Dark theme, fully responsive, single-page anchored navigation. All content lives in one file so it is easy to edit.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint (Next.js config)
- Inter via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script           | Description                                |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | Start the dev server (Turbopack)           |
| `npm run build`  | Create a production build                  |
| `npm run start`  | Run the production build locally           |
| `npm run lint`   | Run ESLint                                 |

## Project Structure

```
app/
  layout.tsx       Root layout, font, metadata, dark base styles
  page.tsx         Composes all sections
  globals.css      Tailwind import + theme + smooth scroll
components/
  Section.tsx      Reusable section wrapper (id, padding, max-width)
  Navbar.tsx       Sticky top nav with anchor links
  Hero.tsx         Name, role, tagline, CTAs
  About.tsx        Bio paragraph and highlights
  Projects.tsx     Responsive grid of project cards
  Skills.tsx       Grouped technology chips
  Contact.tsx      Email + social links (no form)
  Footer.tsx       Copyright + socials
lib/
  data.ts          ALL content lives here (profile, about, projects, skills, nav links)
```

## Editing Your Content

Open [`lib/data.ts`](lib/data.ts) and update:

- `profile` - your name, role, tagline, email, social links
- `about` - bio paragraph and highlight bullets
- `projects` - add/remove items in the array (title, description, tech, github, demo)
- `skills` - update the categories and tech lists
- `navLinks` - rename or reorder nav items

The page automatically picks up changes through Next.js hot reload.

## Visual System

- Background: `slate-950`
- Text: `slate-200`
- Accent: `indigo-400` (links, CTAs, chips)
- Cards: `slate-900` with `slate-800` border, hover indigo border
- Sections: `max-w-5xl`, `py-20 md:py-28`, smooth-scroll anchors

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com). Push the repo, import it in the Vercel dashboard, and it deploys automatically. No environment variables are required for the static portfolio.

## Roadmap

- Contact form via API route (`/api/contact`) with email provider
- Project images and case study pages
- MDX blog
- Light/dark theme toggle
# Portfolio-scrollable
