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
      <Head>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0MJTKMKCMX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-0MJTKMKCMX');
        `}
        </Script>
      </Head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
