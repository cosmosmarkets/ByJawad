import Link from "next/link";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.45 0.12 250 / 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, oklch(0.55 0.08 180 / 0.2), transparent)",
        }}
      />
      <Container>
        <MotionWrapper>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Portfolio
          </p>
          <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-foreground md:text-6xl md:leading-[1.05]">
            Design systems & digital experiences by {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/work" className={cn(buttonVariants())}>
              View work
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Get in touch
            </Link>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
