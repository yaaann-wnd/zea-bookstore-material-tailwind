import { Work_Sans } from "next/font/google";
import "./globals.css";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ZEA Bookstore",
  description: "Dibuat oleh Aftiyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} tracking-tight`}>{children}</body>
    </html>
  );
}
