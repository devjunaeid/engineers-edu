import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProviderFn from "../providers/nextAuth";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Engineer's Academy",
  description: "Learn by Doing!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProviderFn>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextAuthProviderFn>
      </body>
    </html>
  );
}
