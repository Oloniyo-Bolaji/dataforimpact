import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
      <body className={`${montserrat.className}`}>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
