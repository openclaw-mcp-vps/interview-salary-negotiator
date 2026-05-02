import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalaryScript – Data-Driven Salary Negotiation for Engineers",
  description: "Generate personalized salary negotiation scripts based on job postings, company funding, location, and market data. Built for software engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="73bc46db-08d7-4ce6-bc9a-9475f8b0b080"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
