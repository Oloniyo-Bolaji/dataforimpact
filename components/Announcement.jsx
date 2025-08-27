"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className="flex items-center pl-[10px] py-[5px]">
      <Marquee speed={100} gradient={false} className="bg-[#2b4063] py-2 font-normal text-[#edeef2]">
        🔔 Attention! Our Next Cohort Starts soon — Suscribe to our news letter to get updates! 🔔
      </Marquee>
    </div>
  );
};

export default Announcement;
