import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = ({
  subsets: ["latin"],
  weight: ['300', '700'],
  varibale: '--font-montserrat'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wavebudget",
  description: "Wavebudget-your everyday installment shopping platform. Buy items on credit and get it delivered instantly after 50% upfront payment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.varibale, inter.className)}>{children}</body>
    </html>
  );
}
