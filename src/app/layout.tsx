import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import WebsiteLayout from "@/components/views/layout/WebsiteLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pika | Homepage",
  description: "Your Bridge to Effortless Deliveries"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebsiteLayout>{children}</WebsiteLayout>
      </body>
    </html>
  );
}
