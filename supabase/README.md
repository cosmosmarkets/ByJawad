# Supabase — Studio Kitchen

Project: [qmrqfyzihbpvzucodxzf](https://supabase.com/dashboard/project/qmrqfyzihbpvzucodxzf)

## Apply migrations

1. Open [SQL Editor](https://supabase.com/dashboard/project/qmrqfyzihbpvzucodxzf/sql/new)
2. Copy the contents of `migrations/20260525120000_initial_conversion_schema.sql`
3. Run the script
4. Confirm in **Table Editor**: `inquiries`, `newsletter_subscribers`

Migrations are ordered by filename. Add new files under `migrations/` for future changes.

## Environment variables

Server-only (never expose to the browser):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Project API URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public client (future auth/reads) |
| `SUPABASE_SECRET_KEY` | Service role — inserts from Server Actions |

Copy from `.env.example` into `.env.local`.

## Regenerate TypeScript types (optional)

After applying SQL:

```bash
npx supabase gen types typescript --project-id qmrqfyzihbpvzucodxzf > types/supabase-generated.ts
```

Hand-maintained types live in `types/database.ts` until you adopt generated types.

## Verification checklist

| Check | How |
|-------|-----|
| Tables exist | Table Editor → `inquiries`, `newsletter_subscribers` |
| RLS enabled | Each table → RLS on, no policies for `anon` |
| Contact submit | `npm run dev` → `/contact` → row in `inquiries` + Resend email |
| Newsletter | Footer form (when wired) → row in `newsletter_subscribers` |
| Duplicate email | Second newsletter submit → friendly “already subscribed” message |

## Schema overview

- **inquiries** — contact form (name, email, project_type, budget_range, timeline, message)
- **newsletter_subscribers** — email signups (`footer` / `journal` source)

Work and journal content stay in MDX for v1; not stored in Supabase yet.
