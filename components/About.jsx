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
    <div className="lg:px-[40px] sm:px-[30px] px-[20px] py-[40px] flex lg:flex-row sm:flex-col flex-col gap-[20px]">
      <div className="w-[50%] flex items-center flex-col">
        <h3
          className={`${montserrat.className} text-[30px] font-bold bg-gradient-to-b from-[#008080] via-[#7a7a7a] to-[#00274D] bg-clip-text text-transparent`}
        >
          About Us
        </h3>
        <p className="text-[#7a7a7a] text-center leading-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          orci vel lectus cursus, vel ultrices tortor interdum. Aenean bibendum
          orci eu gravida vulputate. Integer dignissim magna sit amet purus
          suscipit, a faucibus erat mattis.Aenean bibendum orci eu gravida
          vulputate. Integer dignissim magna sit amet purus suscipit, a faucibus
          erat mattis. Quisque fermentum pretium risus sed luctus. Integer id
          pretium nunc. Nam venenatis enim et odio laoreet, sed eleifend mauris
          condimentum.
        </p>
      </div>
      <div className="w-[50%] flex justify-center items-center h-full">
        <div className="border border-[red] ">
          <div className="hexagon"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
