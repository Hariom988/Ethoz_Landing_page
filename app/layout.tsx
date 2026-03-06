import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethoz",
  description:
    "Ethoz is a professional clothing manufacturing company dedicated to producing high-quality garments for established and emerging fashion brands. With a strong focus on quality, precision, and timely delivery, we partner with brands to turn their designs into finished products ready for the market.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
