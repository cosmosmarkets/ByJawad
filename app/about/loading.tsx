import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Container } from "@/components/layout/container";

export default function AboutLoading() {
  return (
    <Container className="py-24">
      <LoadingSkeleton className="h-12 w-40" />
      <LoadingSkeleton className="mt-6 h-4 w-full max-w-lg" />
    </Container>
  );
}
