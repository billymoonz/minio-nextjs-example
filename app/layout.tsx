import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MinIO - Test Bucket",
  description: "MinIO - Test Bucket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
