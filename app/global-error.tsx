"use client";

import { useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Error
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className={cn(buttonVariants(), "mt-8")}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
