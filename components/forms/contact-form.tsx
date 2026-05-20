"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { submitContact, type ContactActionState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message);
    } else if (!state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" required />
        {state.errors?.name ? (
          <p className="text-sm text-destructive">{state.errors.name[0]}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        {state.errors?.email ? (
          <p className="text-sm text-destructive">{state.errors.email[0]}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject (optional)</Label>
        <Input id="subject" name="subject" placeholder="Project inquiry" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={6}
          required
        />
        {state.errors?.message ? (
          <p className="text-sm text-destructive">{state.errors.message[0]}</p>
        ) : null}
      </div>
      <SubmitButton />
    </form>
  );
}
