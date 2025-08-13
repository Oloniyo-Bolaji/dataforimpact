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
    <div className="py-[40px] flex flex-col gap-[20px]">
      <h3
        className={`${montserrat.className} uppercase text-[30px] text-center font-bold bg-gradient-to-b from-[#008080] via-[#7a7a7a] to-[#00274D] bg-clip-text text-transparent`}
      >
        About Us
      </h3>
      <div className="lg:px-[50px] sm:px-[30px] px-[20px] flex sm:flex-row flex-col">
        <div className="sm:w-[50%] w-full flex items-center flex-col">
          <div className="flex flex-col gap-[10px]">
            {/**mission statement */}
            <div className="flex flex-col gap-[10px]">
              <h4 className={`${montserrat.className} text-[20px] uppercase font-semibold text-[#00274D]`}>Our mission statement</h4>
              <p className="text-justify border-l-[3px] border-[#008080] text-[#00808060] sm:text-[15px] text-[13px] leading-[20px] p-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
            {/**vision statement */}
            <div>
              <h4 className={`${montserrat.className} text-[20px] uppercase font-semibold text-right text-[#00274D]`}>Our vision statement</h4>
              <p className="text-justify border-r-[3px] border-[#008080] text-[#00808060] sm:text-[15px] text-[13px] leading-[20px] p-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] w-full flex justify-center items-center h-full">
          <div className="border-[2px] border-[red] border-dashed">
            <div className="hexagon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
