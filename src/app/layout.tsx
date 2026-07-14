import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WedVisa — AI-Powered Wedding Visa Platform",
    template: "%s · WedVisa",
  },
  description:
    "Make your wedding visa journey effortless. WedVisa helps couples with eligibility checks, timelines, documents, evidence, and interview prep—private, secure, and AI-powered.",
  keywords: [
    "wedding visa",
    "partner visa",
    "marriage visa",
    "AI immigration",
    "fiancé visa",
    "spouse visa",
    "WedVisa",
  ],
  authors: [{ name: "WedVisa" }],
  openGraph: {
    title: "WedVisa — AI-Powered Wedding Visa Platform",
    description:
      "Eligibility, documents, timelines, and interview prep for couples building a life across borders.",
    type: "website",
    locale: "en_US",
    siteName: "WedVisa",
  },
  twitter: {
    card: "summary_large_image",
    title: "WedVisa — AI-Powered Wedding Visa Platform",
    description:
      "Make your wedding visa journey effortless with AI-guided tools for couples.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
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
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
