import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import CustomCursor from "@/components/CustomCursor";
import Providers from "@/redux/Providers";
import Footer from "@/components/footer/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ARS | Luxury & Performance Cars",
    template: "%s | ARS",
  },

  description:
    "Discover exceptional luxury and performance cars at ARS. Explore our curated collection of premium automobiles.",
}
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary">
        <div>
          <Providers>
            <CustomCursor />
            <TopHeader />
            {children}
            <Footer/>
          </Providers>
        </div>
      </body>
    </html>
  );
}
