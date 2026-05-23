export const siteConfig = {
  name: "Jawad Jalal",
  shortName: "Jawad",
  title: "Jawad Jalal — Landing Page & Portfolio Website Designer",
  description:
    "I design and build high-converting landing pages and portfolio websites for creatives, SaaS founders, and brands. Based in London. Book a call.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  ogImageWidth: 1672,
  ogImageHeight: 941,
  links: {
    github: "https://github.com/cosmosmarkets",
    linkedin: "https://linkedin.com",
    email: "hello@example.com",
  },
} as const;
