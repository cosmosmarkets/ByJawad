import { z } from "zod";

const newsletterSourceEnum = z.enum(["footer", "journal"]);

export const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  source: newsletterSourceEnum.default("footer"),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
