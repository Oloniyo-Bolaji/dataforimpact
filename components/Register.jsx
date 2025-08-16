"use client";

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Register = () => {
  return (
    <div className="sm:px-[20px] py-[20px] px-[10px]">
      <div className="blueglass flex gap-[20px] justify-between sm:p-[40px] p-[15px]">
        <div className="">
          <h1
            className={`${montserrat.className} mt-[10px] sm:text-[45px] text-[25px] text-white sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]`}
          >
            Your <span className="text-[#00274d]">Data</span> Journey Starts
            Here
          </h1>
          <p className="sm:text-[16px] text-[14px] text-[#00274d] leading-[25px] text-wrap">
            Next Cohort Opens Soon!.
          </p>
          <p className="sm:text-[16px] text-[14px] text-[#00274d] leading-[25px] text-wrap">
            Don’t miss your chance to become part of our next bootcamp cohort.
            Suscribe to our newsletter.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a
            href=""
            className="flex items-center justify-center gap-2 w-[200px] rounded-[15px] bg-[#00274d70] p-[8px] text-[14px] text-white hover:bg-[#00274d] transition"
          >
            Suscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
