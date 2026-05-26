"use server";

import { createAdminClient, isSupabaseAdminConfigured } from "@/lib/supabase/admin";
import { newsletterFormSchema } from "@/lib/validations/newsletter";

export type NewsletterActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitNewsletter(
  _prevState: NewsletterActionState,
  formData: FormData
): Promise<NewsletterActionState> {
  const raw = {
    email: formData.get("email"),
    source: formData.get("source") ?? "footer",
  };

  const parsed = newsletterFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please enter a valid email.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (!isSupabaseAdminConfigured()) {
    return {
      success: false,
      message: "Newsletter is not configured yet. Add Supabase env vars.",
    };
  }

  const { email, source } = parsed.data;

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("newsletter_subscribers").upsert(
      { email, source, unsubscribed_at: null },
      { onConflict: "email", ignoreDuplicates: false }
    );

    if (error) {
      if (error.code === "23505") {
        return {
          success: true,
          message: "You're already subscribed — thanks for staying in the loop.",
        };
      }

      console.error("[newsletter] Supabase upsert failed:", error.message);
      return {
        success: false,
        message: "Could not subscribe right now. Please try again later.",
      };
    }

    return {
      success: true,
      message: "You're subscribed. Get the recipe in your inbox soon.",
    };
  } catch (err) {
    console.error("[newsletter] Supabase client error:", err);
    return {
      success: false,
      message: "Newsletter is not configured yet. Add Supabase env vars.",
    };
  }
}
