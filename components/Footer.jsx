"use client";

import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Footer = () => {
  return (
    <footer className="bg-[#a5a5a5]">
      <div className="glass flex justify-between items-center px-[30px] py-[5px]">
        <h4>Get connected with us on social media</h4>
        <div className="flex gap-[10px] text-[16px]">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaSquareFacebook />
          </a>
          <a href="">
            <FaSquareInstagram />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="flex sm:flex-row sm:justify-between flex-col gap-[10px] px-[40px] py-[20px]">
        <div className="w-full">
          <h5>Data for Impact</h5>
          <div>
            {/**mission statement */}
            <div className="flex flex-col gap-[10px]">
              <h4
                className={`${montserrat.className} sm:text-[20px] text-[16px] uppercase font-semibold text-[#008080]`}
              >
                Our mission statement
              </h4>
              <p className="text-justify border-l-[4px] border-[#00274D] text-[#00274D60] sm:text-[15px] text-[13px] leading-[25px] pl-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
            {/**vision statement */}
            <div>
              <h4
                className={`${montserrat.className} sm:text-[20px] text-[16px] uppercase font-semibold text-[#008080]`}
              >
                Our vision statement
              </h4>
              <p className="text-justify border-l-[4px] border-[#00274D] text-[#00274D60] sm:text-[15px] text-[13px] leading-[25px] pl-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur orci vel lectus cursus, vel ultrices tortor interdum.
                Aenean bibendum orci eu gravida vulputate. Integer dignissim
                magna sit amet purus suscipit, a faucibus erat mattis.Aenean
                bibendum orci eu gravida vulputate.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="">About US</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Mentors</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Impact Stories</a>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
            <li>
              <Link href="">News</Link>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h4>Suscribe to our newsletter</h4>
          <input />
          <button>Suscribe</button>
        </div>
      </div>
      <div className="glass flex flex-col items-center justify-center py-[5px]">
        <h4>&copy;{new Date().getFullYear()} Data for Impact.</h4>
        <h4>All rights reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
