import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Data for Impact -...touching lives we may never meet",
  icons: {
    icon: "/favicon.png",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
      </body>
    </html>
  );
}
