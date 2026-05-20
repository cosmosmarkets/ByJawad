import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Container } from "@/components/layout/container";

export default function JournalLoading() {
  return (
    <Container className="py-24 space-y-4">
      <LoadingSkeleton className="h-12 w-48" />
      <LoadingSkeleton className="h-16 w-full" />
      <LoadingSkeleton className="h-16 w-full" />
    </Container>
  );
}
