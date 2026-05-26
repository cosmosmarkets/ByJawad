"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { submitContact, type ContactActionState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

const selectClassName = cn(
  "flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm",
  "outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send project brief"}
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
        <Label htmlFor="project_type">Project type</Label>
        <select
          id="project_type"
          name="project_type"
          className={selectClassName}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select project type
          </option>
          <option value="portfolio_website">Portfolio website</option>
          <option value="landing_page">Landing page</option>
          <option value="redesign">Redesign</option>
          <option value="other">Other</option>
        </select>
        {state.errors?.project_type ? (
          <p className="text-sm text-destructive">{state.errors.project_type[0]}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="budget_range">Budget range</Label>
        <select
          id="budget_range"
          name="budget_range"
          className={selectClassName}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select budget
          </option>
          <option value="under_2k">Under £2k</option>
          <option value="2k_5k">£2k–£5k</option>
          <option value="5k_10k">£5k–£10k</option>
          <option value="10k_plus">£10k+</option>
          <option value="not_sure">Not sure</option>
        </select>
        {state.errors?.budget_range ? (
          <p className="text-sm text-destructive">{state.errors.budget_range[0]}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <select
          id="timeline"
          name="timeline"
          className={selectClassName}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select timeline
          </option>
          <option value="asap">ASAP</option>
          <option value="1_2_weeks">1–2 weeks</option>
          <option value="1_month">1 month</option>
          <option value="flexible">Flexible</option>
        </select>
        {state.errors?.timeline ? (
          <p className="text-sm text-destructive">{state.errors.timeline[0]}</p>
        ) : null}
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
