import { NextResponse } from "next/server";
import { Resend } from "resend";

import { createAdminClient, isSupabaseAdminConfigured } from "@/lib/supabase/admin";
import {
  contactFormSchema,
  formatInquiryEmailBody,
  formatInquiryEmailSubject,
} from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (!isSupabaseAdminConfigured()) {
      return NextResponse.json(
        { success: false, message: "Contact API not configured." },
        { status: 503 }
      );
    }

    const supabase = createAdminClient();
    const { error: dbError } = await supabase.from("inquiries").insert({
      name: data.name,
      email: data.email,
      project_type: data.project_type,
      budget_range: data.budget_range,
      timeline: data.timeline,
      message: data.message,
      source: "api",
      status: "new",
    });

    if (dbError) {
      console.error("[contact/api] Supabase insert failed:", dbError.message);
      return NextResponse.json(
        { success: false, message: "Failed to save inquiry." },
        { status: 500 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendKey || !contactEmail) {
      return NextResponse.json({
        success: true,
        message: "Inquiry saved. Email notification not configured.",
      });
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
      console.error("[contact/api] Resend failed:", emailError.message);
      return NextResponse.json({
        success: true,
        message: "Inquiry saved. Email notification failed.",
      });
    }

    return NextResponse.json({ success: true, message: "Message sent." });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
