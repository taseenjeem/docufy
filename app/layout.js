import { Inter } from "next/font/google";
import "./globals.css";
import { getDocuments } from "@/lib/doc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simplify Documentation with Docufy",
  description:
    "Docufy is your go-to documentation generator tool. Easily organize, generate, and maintain project documentation with Docufy. Simplify your documentation process and streamline your workflow today.",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
