import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Container } from "@/components/layout/container";

export default function WorkLoading() {
  return (
    <Container className="py-24 space-y-6">
      <LoadingSkeleton className="h-12 w-48" />
      <div className="grid gap-6 md:grid-cols-2">
        <LoadingSkeleton className="h-48" />
        <LoadingSkeleton className="h-48" />
      </div>
    </Container>
  );
}
