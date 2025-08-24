"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const MentorCard = ({ mentor }) => {
  return (
    <div className="flex-col-center">
      <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] rounded-full bg-gradient-to-b from-[#008080] to-[#00274D]  p-[5px]">
        <div className="relative w-full h-full">
          <Image
            src={urlFor(mentor.profilePicture?.asset).url()}
            alt="profile pic"
            fill
            sizes="100%"
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <h4 className="font-semibold sm:text-[16px] text-[14px] text-center text-[#008080]">
          {mentor.name}
        </h4>
        <h5 className="text-[#7a7a7a] text-[14px] text-center">
          {mentor.title}
        </h5>
        <div className="flex gap-[20px] text-[15px]">
          <a href={mentor.linkedIn} className="text-[#0A66C2]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
