"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="my-[50px] py-[10px] shadow-[0_2px_5px_#7a7a7a50,0_-2px_5px_#7a7a7a50]">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="headings">Our Sponsors & Partners</h3>
        <Marquee
          speed={70}
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
           <Image
            src="/buk.jpg"
            alt="Girl Up logo"
            width={200}
            height={100}
            className="mx-8 h-auto w-auto"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
