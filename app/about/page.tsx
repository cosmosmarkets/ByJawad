import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About",
  description: "Background, approach, and what I work on.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        description="Designer focused on systems, craft, and conversion-minded experiences."
      />
      <Container className="py-16">
        <p className="leading-relaxed text-muted-foreground">
          About page content coming soon.
        </p>
      </Container>
    </>
  );
}
