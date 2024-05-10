import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
    images: "logo.svg",
  },
  // metadataBase: "https://your-website-url.com", // Set metadataBase to your website's base URL
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className=" bg-[#0a192f] ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
