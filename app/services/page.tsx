import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Services",
  description: "Design and development services offered.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="How I help teams ship polished digital products."
      />
      <Container className="py-16">
        <p className="text-muted-foreground">Services content coming soon.</p>
      </Container>
    </>
  );
}
