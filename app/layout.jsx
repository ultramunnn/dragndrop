// app/layout.jsx
import { Poppins, Maven_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // tambahkan sesuai kebutuhan
  variable: "--font-poppins",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "700"], // misalnya regular & bold
  variable: "--font-mavenpro",
});

export const metadata = {
  title: "Drag n' Drop",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${mavenPro.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
