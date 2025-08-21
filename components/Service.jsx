"use client";

import React, { useRef } from "react";
import { services } from "@/lib/data";
import { Montserrat } from "next/font/google";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Service = () => {
  const staggerRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(staggerRef.current.children);

    gsap.from(boxes, {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: staggerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div id="services" className="px-[30px]">
      <div className="max-w-screen-xl mx-auto w-full">
        <h3 className="headings">What we offer</h3>
        <div
          ref={staggerRef}
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-[20px] py-[10px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-[10px] w-full bg-[#7a7a7a10] shadow-[2px_2px_3px_#7a7a7a50] p-[10px] rounded-[10px]"
              >
                <div className="w-[20%] flex justify-center items-center">
                  <span
                    style={{ backgroundColor: service.color }}
                    className=" flex items-center justify-center w-[60px] h-[60px] rounded-full text-white sm:text-[30px] text-[20px] font-bold"
                  >
                    {service.icons}
                  </span>
                </div>
                <div className="w-[80%] text-center">
                  <h3
                    className={`${montserrat.className} capitalize font-bold text-[16px] text-[#008080]`}
                  >
                    {service.service}
                  </h3>
                  <p className="leading-[25px] text-[14px] text-[#00274D60] font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
