import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Container } from "@/components/layout/container";

export default function ContactLoading() {
  return (
    <Container className="max-w-lg py-24 space-y-4">
      <LoadingSkeleton className="h-12 w-48" />
      <LoadingSkeleton className="h-10 w-full" />
      <LoadingSkeleton className="h-10 w-full" />
      <LoadingSkeleton className="h-32 w-full" />
    </Container>
  );
}
