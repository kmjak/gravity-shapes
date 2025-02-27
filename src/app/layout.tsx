import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShapeProvider } from "@/context/shapeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Gravity Shapes',
    default: 'Gravity Shapes',
  },
  description: "“Gravity Shapes” is a falling block game where you choose 5 unique shapes before playing. Strategically stack your selected blocks as they fall randomly and aim for the highest score!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShapeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen bg-black text-white`}
        >
          {children}
        </body>
      </html>
    </ShapeProvider>
  );
}