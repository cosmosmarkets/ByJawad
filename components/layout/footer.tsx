import Link from "next/link";
import { Container } from "@/components/layout/container";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="flex flex-col gap-10">
        <div className="max-w-md space-y-3">
          <p className="font-medium text-foreground">Get the recipe</p>
          <p className="text-sm text-muted-foreground">
            Occasional updates on design, tools, and new case studies.
          </p>
          <NewsletterForm source="footer" />
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="/work"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Work
          </Link>
          <Link
            href="/journal"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact
          </Link>
        </div>
        </div>
      </Container>
    </footer>
  );
}
