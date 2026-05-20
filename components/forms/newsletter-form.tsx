"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="email"
        placeholder="Email for updates"
        aria-label="Email address"
        className="flex-1"
      />
      <Button type="submit" variant="secondary">
        Subscribe
      </Button>
    </form>
  );
}
