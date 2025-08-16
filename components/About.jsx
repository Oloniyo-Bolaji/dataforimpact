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
    duration: 0.5,
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
    duration: 0.5,
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
    duration: 0.5,
    ease: "power2.out",
  });

  return () => {
    anim1.kill();
    anim2.kill();
    anim3.kill();
  };
}, []);

  return (
    <div className="py-[30px] flex-col-center gap-[20px]">

      <div className="lg:px-[50px] sm:px-[30px] px-[20px] flex sm:flex-row flex-col sm:gap-[20px] gap-[100px]">

        <div className="sm:w-[50%] w-full sm:flex-center hidden h-full">
          <div className="relative w-[300px] h-[300px] mx-auto">
            {/* First image */}
            <div className="first shadow-[10px_10px_#7a7a7a] about-image">
              <Image
                src="/laptopgan.png"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Second image */}
            <div className="second about-image shadow-[10px_10px_#008080]">
              <Image
                src="/about2.jpg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Third image */}
            <div className="third about-image shadow-[10px_10px_#00274d]">
              <Image
                src="/about1.webp"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="sm:w-[50%] w-full flex gap-[10px] items-center">
          <p className="headings vertical-sentence">Who We Are </p>
          <div className="flex flex-col gap-[10px]">
            {/**mission statement */}
            <div className="flex flex-col gap-[10px]">
              <h4
                className={`${montserrat.className} sm:text-[20px] text-[16px] uppercase font-semibold text-[#008080]`}
              >
                Our mission statement
              </h4>
              <p className="text-justify border-l-[4px] border-[#00274D] text-[#00274D60] sm:text-[15px] text-[13px] leading-[25px] pl-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
            {/**vision statement */}
            <div>
              <h4
                className={`${montserrat.className} sm:text-[20px] text-[16px] uppercase font-semibold text-[#008080]`}
              >
                Our vision statement
              </h4>
              <p className="text-justify border-l-[4px] border-[#00274D] text-[#00274D60] sm:text-[15px] text-[13px] leading-[25px] pl-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
