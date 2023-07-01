import Nav from "./shared/Nav";
import Head from "next/head";
import "./globals.css";
import GoogleAnalytics from "./shared/GoogleAnalytics";

export const metadata = {
  title: "Pack Tracker",
  description: "An app to help manage your backpacking base weight",
  keywords: "backpacking, ultralight, hiking, outoors, gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
