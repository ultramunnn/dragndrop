// app/layout.jsx
import { Poppins, Maven_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mavenpro",
  display: "swap",
});

export const metadata = {
  title: "Drag n' Drop - Jasa Desain & Pembuatan Website Profesional",
  description: "Jasa profesional di bidang desain dan pembuatan website yang fokus membantu individu, UMKM, dan startup mewujudkan kehadiran digital mereka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${mavenPro.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
