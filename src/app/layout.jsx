
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = EB_Garamond({ subsets: ["latin"] , weight:['400']});

export const metadata = {
  title: "Owen Rudiyanto So",
  description: "Web Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
    </html>
  );
}
