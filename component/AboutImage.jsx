"use client";

import Image from "next/image";
import React from "react";

const AboutImage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#008080] overflow-hidden">
      <Image
        src="/laptopgan.png"
        alt=""
        fill
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default AboutImage;
