import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

export const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Suraj | NextJS",
  description: "Portfolio website built with NextJS",
  icons: {
    icon: "/surajprofileport.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   <body
  className={`${font.className} antialiased 
    bg-gradient-to-b from-[#0a0a2e] via-[#0c0c48] to-[#3b106b] 
    text-white`}
>

        <ResponsiveNavbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
