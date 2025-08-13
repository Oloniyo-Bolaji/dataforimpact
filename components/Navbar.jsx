"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//import gsap from "gsap";
//import { getHero } from "@/src/sanity/queries";
//import { client } from "@/src/sanity/client";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [logo, setLogo] = useState(null);

  const toggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="h-[80px] sm:w-full text-link w-full flex justify-between items-center fixed top-0 left-0 z-[1000] px-[40px] py-[0] bg-white/5  backdrop-blur-sm border border-white/30">
      <div className=" sm:px-[10px]">
        <Image
          src="/datalogo.jpg"
          alt="logo"
          width={40}
          height={40}
          priority
          quality={60}
          className="w-full h-auto object-contain rounded-full"
        />
      </div>
      <div
        className="icon sm:hidden block  text-link text-[25px]"
        onClick={toggle}
      >
        {showMenu ? <IoIosClose /> : <IoMenu />}
      </div>
      <div
        className={`${showMenu ? "block absolute top-[60px] left-0 w-full z-[1000] overflow-hidden bg-dark transition-[height] duration-500 ease-in-out" : "sm:block hidden"}`}
      >
        <ul
          onClick={() => {
            if (showMenu) setShowMenu(false);
          }}
          className={`flex uppercase sm:flex-row text-link sm:gap-[20px] list-none ${showMenu ? "flex flex-col gap-[10px] justify-center items-center p-[10px]" : ""}`}
        >
          <Link href="/" className="text-[14px] text-[#7A7A7A]">
            <span>Home</span>
          </Link>
          <Link href="/company" className="text-[14px]">
            <span>Company</span>
          </Link>
          <Link href="/" className="text-[14px]">
            <span>News</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
