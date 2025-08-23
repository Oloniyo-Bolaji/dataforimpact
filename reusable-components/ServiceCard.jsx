"use client"

import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div className="w-full h-full p-[5px] rounded-[10px] bg-[rgba(122,122,122,0.31)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-[rgba(122,122,122,0.3)]">
      <div className="w-full h-full bg-white rounded-[10px] p-[20px] flex flex-col gap-[10px]">
        <div className="flex justify-end">
          <span className="border border-solid rounded-[5px] p-[5px] text-[#00274d] text-[20px]">
            {service.icons}
          </span>
        </div>

        <div className="flex flex-col gap-[10px] px-[10px]">
          <h1 className="font-semibold text-[15px] text-[#00274d]">{service.service}</h1>
          <p className="text-[#7a7a7a] text-[13px]">
            {service.description}
          </p>
          <div className="flex flex-col text-[13px] text-[#7a7a7a]">
            {service.points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
