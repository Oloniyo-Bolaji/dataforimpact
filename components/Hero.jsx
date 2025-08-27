"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



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
    <div className="lg:h-screen sm:h-[1000px] h-[600px] bg-repeat bg-cover bg-center bg-[#ffffff] my-background p-[10px]">
      <div className="max-w-screen-xl hero mx-auto flex lg:justify-between justify-center items-center lg:flex-row sm:flex-row flex-col h-full lg:px-[60px] sm:px-[30px] px-[15px] my-[30px]">
        <div className="lg:max-w-lg sm:max-w-sm flex flex-col gap-[10px] lg:items-start sm:items-center items-center lg:text-left  sm:text-center text-center">
          <h1 className="mt-[10px] sm:text-[50px] text-[35px] text-[#00274D] sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]">
            Learn{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Data</span>
              <span className="absolute left-1/2 top-1/2 w-[40px] h-[40px] bg-[#008080] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></span>
            </span>{" "}
            Skills That Get You Hired
          </h1>
          <p className="sm:text-[17px] text-[14px] text-[#00274D] font-medium leading-[25px]">
            Hands-on data training with real-world projects; Flexible,
            beginner-friendly, and industry-focused. Get Taught and Mentored by
            experienced analysts and data scientists.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center animate-pulse gap-2 w-[200px] rounded-[15px] bg-[#008080] p-[8px] text-[14px] text-white hover:bg-[#006666] transition"
          >
            <span>Join the Next Cohort</span>
            <FaArrowRight />
          </a>
        </div>
        <div className="lg:max-w-lg sm:max-w-sm">
          <Image
            src="/hero-image.png"
            alt="image"
            priority
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
