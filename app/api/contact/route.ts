import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

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

    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendKey || !contactEmail) {
      return NextResponse.json(
        { success: false, message: "Contact API not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(resendKey);
    const { name, email, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Message sent." });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
