import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nwanguma Emmanuel | ML Engineer & Applied Data Scientist",
  description: "Production-focused Machine Learning Engineer building end-to-end ML systems, LLM evaluation pipelines, and AI-powered applications.",
  keywords: ["Machine Learning Engineer", "Applied Data Scientist", "LLM Systems", "FastAPI", "MLflow", "Docker", "RAG", "AI Infrastructure"],
  authors: [{ name: "Nwanguma Emmanuel" }],
  openGraph: {
    title: "Nwanguma Emmanuel | ML Engineer & Applied Data Scientist",
    description: "Production-focused Machine Learning Engineer building end-to-end ML systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent selection:text-background`}
      >
        <div className="fixed inset-0 grid-overlay -z-10 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
