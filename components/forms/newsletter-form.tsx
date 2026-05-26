"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import {
  submitNewsletter,
  type NewsletterActionState,
} from "@/app/actions/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: NewsletterActionState = {
  success: false,
  message: "",
};

interface NewsletterFormProps {
  source?: "footer" | "journal";
  className?: string;
}

function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="secondary" disabled={pending}>
      {pending ? "..." : "Subscribe"}
    </Button>
  );
}

export function NewsletterForm({ source = "footer", className }: NewsletterFormProps) {
  const [state, formAction] = useFormState(submitNewsletter, initialState);

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message);
    } else if (!state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className={className}>
      <input type="hidden" name="source" value={source} />
      <Label htmlFor={`newsletter-email-${source}`} className="sr-only">
        Email for updates
      </Label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          id={`newsletter-email-${source}`}
          name="email"
          type="email"
          placeholder="Email for updates"
          required
          className="flex-1"
        />
        <SubscribeButton />
      </div>
      {state.errors?.email ? (
        <p className="mt-2 text-sm text-destructive">{state.errors.email[0]}</p>
      ) : null}
    </form>
  );
}
