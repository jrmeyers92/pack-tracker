import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
  title: "Pack Tracker",
  description: "An app to help manage your backpacking base weight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
