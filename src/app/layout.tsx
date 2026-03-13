import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coria Heating & Air Conditioning | HVAC Services NYC",
  description: "Family-owned HVAC company serving NYC for 40+ years. Expert heating, cooling, and indoor air quality services. 24/7 emergency service available.",
  keywords: "HVAC, heating, cooling, air conditioning, furnace, boiler, AC repair, NYC, Manhattan, Brooklyn, Queens, Bronx",
  openGraph: {
    title: "Coria Heating & Air Conditioning | HVAC Services NYC",
    description: "Family-owned HVAC company serving NYC for 40+ years. Expert heating, cooling, and indoor air quality services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[#0a0a0f] text-white font-sans`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
