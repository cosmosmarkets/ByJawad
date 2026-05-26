"use server";

import { Resend } from "resend";

import { createAdminClient, isSupabaseAdminConfigured } from "@/lib/supabase/admin";
import {
  contactFormSchema,
  formatInquiryEmailBody,
  formatInquiryEmailSubject,
} from "@/lib/validations/contact";

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    project_type: formData.get("project_type"),
    budget_range: formData.get("budget_range"),
    timeline: formData.get("timeline"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;
  let savedToDb = false;

  if (isSupabaseAdminConfigured()) {
    try {
      const supabase = createAdminClient();
      const { error: dbError } = await supabase.from("inquiries").insert({
        name: data.name,
        email: data.email,
        project_type: data.project_type,
        budget_range: data.budget_range,
        timeline: data.timeline,
        message: data.message,
        source: "contact_form",
        status: "new",
      });

      if (dbError) {
        console.error("[contact] Supabase insert failed:", dbError.message);
        return {
          success: false,
          message: "Could not save your inquiry. Please try again or email directly.",
        };
      }

      savedToDb = true;
    } catch (err) {
      console.error("[contact] Supabase client error:", err);
      return {
        success: false,
        message: "Contact storage is not configured. Add Supabase env vars.",
      };
    }
  } else {
    return {
      success: false,
      message: "Contact form is not configured yet. Add Supabase and Resend env vars.",
    };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendKey || !contactEmail) {
    if (savedToDb) {
      return {
        success: true,
        message:
          "Thanks — your brief was saved. Email notification is not configured yet.",
      };
    }
    return {
      success: false,
      message: "Contact form is not configured yet. Add RESEND_API_KEY and CONTACT_EMAIL.",
    };
  }

  const resend = new Resend(resendKey);
  const { error: emailError } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: contactEmail,
    replyTo: data.email,
    subject: formatInquiryEmailSubject(data),
    text: formatInquiryEmailBody(data),
  });

  if (emailError) {
    console.error("[contact] Resend failed:", emailError.message);
    return {
      success: true,
      message:
        "Thanks — your brief was received. We may follow up shortly (email notification delayed).",
    };
  }

  return {
    success: true,
    message: "Thanks — your project brief has been sent.",
  };
}
