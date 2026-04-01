import type { Metadata } from "next";
import { EB_Garamond, Lora } from "next/font/google"; // Lora as a solid Georgia alternative Google font, EB Garamond for Garamond
import "./globals.css";

const lora = Lora({
  variable: "--font-georgia",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ottis Perfumery House",
  description: "A Legacy Born in Tamil Nadu — Built on Pollock Street",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${ebGaramond.variable} scroll-smooth antialiased`}
    >
      <body className="font-garamond bg-white flex flex-col min-h-screen text-navy">
        {children}
      </body>
    </html>
  );
}
