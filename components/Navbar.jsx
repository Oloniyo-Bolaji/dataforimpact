"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [logo, setLogo] = useState(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#faqs", label: "FAQs" },
    { href: "/blog", label: "Blog" },
  ];

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
          className={`${montserrat.className} flex capitalize sm:flex-row text-[20px] sm:gap-[20px] list-none  text-[#00274D] font-medium ${showMenu ? "flex flex-col gap-[10px] justify-center items-center p-[10px] bg-white" : ""}`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[16px] px-2 py-[10px] ${
                  pathname === href ? "border-b-2 border-[#00274D]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
