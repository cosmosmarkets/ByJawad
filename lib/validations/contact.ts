import { z } from "zod";

import {
  BUDGET_RANGE_LABELS,
  PROJECT_TYPE_LABELS,
  TIMELINE_LABELS,
} from "@/types/database";

const projectTypeEnum = z.enum([
  "portfolio_website",
  "landing_page",
  "redesign",
  "other",
]);

const budgetRangeEnum = z.enum([
  "under_2k",
  "2k_5k",
  "5k_10k",
  "10k_plus",
  "not_sure",
]);

const timelineEnum = z.enum(["asap", "1_2_weeks", "1_month", "flexible"]);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  project_type: projectTypeEnum,
  budget_range: budgetRangeEnum,
  timeline: timelineEnum,
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function formatInquiryEmailBody(data: ContactFormValues): string {
  return [
    `From: ${data.name} <${data.email}>`,
    `Project type: ${PROJECT_TYPE_LABELS[data.project_type]}`,
    `Budget: ${BUDGET_RANGE_LABELS[data.budget_range]}`,
    `Timeline: ${TIMELINE_LABELS[data.timeline]}`,
    "",
    data.message,
  ].join("\n");
}

export function formatInquiryEmailSubject(data: ContactFormValues): string {
  return `[Portfolio] Inquiry from ${data.name}`;
}
