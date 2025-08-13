"use client";

import React from "react";
import { FaLaptop, FaCertificate } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";

const Service = () => {
  const services = [
    {
      icons: <FaLaptop />,
      service: "Virtual Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      icons: <MdWorkOutline />,
      service: "Expert Tutors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      icons: <IoPeopleOutline />,
      service: "Mentorship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      icons: <FaCertificate />,
      service: "Certification",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      icons: <RiUserStarLine />,
      service: "After Class Access ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      icons: <FaLaptop />,
      service: "Bootcamp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
  ];
  return (
    <div className="py-[20px] px-[30px]">
      <h3 className="text-center text-[30px] text-[#00274d] my-[10px]">What we do?</h3>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-[20px]">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex gap-[10px] w-full">
              <div className="w-[20%] flex justify-center items-center">
                <span className="border-[3px] rounded-full border-[#008080] p-[20px] text-[#008080] sm:text-[30px] text-[20px] font-bold">{service.icons}</span>
              </div>
              <div className="w-[80%]">
                <h3 className="uppercase text-[15px] text-[#00274d]">{service.service}</h3>
                <p className="leading-[20px] text-[14px] text-[#00274d]">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
