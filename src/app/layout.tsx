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
  title: {
    default: "Deepthi Travels | Sri Lanka Tours & Transport",
    template: "%s | Deepthi Travels",
  },

  description:
    "Deepthi Travels provides reliable transportation, airport transfers, private tours, and customized travel experiences across Sri Lanka.",

  keywords: [
    "Deepthi Travels",
    "Sri Lanka tours",
    "Sri Lanka transport",
    "airport transfers Sri Lanka",
    "private tours Sri Lanka",
    "travel services Sri Lanka",
  ],

  authors: [
    {
      name: "Deepthi Travels",
    },
  ],

  creator: "Deepthi Travels",

  metadataBase: new URL("https://deepthitravels.lk"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Deepthi Travels | Sri Lanka Tours & Transport",
    description:
      "Reliable transport and personalized travel experiences across Sri Lanka.",
    url: "https://deepthitravels.lk",
    siteName: "Deepthi Travels",
    locale: "en_US",
    type: "website",
  },
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
          bg-background
          text-foreground
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