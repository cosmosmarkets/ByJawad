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
    description: `Case study: ${slug}`,
  };
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={slug.replace(/-/g, " ")}
        description="Individual project case study."
      />
      <Container className="prose prose-invert max-w-none py-16">
        <p className="text-muted-foreground">
          Case study content for <strong>{slug}</strong> goes here.
        </p>
      </Container>
    </>
  );
}
