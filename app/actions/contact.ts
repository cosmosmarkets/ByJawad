"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

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
    subject: formData.get("subject") || undefined,
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

  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendKey || !contactEmail) {
    return {
      success: false,
      message: "Contact form is not configured yet. Add RESEND_API_KEY and CONTACT_EMAIL.",
    };
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
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Thanks — your message has been sent.",
  };
}
