import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./font.css";

const BASE_URL = "https://adeyemi.dev"; // Update with your actual domain

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#272730" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Adeyemi Adejumo | Full-Stack & Blockchain Developer",
    template: "%s | Adeyemi Adejumo",
  },
  description:
    "Portfolio of Adeyemi Adejumo — a Full-Stack Software Engineer specialising in scalable Web2 & Web3 systems, AI integration, RESTful APIs, and blockchain development using Node.js, Next.js, React, Solidity, and more.",
  keywords: [
    "Adeyemi Adejumo",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web3",
    "Next.js",
    "Node.js",
    "React",
    "TypeScript",
    "Solidity",
    "Software Engineer",
    "portfolio",
  ],
  authors: [{ name: "Adeyemi Adejumo" }],
  creator: "Adeyemi Adejumo",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Adeyemi Adejumo",
    title: "Adeyemi Adejumo | Full-Stack & Blockchain Developer",
    description:
      "Scalable web systems, AI-driven apps, and blockchain solutions — built by Adeyemi Adejumo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adeyemi Adejumo – Full-Stack & Blockchain Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeyemi Adejumo | Full-Stack & Blockchain Developer",
    description:
      "Scalable web systems, AI-driven apps, and blockchain solutions — built by Adeyemi Adejumo.",
    images: ["/og-image.png"],
    creator: "@ade_yem1",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-100 dark:bg-slate-700">{children}</body>
    </html>
  );
}

