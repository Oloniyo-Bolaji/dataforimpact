"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";

const GraduatesCard = ({ graduates }) => {
  console.log(graduates)
  return (
    <div className="flex items-center justify-center h-[350px]">
      <div className="w-full max-w-md">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          grabCursor={true}
        >
          {graduates.map((graduate, index) => (
            <SwiperSlide key={graduate._id || index}>
              {graduate.picture && (
                <Image
                  src={urlFor(graduate.picture.asset).url()}
                  alt={graduate.name || "Graduate"}
                  priority
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              )}
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <h1 className="text-[#00274d] text-[20px] font-bold">{graduate.name}</h1>
                <h3 className="text-[#7a7a7a] text-[14px]">{graduate.location}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GraduatesCard;
