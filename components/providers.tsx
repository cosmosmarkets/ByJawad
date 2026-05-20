"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { LenisProvider } from "@/components/animations/lenis-provider";
import { GsapProvider } from "@/components/animations/gsap-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <GsapProvider>
        <LenisProvider>
          {children}
          <Toaster richColors position="top-right" />
        </LenisProvider>
      </GsapProvider>
    </ThemeProvider>
  );
}
