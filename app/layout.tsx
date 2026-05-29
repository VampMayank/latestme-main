import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Mayank Verma — Full-Stack Developer",
  description: "Final-year Computer Science student specializing in Full-Stack Web Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ background: "radial-gradient(ellipse at 35% 25%, #1e1e26 0%, #111113 55%, #090909 100%)", color: "#E8E6F0" }}>{children}</body>
    </html>
  );
}
