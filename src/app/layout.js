import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar/page";
import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Trevo website",
  description: "Nextjs WebApp For Traveling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
