import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { VisualModeProvider } from "@/context/VisualModeContext";
import { StorageConsentProvider } from "@/context/StorageConsentContext";
import StorageConsentPrompt from "@/components/StorageConsentPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "skyStuff",
  description: "stuff for skyblock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <StorageConsentProvider>
          <VisualModeProvider>
            <Navbar />
            <main className="flex-1 pt-14">{children}</main>
            <Footer />
          </VisualModeProvider>
          <StorageConsentPrompt />
        </StorageConsentProvider>
      </body>
    </html>
  );
}
