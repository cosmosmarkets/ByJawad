import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on design, development, and creative process.",
};

const posts = [
  { slug: "welcome", title: "Welcome to the journal", date: "2026-05-20" },
];

export default function JournalPage() {
  return (
    <>
      <PageHeader
        title="Journal"
        description="Writing on design systems, product craft, and building in public."
      />
      <Container className="py-16">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}`}
                className="font-heading text-xl font-medium transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {post.title}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">{post.date}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
