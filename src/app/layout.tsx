import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const potatoCookie = cookieStore.get("pv_potato_settings");

  let isPotatoModeActive = false;
  if (potatoCookie) {
    try {
      const parsedSettings = JSON.parse(decodeURIComponent(potatoCookie.value));
      if (parsedSettings && typeof parsedSettings === 'object') {
        if (parsedSettings.scope === 'global') {
          isPotatoModeActive = true;
        }
      }
    } catch (error) {
      console.error("Failed to parse potato settings cookie on the server:", error);
    }
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className={isPotatoModeActive ? "" : "flex flex-col min-h-screen bg-gray-900 text-white"}>
        <Navbar />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
