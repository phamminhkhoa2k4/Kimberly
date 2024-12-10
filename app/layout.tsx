import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kimberly",
  description: "Kimberly diamond tạo nên giá trọ cuộc sống",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
