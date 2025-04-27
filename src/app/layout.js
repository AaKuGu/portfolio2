import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-white dark:bg-[#0D1117] transition-all duration-300`}
      >
        <div className="flex flex-col md:flex-row  gap-8 min-h-screen p-4 md:p-10 w-full">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-[#161B22] rounded-2xl shadow-md p-6 flex flex-col gap-6  h-fit">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col gap-6">
            <nav className="bg-white dark:bg-[#161B22] rounded-2xl shadow-md p-4">
              <Navbar />
            </nav>

            <section className="bg-white dark:bg-[#161B22] rounded-2xl shadow-md p-3 flex-1">
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
