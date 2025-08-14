"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Partners = () => {
  return (
    <div className="py-[10px]">
      <h3
        className={`${montserrat.className} text-[30px] capitalize font-semibold text-[#00274D] text-center`}
      >
        Our Sponsors & Partners
      </h3>
      <Marquee
        speed={150}
        gradient={false}
        className="flex items-center py-2 "
      >
        <Image
          src="/unnations.png"
          alt="UN Nations logo"
          width={200}
          height={100}
          className="mx-8 h-auto w-auto"
        />
        <Image
          src="/girlup.png"
          alt="Girl Up logo"
          width={200}
          height={100}
          className="mx-8 h-auto w-auto"
        />
      </Marquee>
    </div>
  );
};

export default Partners;
