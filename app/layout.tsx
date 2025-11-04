import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Kelas - UKL",
  description: "Aplikasi Dashboard Kelas menggunakan Next.js dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
