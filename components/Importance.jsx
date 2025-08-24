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

export default function ServicesSection() {
  const radius = 320; // spacing for circular layout
  const staggerRef = useRef();

  // GSAP for grid layout
  useGSAP(() => {
    const boxes = gsap.utils.toArray(staggerRef.current?.children || []);

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
    <div>
      <div className="mx-auto max-w-screen-xl">
        {/* Headings shown on only small screen */}
        <h3 className="sm:hidden headings text-center my-[20px]">
          Why Data for Impact
        </h3>

        {/* ✅ Large screen circular layout */}
        <div className="hidden lg:block relative my-[150px] w-[500px] h-[500px] mx-auto">
          {/* Center div */}
          <div className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold">
            <h3 className="headings">Why Data for Impact</h3>
          </div>

          {/* Surrounding divs */}
          {services.map((service, index) => {
            const angle = (index / services.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={index}
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute flex flex-col justify-center items-center gap-2 w-[300px] bg-[#7a7a7a10] shadow-[2px_2px_6px_#7a7a7a50] p-4 rounded-[12px] text-center"
              >
                <div className="flex justify-center items-center">
                  <span
                    style={{ backgroundColor: service.color }}
                    className="flex items-center justify-center w-[60px] h-[60px] rounded-full text-white sm:text-[30px] text-[20px] font-bold"
                  >
                    {service.icons}
                  </span>
                </div>
                <div>
                  <h3
                    className={`${montserrat.className} capitalize font-bold text-[16px] text-[#008080]`}
                  >
                    {service.service}
                  </h3>
                  <p className="leading-[20px] text-[14px] text-[#00274D90]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ Small/medium screen grid layout */}
        <div className="lg:hidden px-[30px]">
          <div className="max-w-screen-xl mx-auto w-full">
            <div
              ref={staggerRef}
              className="grid sm:grid-cols-3 grid-cols-1 w-full gap-[20px] py-[10px]"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-col-center gap-[10px] w-full bg-[#7a7a7a10] shadow-[2px_2px_3px_#7a7a7a50] p-[10px] rounded-[10px]"
                >
                  <div className="w-[20%] flex justify-center items-center">
                    <span
                      style={{ backgroundColor: service.color }}
                      className="flex-center w-[60px] h-[60px] rounded-full text-white sm:text-[30px] text-[20px] font-bold"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
