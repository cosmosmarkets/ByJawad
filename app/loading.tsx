import { Container } from "@/components/layout/container";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function Loading() {
  return (
    <Container className="py-24 space-y-4">
      <LoadingSkeleton className="h-10 w-64" />
      <LoadingSkeleton className="h-4 w-full max-w-xl" />
      <LoadingSkeleton className="h-4 w-3/4 max-w-lg" />
    </Container>
  );
}
