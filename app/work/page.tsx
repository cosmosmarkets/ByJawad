import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work"
        description="Projects, case studies, and selected collaborations."
      />
      <Container className="py-16">
        <p className="text-muted-foreground">
          Project listings will be powered by Supabase or MDX content.
        </p>
      </Container>
    </>
  );
}
