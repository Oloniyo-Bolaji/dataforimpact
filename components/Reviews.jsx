"use client";

import React from "react";

const Reviews = () => {
  return (
    <div className="sm:my-[30px] py-[10px] px-[30px] text-center">
      <h3 className="headings">Impact Stories</h3>

      <div className="mt-6 flex justify-center">
        <video
          src="/reviews.mp4"
          controls
          className="rounded-xl shadow-lg w-full max-w-[800px] h-[200px] sm:h-[300px] md:h-[400px]"
        ></video>
      </div>
    </div>
  );
};

export default Reviews;
