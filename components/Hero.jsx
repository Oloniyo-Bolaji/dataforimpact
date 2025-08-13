"use client";

import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero = () => {
   useGSAP(() => {
    const animation = gsap.from(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top 60%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="lg:h-screen sm:h-screen h-[580px] my-background p-[10px]">
      <div className="hero flex justify-between items-center lg:flex-row flex-col lg:px-[60px] sm:px-[30px] px-[15px] h-full">
        <div className="max-w-lg flex flex-col gap-[10px] lg:items-start sm:items-center items-center lg:text-left  sm:text-center text-center">
          <h1
            className={`${montserrat.className} sm:text-[50px] text-[35px] text-[#00274D] sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]`}
          >
            Learn{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Data</span>
              <span className="absolute left-1/2 top-1/2 w-[30px] h-[30px] bg-[#008080] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></span>
            </span>{" "}
            Skills That Get You Hired
          </h1>
          <p className="text-[16px] ">
            Hands-on data training with real-world projects; Flexible,
            beginner-friendly, and industry-focused.Get Taught and Mentored by
            experienced analysts and data scientists.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 w-[200px] rounded-[5px] bg-[#008080] p-[5px] text-[15px] font-semibold text-white hover:bg-[#006666] transition"
          >
            <span>Join the Next Cohort</span>
            <FaArrowRight />
          </a>
        </div>
        <div className="max-w-lg">
          <Image src="/dataanimated.png" alt="image" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
