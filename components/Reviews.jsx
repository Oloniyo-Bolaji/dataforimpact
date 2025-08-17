"use client";

import React from "react";


const Reviews = () => {
  return (
    <div className="sm:my-[30px] py-[10px] px-[30px] text-center rounded-[16px] min-h-[400px]">
      <h3 className="headings">Impact Stories</h3>
      <p className="text-center sm:text-[17px] text-[14px] text-[#7a7a7a] font-normal leading-[25px]">
        Listen to what some of our graduates have to say about the Data for
        Impact Bootcamp
      </p>
      <div className="mt-6 flex justify-center w-full">
        <video
          src="/reviews.mp4"
          controls
          title="Graduate Reviews"
          className="rounded-xl shadow-lg w-full max-w-[800px] aspect-video"
        ></video>
      </div>
    </div>
  );
};

export default Reviews;
