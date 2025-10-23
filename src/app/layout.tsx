import type { Metadata } from "next";
import { Poppins, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro-bangla",
  subsets: ["bengali"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "বরিশাল আধুনিক চক্ষু হাসপাতাল",
  description:
    "বরিশাল আধুনিক চক্ষু হাসপাতাল একটি নির্ভরযোগ্য প্রতিষ্ঠান, যা প্রতিষ্ঠানের সাথে সম্পর্কিত সকল প্রশ্নের উত্তর দেয়।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${tiroBangla.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
