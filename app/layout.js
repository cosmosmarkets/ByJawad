import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://byjawad.com"),
  title: "By Jawad — Portfolio sites for creative freelancers",
  description:
    "High-conversion portfolio sites for creative freelancers. Custom builds from $300.",
  openGraph: {
    title: "By Jawad — Portfolio sites for creative freelancers",
    description:
      "High-conversion portfolio sites for creative freelancers. Custom builds from $300.",
    type: "website",
    images: ["/brand_assets/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "By Jawad — Portfolio sites for creative freelancers",
    description:
      "High-conversion portfolio sites for creative freelancers. Custom builds from $300.",
    images: ["/brand_assets/og-image.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain antialiased bg-cream text-ink">{children}</body>
    </html>
  );
}
