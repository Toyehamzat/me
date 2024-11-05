import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/Navbar";
import Footer from "./component/footer";

const ntrFont = NTR({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anibi Adetoye Hamzat",
  description:
    "I am a passionate software developer with experience in building web applications",
  icons: [
    {
      url: "/Logo.ico",
      href: "/Logo.ico",
    },
  ],
  openGraph: {
    title: "Anibi Adetoye Hamzat",
    description: "Portfolio",
    url: "https://tazmaheyot.me",
    images: [
      {
        url: "https://i.pinimg.com/564x/6e/83/84/6e8384dc3aa8340856d743712ef8b3db.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Thumbnail",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Anibi Adetoye Hamzat's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tazmaheyot",
    creator: "@tazmaheyot",
    title: "Anibi Adetoye Hamzat",
    description: "Portfolio",
    images: [
      "https://i.pinimg.com/564x/6e/83/84/6e8384dc3aa8340856d743712ef8b3db.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ntrFont.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://tazmaheyot.vercel.app" />
        <link rel="icon" href="/Logo.ico" sizes="32x32" />
        <link rel="icon" href="/Logo.ico" sizes="192x192" />
        <link rel="apple-touch-icon" href="/Logo.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className=" bg-black !scroll-smooth ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
