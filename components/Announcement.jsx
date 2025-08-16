"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className="flex items-center pl-[10px] ">
      <div>
        <Image src="/bell.png" alt="bell image" width={50} height={50} />
      </div>
      <Marquee speed={100} gradient={false} className="bg-[#a5a5a5] py-2 font-semibold">
        Hello over there necxt cohort starts nexxt month, Be prepared!!!
      </Marquee>
    </div>
  );
};

export default Announcement;
