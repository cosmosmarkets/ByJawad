import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for projects and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Tell me about your project — I'll get back to you soon."
      />
      <Container className="max-w-lg py-16">
        <ContactForm />
      </Container>
    </>
  );
}
