import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cakra: Jasa Pembuatan Website, Aplikasi & UI/UX Design Studio",
  description:
    "Cakra adalah Digital Product Studio yang menyediakan jasa pembuatan website, aplikasi mobile, dan desain UI/UX inovatif untuk akselerasi bisnis Anda. Solusi IT terpercaya dan berkualitas.",
  keywords: [
    "Digital Product Studio",
    "Digital Agency Indonesia",
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Aplikasi Mobile",
    "Software House Magelang", // Sesuaikan dengan lokasi kantor Anda
    "UI/UX Design Service",
    "Web Development Indonesia",
    "Jasa Branding Identitas",
    "Software House Jakarta",
    "Digital Transformation Consultant",
    "Pembuatan Website Custom",
    "Agency Design Kreatif",
    "Cakra Digital",
    "Jasa IT Terpercaya",
  ],

    openGraph: {
    title: "Cakra - Build Your Digital Ideas to Life",
    description: "Digital product agency spesialis desain UI/UX, pengembangan web, dan aplikasi mobile.",
    url: 'https://cakra.id', // Ganti dengan domain Anda
    siteName: 'Cakra Digital Agency',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo-cakra.png', // Gambar yang muncul saat link dibagikan
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
