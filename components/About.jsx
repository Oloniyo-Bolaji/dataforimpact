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
        className={`${montserrat.className} text-[30px] text-center font-bold bg-gradient-to-b from-[#008080] via-[#7a7a7a] to-[#00274D] bg-clip-text text-transparent`}
      >
        About Us
      </h3>
      <div className="lg:px-[40px] sm:px-[30px] px-[20px] flex sm:flex-row flex-col">
        <div className="sm:w-[50%] w-full flex items-center flex-col">
          <div>
            {/**mission statement */}
            <div>
              <h4>Our mission statement</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
            {/**vision statement */}
            <div>
              <h4>Our vision statement</h4>
              <p>
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
          <div className="border border-[red] ">
            <div className="hexagon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
