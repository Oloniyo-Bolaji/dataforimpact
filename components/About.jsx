"use client";

import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const About = () => {
  return (
    <div className="py-[10px] flex flex-col gap-[20px]">
      <div className="lg:px-[50px] sm:px-[30px] px-[20px] flex sm:flex-row flex-col">
        <div className="sm:w-[50%] w-full flex justify-center items-center h-full">
          <div className="hexagon bg-[url('/laptopgan.png')] bg-cover bg-center shadow-xl shadow-gray-500/50">
          </div>
        </div>
        <div className="sm:w-[50%] w-full flex gap-[10px] items-center">
          <p className={`${montserrat.className} vertical-sentence text-[30px] font-semibold text-[#00274D]`}>Who We Are </p>
          <div className="flex flex-col gap-[10px]">
            {/**mission statement */}
            <div className="flex flex-col gap-[10px]">
              <h4
                className={`${montserrat.className} text-[20px] uppercase font-semibold text-[#008080]`}
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
                className={`${montserrat.className} text-[20px] uppercase font-semibold text-[#008080]`}
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
