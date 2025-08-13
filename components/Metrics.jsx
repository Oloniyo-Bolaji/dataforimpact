"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Metrics = () => {
  const metrics = [
    {
      metric: "6",
      title: "Mentors",
    },
    {
      metric: "20+",
      title: "Mentees",
    },
    {
      metric: "6+",
      title: "Patners",
    },
    {
      metric: "16",
      title: "Graduates",
    },
  ];
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
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-[30px] sm:shadow-[5px_5px_10px_#ccc]">
          {metrics.map((metric, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center p-[20px]"
              >
                <h4
                  ref={(el) => (numbersRef.current[index] = el)}
                  className="text-[50px] text-[#008080]"
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
