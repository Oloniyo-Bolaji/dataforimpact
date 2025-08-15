"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";


const Partners = () => {
  return (
    <div className="py-[10px]">
      <h3
        className="headings"
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
