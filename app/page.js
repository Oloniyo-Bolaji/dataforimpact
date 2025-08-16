import About from "@/components/About";
import Announcement from "@/components/Announcement";
import FAQs from "@/components/FAQs";
import Graduates from "@/components/Graduates";
import Hero from "@/components/Hero";
import Mentor from "@/components/Mentor";
import Metrics from "@/components/Metrics";
import Partners from "@/components/Partners";
import Register from "@/components/Register";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Announcement />
      <About />
      <Service />
      <Partners />
      <Mentor />
      <FAQs />
      <Metrics />
      <Reviews />
      <Graduates />
      <Register />
    </div>
  );
}
