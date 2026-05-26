import Link from "next/link";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#E63946] py-24 text-white md:py-32">
      <Container>
        <MotionWrapper>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/80">
            Portfolio &amp; landing page studio
          </p>
          <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl md:leading-[1.05]">
            The kitchen for mouth-watering portfolios and landing pages
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            I cook portfolio websites and landing pages that taste incredible
            and convert for creatives, founders, and brands.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "border-[3px] border-black bg-[#F4B942] text-black shadow-[4px_4px_0_#000] hover:bg-[#F4B942]/90"
              )}
            >
              Place your order
            </Link>
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-2 border-black bg-white text-black hover:bg-white/90"
              )}
            >
              See what&apos;s cooking
            </Link>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
