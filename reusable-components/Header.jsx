"use client";

import React from "react";

const Header = ({heading}) => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-[50px] sm:py-[20px] py-[10px] px-[20px] ">
      <div className="bg-[#00274d] h-[250px] flex-center sm:p-[80px] p-[40px] rounded-[20px] border border-solid">
        <h1 className=" text-white capitalize font-semibold border-white bg-[#ffffff20] border p-[10px] rounded-[10px]">{heading}</h1>
      </div>
    </div>
  );
};

export default Header;
