import { Work_Sans } from "next/font/google";
import "./globals.css";
import NavbarSimple from "./components/Navbar";

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "ZEA Bookstore",
  description: "Dibuat oleh Aftiyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={work_sans.variable}>
      <body>
        <NavbarSimple />
        <div className="max-w-screen-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
