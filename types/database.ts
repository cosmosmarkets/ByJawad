/** Postgres enums — keep in sync with supabase/migrations */

export type ProjectType =
  | "portfolio_website"
  | "landing_page"
  | "redesign"
  | "other";

export type BudgetRange =
  | "under_2k"
  | "2k_5k"
  | "5k_10k"
  | "10k_plus"
  | "not_sure";

export type Timeline = "asap" | "1_2_weeks" | "1_month" | "flexible";

export type InquiryStatus = "new" | "read" | "archived";

export type InquirySource = "contact_form" | "api";

export type NewsletterSource = "footer" | "journal";

export interface InquiryInsert {
  name: string;
  email: string;
  project_type: ProjectType;
  budget_range: BudgetRange;
  timeline: Timeline;
  message: string;
  status?: InquiryStatus;
  source?: InquirySource;
  ip_hash?: string | null;
}

export interface NewsletterInsert {
  email: string;
  source?: NewsletterSource;
}

/** Human-readable labels for emails and admin */
export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  portfolio_website: "Portfolio website",
  landing_page: "Landing page",
  redesign: "Redesign",
  other: "Other",
};

export const BUDGET_RANGE_LABELS: Record<BudgetRange, string> = {
  under_2k: "Under £2k",
  "2k_5k": "£2k–£5k",
  "5k_10k": "£5k–£10k",
  "10k_plus": "£10k+",
  not_sure: "Not sure",
};

export const TIMELINE_LABELS: Record<Timeline, string> = {
  asap: "ASAP",
  "1_2_weeks": "1–2 weeks",
  "1_month": "1 month",
  flexible: "Flexible",
};
