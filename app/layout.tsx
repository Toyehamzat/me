import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/Navbar";
import Footer from "./component/footer";

const font = NTR({ subsets: ["latin"], weight: "400" });

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
    url: "https://tazmaheyot.vercel.app",
    images: "https://pin.it/7jS3cPWXp",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className=" bg-black !scroll-smooth ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
