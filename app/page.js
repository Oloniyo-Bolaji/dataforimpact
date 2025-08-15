import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import Mentor from "@/components/Mentor";
import Metrics from "@/components/Metrics";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Metrics />
      <Partners />
      <Service />
      <Mentor />
      <FAQs />
      <Reviews />
    </div>
  );
}
