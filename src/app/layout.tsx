import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Alex_Brush } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-alex-brush",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WedVisa — Free UK Wedding Planning Platform",
    template: "%s · WedVisa",
  },
  description:
    "Plan your wedding without the chaos. Budget, guest list, timeline, suppliers — every part of your day in one calm place. Free UK wedding planner, no account needed to start.",
  keywords: [
    "wedding planner UK",
    "free wedding planner",
    "wedding budget calculator",
    "wedding checklist",
    "UK wedding suppliers",
    "wedding guest list",
    "WedVisa",
  ],
  authors: [{ name: "WedVisa" }],
  openGraph: {
    title: "WedVisa — Free UK Wedding Planning Platform",
    description:
      "Budget, guest list, timeline, suppliers — every part of your day in one calm place. Free to use.",
    type: "website",
    locale: "en_GB",
    siteName: "WedVisa",
  },
  twitter: {
    card: "summary_large_image",
    title: "WedVisa — Free UK Wedding Planning Platform",
    description:
      "Plan your wedding without the chaos. Free tools for UK couples.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#c4531d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${fraunces.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] font-sans text-slate-900">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
