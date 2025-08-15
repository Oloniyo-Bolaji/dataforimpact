"use client";

import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import { mentors } from "@/lib/data";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Mentor = () => {
  return (
    <div>
      <h3
        className={`${montserrat.className} text-[30px] capitalize font-semibold text-[#00274D] text-center`}
      >
        Meet Our Mentors
      </h3>
      <main className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] px-[50px]">
        {mentors.map((mentor) => {
          return (
            <div
              key={mentor.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-b from-[#008080] to-[#00274D] p-[5px]">
                <div className="relative w-full h-full">
                  <Image
                    src={mentor.image}
                    alt="profile pic"
                    fill
                    sizes="100%"
                    priority
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <h4 className="font-semibold text-[16px] text-shadow-[1px_1px_2px_#7a7a7a]">{mentor.name}</h4>
                <div className="flex gap-[20px] text-[15px]">
                  <a href="/">
                    <FaXTwitter />
                  </a>

                  <a href="/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Mentor;
