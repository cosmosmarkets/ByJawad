import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { Container } from "@/components/layout/container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border/60 py-16 md:py-20">
      <Container>
        <MotionWrapper>
          <h1 className="font-heading text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </MotionWrapper>
      </Container>
    </section>
  );
}
