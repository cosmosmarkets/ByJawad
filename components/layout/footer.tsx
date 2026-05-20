import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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
      </Container>
    </footer>
  );
}
