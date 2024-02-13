import { Work_Sans } from "next/font/google";
import "./globals.css";
import NavbarSimple from "./components/Navbar";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ZEA Bookstore",
  description: "Dibuat oleh Aftiyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <NavbarSimple />
        {children}
      </body>
    </html>
  );
}
