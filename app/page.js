import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Metrics />
      <About />
      <Service />
      <FAQs />
      <Reviews />
    </div>
  );
}
