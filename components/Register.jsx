"use client";

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Register = () => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-[100px] sm:py-[20px] py-[10px] px-[20px] ">
      <div className="back bg-no-repeat sm:bg-scroll bg-fixed bg-left-top bg-[#ffffff] sm:bg-[length:800px_800px] flex sm:flex-row flex-col gap-[20px] justify-between sm:p-[80px] p-[40px] rounded-[20px]">
        <div className="">
          <h1
            className={`${montserrat.className} mt-[10px] sm:text-[45px] text-[25px] text-white sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]`}
          >
            Your{" "}
              <span className="relative z-10 text-[#008080]">Data</span>
            {" "}
            Journey Starts Here
          </h1>
          <p className="sm:text-[16px] text-[14px] text-[#edeef2] ">
            Next Cohort Opens Soon!.
          </p>
          <p className="sm:text-[16px] text-[14px] text-[#edeef2] leading-[25px]">
            Don’t miss your chance to become part of our next bootcamp cohort.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h4 className="text-[#008080] font-bold">
            Suscribe to our newsletter
          </h4>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input sm:w-[250px] w-full h-[50px] rounded-[10px] placeholder:text-[13px] outline-0 caret-[#edeef2] text-[#edeef2] p-[5px] box-border"
          />
          <button className="w-[150px] rounded-[15px] bg-[#00808090] p-[8px] text-[14px] text-white hover:bg-[#008080] transition">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
