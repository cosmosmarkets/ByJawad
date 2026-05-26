-- Studio Kitchen v1: conversion backend (inquiries + newsletter)
-- Apply via Supabase SQL Editor or: supabase db push (if CLI linked)

-- ---------------------------------------------------------------------------
-- Enums (match docs/ia-sitemap.md contact form selects)
-- ---------------------------------------------------------------------------

CREATE TYPE public.project_type AS ENUM (
  'portfolio_website',
  'landing_page',
  'redesign',
  'other'
);

CREATE TYPE public.budget_range AS ENUM (
  'under_2k',
  '2k_5k',
  '5k_10k',
  '10k_plus',
  'not_sure'
);

CREATE TYPE public.timeline AS ENUM (
  'asap',
  '1_2_weeks',
  '1_month',
  'flexible'
);

-- ---------------------------------------------------------------------------
-- inquiries
-- ---------------------------------------------------------------------------

CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type public.project_type NOT NULL,
  budget_range public.budget_range NOT NULL,
  timeline public.timeline NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  source text NOT NULL DEFAULT 'contact_form',
  ip_hash text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT inquiries_message_min_length CHECK (char_length(message) >= 10),
  CONSTRAINT inquiries_email_format CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  CONSTRAINT inquiries_status_allowed CHECK (status IN ('new', 'read', 'archived'))
);

CREATE INDEX inquiries_created_at_idx ON public.inquiries (created_at DESC);
CREATE INDEX inquiries_status_idx ON public.inquiries (status);
CREATE INDEX inquiries_email_idx ON public.inquiries (email);

COMMENT ON TABLE public.inquiries IS 'Contact form submissions; server-only writes via service role';

-- ---------------------------------------------------------------------------
-- newsletter_subscribers
-- ---------------------------------------------------------------------------

CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source text NOT NULL DEFAULT 'footer',
  subscribed_at timestamptz NOT NULL DEFAULT now(),
  unsubscribed_at timestamptz,
  CONSTRAINT newsletter_email_format CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  CONSTRAINT newsletter_source_allowed CHECK (source IN ('footer', 'journal'))
);

CREATE INDEX newsletter_subscribers_email_idx ON public.newsletter_subscribers (email);

COMMENT ON TABLE public.newsletter_subscribers IS 'Newsletter signups; server-only writes via service role';

-- ---------------------------------------------------------------------------
-- RLS: enabled, no public policies (service role bypasses for server actions)
-- ---------------------------------------------------------------------------

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
