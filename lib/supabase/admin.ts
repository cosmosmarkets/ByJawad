import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client (service role). Bypasses RLS for trusted writes.
 * Use in Server Actions and API routes only — never import from client components.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error("Supabase admin env missing: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function isSupabaseAdminConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SECRET_KEY
  );
}
