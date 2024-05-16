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
    images:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
