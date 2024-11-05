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
const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Anibi Adetoye Hamzat",
  url: "https://tazmaheyot.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/adetoye-anibi-32830823b",
    "https://github.com/Toyehamzat",
  ],
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Seamailer",
    url: "https://seamailer.app/",
  },
  description:
    "I am a passionate software developer with experience in building web applications",
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
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="canonical" href="https://tazmaheyot.me" />
        <link rel="icon" href="/Logo.ico" sizes="32x32" />
        <link rel="icon" href="/Logo.ico" sizes="192x192" />
        <link rel="apple-touch-icon" href="/Logo.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-black !scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
