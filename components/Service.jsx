"use client";

import React from "react";
import { services } from "@/lib/data";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Service = () => {
  const colors = ["red", "blue", "pink", "green", "grey", "orange"];

  return (
    <div className="sm:my-[30px] py-[10px] px-[30px]">
      <h3 className="headings">What we offer</h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-[20px] py-[10px]">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-[10px] w-full bg-[#a5a5a510] shadow-[2px_2px_3px_#7a7a7a] p-[10px] rounded-[10px]"
            >
              <div className="w-[20%] flex justify-center items-center">
                <span
                  style={{ backgroundColor: colors[index] }}
                  className=" flex items-center justify-center w-[60px] h-[60px] rounded-full text-white sm:text-[30px] text-[20px] font-bold"
                >
                  {service.icons}
                </span>
              </div>
              <div className="w-[80%] text-center">
                <h3
                  className={`${montserrat.className} capitalize font-bold text-[16px] text-[#00274d]`}
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
  );
};

export default Service;
