export const siteConfig = {
  name: "Jawad",
  title: "Jawad — Portfolio",
  description:
    "Portfolio of Jawad — product design, brand systems, and digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/images/og-default.jpg",
  links: {
    github: "https://github.com/cosmosmarkets",
    linkedin: "https://linkedin.com",
    email: "hello@example.com",
  },
} as const;
