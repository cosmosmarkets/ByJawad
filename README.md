# By Jawad — Portfolio

Next.js 14 portfolio scaffold with App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP, Lenis, Supabase, and Resend.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion, GSAP + ScrollTrigger, Lenis
- **Backend:** Supabase, Resend (contact)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/              # Routes (work, services, about, journal, contact, api)
components/       # ui, layout, sections, animations, forms, 3d
hooks/            # Custom React hooks
lib/              # utils, supabase, validations
types/            # TypeScript interfaces
content/          # MDX blog posts
public/           # images, videos, fonts
```

## Environment variables

See [`.env.example`](.env.example) for required keys.
