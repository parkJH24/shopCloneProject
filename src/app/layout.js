

import { Inter } from "next/font/google";
import "./globals.css";
import { Registry as StyledComponentRegistry } from "@/style/registry";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      
      <body className={inter.className}>
        <Header/>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>

        </body>
    </html>
  );
}
