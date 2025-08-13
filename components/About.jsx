"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="sm:px-[100px] px-[20px] flex flex-col gap-[20px]">
      <div className="text-center ">
        <h3 className="text-[30px] text-[#00274d] font-bold">About Us</h3>
        <p className="text-[#7a7a7a]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          orci vel lectus cursus, vel ultrices tortor interdum. Aenean bibendum
          orci eu gravida vulputate. Integer dignissim magna sit amet purus
          suscipit, a faucibus erat mattis.
        </p>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-[20px] max-w-lg">
          {/**mission statement */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[15px] text-[#008080] uppercase">
              Our Mission Statement
            </h3>
            <p className="border-l-[4px] border-[#008080] text-[#00808060] px-[15px] text-[15px] leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur orci vel lectus cursus, vel ultrices tortor interdum.
              Aenean bibendum orci eu gravida vulputate.
            </p>
          </div>
          {/**vision statement */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[15px] text-[#008080] uppercase">
              Our Vision Statement
            </h3>
            <p className="border-l-[4px] border-[#008080] text-[#00808060] px-[15px] text-[15px] leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur orci vel lectus cursus, vel ultrices tortor interdum.
              Aenean bibendum orci eu gravida vulputate.
            </p>
          </div>
        </div>
        <div className="max-w-lg ">
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/dataanimated.png"
              alt="image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
