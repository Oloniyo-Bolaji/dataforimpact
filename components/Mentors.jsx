"use client";

import Image from "next/image";
import React from "react";
import { mentors } from "@/lib/data";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const Mentors = () => {
  
  return (
    <div className="px-[30px]">
      <h3 className={`${montserrat.className} text-[30px] capitalize font-semibold text-[#00274D] text-center`}>
        Meet Our Mentors
      </h3>
      <div className="w-full flex flex-col gap-6">
        {mentors.map((mentor) => {
          return (
            <div
              key={mentor.id}
              className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative sm:w-1/3 w-full h-[250px]">
                <Image
                  src="/image1.jpg"
                  alt="profile pic"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="sm:w-2/3 w-full p-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {mentor.name}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {mentor.profile}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentors;
