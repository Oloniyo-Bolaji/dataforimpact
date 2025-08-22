"use client";

import Mentor from "@/components/Mentor";
import React from "react";
import { Montserrat } from "next/font/google";
import Service from "@/components/Service";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const page = () => {
  return (
    <div>
      <div className="max-w-screen-xl back bg-no-repeat sm:bg-scroll bg-fixed bg-left-top bg-[#ffffff] sm:h-[250px] h-[150px] flex justify-center items-center">
        <div>
          <h1
            className={`${montserrat.className} mt-[10px] sm:text-[45px] text-[25px] text-[#008080] sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]`}
          >
            Get to know us
          </h1>
        </div>
      </div>
      <Service />
      <Mentor />      
    </div>
  );
};

export default page;
