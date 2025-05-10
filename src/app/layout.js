import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "@/components/Home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Aadarsh Gupta",
  description: "Explore the works and projects of Aadarsh Gupta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-white transition-all duration-300`}
      >
        <Home children={children} />
      </body>
    </html>
  );
}
