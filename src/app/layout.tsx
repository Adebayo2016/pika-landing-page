import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import WebsiteLayout from "@/components/views/layout/WebsiteLayout";
import Provider from "./provider";
import { Flip, ToastContainer } from "react-toastify";
import Head from 'next/head'; // import the Head component

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
      <Head>
  <link rel="shortcut icon" href="/favicon.ico" />
</Head>
      <body className={inter.className}>
        <Provider>
          <WebsiteLayout>{children}</WebsiteLayout>
          <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Flip}
          />
        </Provider>
      </body>
    </html>
  );
}
