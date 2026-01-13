import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AppLoader from "@/app/components/AppLoader";
import ScrollToTop from "@/app/components/ScrollToTop";
// import Loader2 from "../app/components/Loader2"

const jakarta = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
});

const nexa = localFont({
  src: [
    {
      path: "./fonts/NexaLight.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
});


export const metadata: Metadata = {
  title: "Pragyan",
  description: "Stories of clarity, credibility, and growth",
  icons: {

    icon: "/MarketingPortfolio.webp"

  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${nexa.variable}`} >
      <body className={`antialiased`}>
        <AppLoader>

          <Header />
          {children}
          <Footer />
        </AppLoader>

        <ScrollToTop />
      </body>
    </html>
  );
}
