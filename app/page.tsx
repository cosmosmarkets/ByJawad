import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/animations/motion-wrapper";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20">
        <Container>
          <MotionWrapper delay={0.1}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Selected work
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Case studies and projects will live on the Work page. This scaffold
              is ready for your full design system.
            </p>
          </MotionWrapper>
        </Container>
      </section>
    </>
  );
}
