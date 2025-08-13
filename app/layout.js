import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Data for Impact",
  icons: {
    icon: "/favicon.png",
  },
  description: "...touching lives we may never meet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
