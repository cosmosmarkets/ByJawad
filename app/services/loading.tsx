import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Container } from "@/components/layout/container";

export default function ServicesLoading() {
  return (
    <Container className="py-24">
      <LoadingSkeleton className="h-12 w-56" />
      <LoadingSkeleton className="mt-6 h-4 w-full max-w-md" />
    </Container>
  );
}
