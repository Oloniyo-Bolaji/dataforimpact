"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { metrics } from "@/lib/data";
import { IBM_Plex_Sans } from "next/font/google";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const Metrics = () => {
  const numbersRef = useRef([]);

  useEffect(() => {
    numbersRef.current.forEach((el, i) => {
      const rawValue = metrics[i].metric;
      const hasPlus = rawValue.includes("+");
      const endValue = parseInt(rawValue, 10);

      const counter = { value: 0 };

      gsap.to(counter, {
        value: endValue,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          el.textContent = hasPlus
            ? `${Math.floor(counter.value)}+`
            : Math.floor(counter.value);
        },
      });
    });
  }, [metrics]);

  return (
    <div className="px-[20px] py-[50px]">
      <div className="max-w-screen-xl mx-auto w-full h-full flex justify-center items-center">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-[30px] sm:shadow-[5px_5px_10px_#7A7A7A50]">
          {metrics.map((metric, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center p-[20px]"
              >
                <h4
                  ref={(el) => (numbersRef.current[index] = el)}
                  className={`${plexSans.className} text-[50px] text-[#1e365b] sm:font-extrabold font-bold`}
                >
                  0
                </h4>
                <p className="text-[#7a7a7a]">{metric.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
