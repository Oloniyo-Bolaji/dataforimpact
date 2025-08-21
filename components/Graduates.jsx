"use client";

import React from "react";
import { graduates } from "@/lib/data";
import Image from "next/image";

const Graduates = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-[10px]">
      <h4 className="headings"> Meet Some of our alumni</h4>
      <p className="text-center sm:text-[15px] text-[13px] text-[#7a7a7a] font-normal leading-[22px] sm:max-w-[500px] mx-auto">
        Some of the amazing people who have been mentored by us
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 w-full py-[10px] lg:px-[150px] sm:px-[100px] px-[50px]">
        {graduates.map((graduate) => {
          return (
            <div key={graduate.id} className="relative w-full h-[350px]">
              <Image src={graduate.image} alt="image" fill sizes="100%" priority className="object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graduates;
