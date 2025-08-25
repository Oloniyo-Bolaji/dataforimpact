"use client";

import NewsLetter from "@/reusable-components/NewsLetter";
import React from "react";

const Register = () => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-[100px] sm:py-[20px] py-[10px] px-[20px] ">
      <div className="back bg-no-repeat sm:bg-scroll bg-fixed bg-left-top bg-[#ffffff] sm:bg-[length:800px_800px] flex sm:flex-row flex-col gap-[20px] justify-between sm:p-[80px] p-[40px] rounded-[20px]">
        <div className="">
          <h1 className="mt-[10px] sm:text-[45px] text-[25px] text-white sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]">
            Your <span className="relative z-10 text-[#008080]">Data</span>{" "}
            Journey Starts Here
          </h1>
          <p className="sm:text-[16px] text-[14px] text-[#edeef2] ">
            Next Cohort Opens Soon!.
          </p>
          <p className="sm:text-[16px] text-[14px] text-[#edeef2] leading-[25px]">
            Don’t miss your chance to become part of our next bootcamp cohort.
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Register;
