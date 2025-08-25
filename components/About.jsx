"use client";

import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const About = () => {
  useGSAP(() => {
    const anim1 = gsap.to(".first", {
      scrollTrigger: {
        trigger: ".first",
        start: "top 60%",
        toggleActions: "play none none none",
      },
      x: -110,
      y: -70,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    const anim2 = gsap.to(".second", {
      scrollTrigger: {
        trigger: ".second",
        start: "top 60%",
        toggleActions: "play none none none",
      },
      x: 110,
      y: -70,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    const anim3 = gsap.to(".third", {
      scrollTrigger: {
        trigger: ".third",
        start: "top 60%",
        toggleActions: "play none none none",
      },
      x: 0,
      y: 120,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    return () => {
      anim1.kill();
      anim2.kill();
      anim3.kill();
    };
  }, []);

  return (
    <div id="about" className="sm:pt-[70px] sm:pb-[100px] py-[10px]">
      <div className="max-w-screen-xl  mx-auto flex-col-center lg:px-[50px] sm:px-[30px] px-[20px] flex sm:flex-row flex-col sm:gap-[20px] gap-[100px]">
       
        <div className="sm:w-[50%] w-full flex gap-[10px] items-center">
          <p className="headings vertical-sentence">Who We Are </p>
          <div className="flex flex-col gap-[10px]">
            {/**mission statement */}
            <div className="flex flex-col gap-[10px]">
              <h4
                className={`${montserrat.className} sm:text-[16px] text-[16px] uppercase font-semibold text-[#008080]`}
              >
                Our mission statement
              </h4>
              <p className="text-justify border-l-[4px] border-[#1e365b] text-[#00274D60] sm:text-[15px] text-[13px] leading-[25px] pl-[10px]">
                To empower individual, communities, and systems across health
                and livelihood sectors with data-driven solutions, by designing
                innovative monitoring systems, building loacal capacity, and
                applying artifcial intelligence and digital tools to improve
                decision-makin, resilience, and sustainable development.
              </p>
            </div>
            {/**vision statement */}
            <div className="flex flex-col gap-[10px]">
              <h4
                className={`${montserrat.className} sm:text-[16px] text-[16px] uppercase font-semibold text-[#008080]`}
              >
                Our vision statement
              </h4>
              <p className="text-justify border-l-[4px] border-[#1e365b] text-[#00274D60] sm:text-[15px] text-[13px] leading-[25px] pl-[10px]">
                To improve lives we may never meet by applying data science,
                artificial intelligence, and digital innovation to drive
                sustainable impact in gloabal health and livelihoods.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:w-[50%] w-full sm:flex-center hidden h-full">
          <div className="relative w-[300px] h-[300px] mx-auto">
            {/* First image */}
            <div className="first about-image border-[#00274D]">
              <Image
                src="/about2.png"
                alt=""
                sizes="auto"
                priority
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Second image */}
            <div className="second about-image border-[#7A7A7A]">
              <Image
                src="/ai1.jpg"
                alt=""
                sizes="auto"
                priority
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Third image */}
            <div className="third about-image border-[#008080] border-double">
              <Image
                src="/about1.webp"
                alt=""
                sizes="auto"
                priority
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
