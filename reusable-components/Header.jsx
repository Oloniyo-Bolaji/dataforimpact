"use client";

import React from "react";
import { IoSparklesSharp } from "react-icons/io5";

const Header = ({ heading }) => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-[50px] sm:py-[20px] py-[10px] px-[20px] ">
      <div className="bg-[#00274d] h-[250px] flex-center sm:p-[80px] p-[40px] rounded-[20px] border border-solid">
        <div className="relative text-white capitalize font-semibold border-white bg-[#ffffff20] border p-[10px] rounded-[10px]">
          <span>{heading}</span>
          <span className="absolute -top-[5px] left-0">
            <IoSparklesSharp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
