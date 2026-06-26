import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";


const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Deepthi Travels",
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
      className={`
        ${manrope.variable}
        ${inter.variable}
        h-full
        antialiased
      `}
    >

      <body
        className="
          min-h-full
          flex
          flex-col
          font-body
        "
      >

        <SiteHeader />


        <main className="flex-1">
          {children}
        </main>


        <Footer />

        <WhatsAppButton />


      </body>

    </html>

  );
}