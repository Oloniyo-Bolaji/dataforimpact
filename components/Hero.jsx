"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="sm:h-screen h-[580px] my-background p-[50px]">
      <div className="flex justify-between items-center sm:px-[80px] px-[15px] h-full">
        <div className="max-w-lg">
          <h1 className="sm:text-[60px] text-[35px]  font-extrabold sm:leading-[60px] leading-[35px]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-[15px] text-[#7a7a7a]">
            Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum.
            Aenean bibendum orci eu gravida vulputate.
          </p>
          <button className="w-[150px] rounded-r-[10px] bg-[#008080] p-[5px] text-[15px] font-bold text-white">
            <a href="/">Join Next Cohort</a>
          </button>
        </div>
        <div className="max-w-lg">
          <Image src="/dataanimated.png" alt="image" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
