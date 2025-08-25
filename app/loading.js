"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Loading = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".loading",
      { scale: 0.5, opacity: 0 },
      {
        scale: 0.8,
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        repeat: -1, 
        yoyo: true, 
      }
    );
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/datalogo.jpg"
        alt="data"
        width={100}
        height={100}
        className="loading"
      />
    </div>
  );
};

export default Loading;
