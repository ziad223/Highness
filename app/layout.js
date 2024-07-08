import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import MainChat from "./_components/MainChat";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Highness Ziad",
  description: "highnessinv Investments LLC, a leading brand in financial services technology, with headquarters and branches in the USA, UK, UAE, Turkey. Basic",
  icons : {
    icon : ['/favicon.ico?v=4']
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <MainChat/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
