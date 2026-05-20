import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-muted-foreground transition-colors",
                "hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-transform hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}
