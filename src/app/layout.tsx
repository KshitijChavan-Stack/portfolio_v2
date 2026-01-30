import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kshitij | Portfolio",
  description: "Personal developer portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

