import Nav from "./components/Nav";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Pack Tracker",
  description: "An app to help manage your backpacking base weight",
  keywords: "backpacking, ultralight, hiking, outoors, gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
