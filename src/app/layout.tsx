import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Deepthi Travells",
  description: "A modern travel website for Deepthi Travels Sri Lanka.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        <SiteHeader />


        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>


        {/* GLOBAL FOOTER */}
        <Footer />
        <WhatsAppButton />



      </body>

    </html>
  );
}