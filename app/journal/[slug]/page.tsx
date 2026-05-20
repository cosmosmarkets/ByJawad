import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/sections/page-header";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  return {
    title: slug.replace(/-/g, " "),
    description: `Journal post: ${slug}`,
  };
}

export default function JournalPostPage({ params }: Props) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={slug.replace(/-/g, " ")}
        description="Journal post"
      />
      <Container className="py-16">
        <article className="max-w-prose leading-relaxed text-muted-foreground">
          <p>
            MDX content from <code>content/</code> will render here via{" "}
            <code>next-mdx-remote</code>.
          </p>
        </article>
      </Container>
    </>
  );
}
