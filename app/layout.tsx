import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Calculator",
  description: "calculator to practice web creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
