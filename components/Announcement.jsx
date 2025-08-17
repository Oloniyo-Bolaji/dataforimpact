"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className="flex items-center pl-[10px] py-[5px]">
      <div className="flex justify-center items-center">
        <Image src="/goldenbell.png" alt="bell image" width={40} height={40} className="animate-bounce" />
      </div>
      <Marquee speed={100} gradient={false} className="bg-[#2b4063] py-2 font-normal text-[#edeef2]">
        🔔 Attention! Our Next Cohort Starts This September — Limited Slots Available! Enroll Today! 🔔
      </Marquee>
    </div>
  );
};

export default Announcement;
