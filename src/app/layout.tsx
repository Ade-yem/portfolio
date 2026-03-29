import type { Metadata } from "next";
import "./globals.css";
import "./font.css";

export const metadata: Metadata = {
  title: "Adeyemi Adejumo",
  description: "Adeyemi Adejumo's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="apple-mobile-web-app-title"
        content="Adeyemi Adejumo's Portfolio"
      />
      <body className="bg-slate-100 dark:bg-slate-700">{children}</body>
    </html>
  );
}
