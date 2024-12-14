import type { Metadata } from "next";
import "./globals.css";
import "./font.css";

export const metadata: Metadata = {
  title: "Adeyemi Adejumo",
  description: "Adeyemi's Portfolio",
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
