import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Star | Moon Technologies",
  description: "The official website and documentation for Star, the space-themed programming language by Moon Technologies.",
  icons: {
    icon: [
      { url: '/extension-logo.png', sizes: 'any' },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col relative`}>
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent opacity-20" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-star/5 rounded-full blur-[120px]" />

          {/* Subtle Stars Animation */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
        </div>

        <Navbar />
        <main className="flex-grow z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
