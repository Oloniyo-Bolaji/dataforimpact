"use client";

import React, { useEffect } from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


gsap.registerPlugin(ScrollToPlugin);
function getSamePageAnchor(link) {
  const { protocol, host, pathname, search } = window.location;
  return link.protocol === protocol &&
    link.host === host &&
    link.pathname === pathname &&
    link.search === search &&
    link.hash
    ? link.hash
    : null;
}

function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : null;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: elem,
        offsetY: 100,
      },
    });
  }
}
const options = { next: { revalidate: 30 } };

const Footer = () => {
  useEffect(() => {
    const anchorHandler = (e) => {
      const target = e.currentTarget;
      const hash = getSamePageAnchor(target);
      if (hash) {
        scrollToHash(hash, e);
      }
    };

    const allLinks = Array.from(document.querySelectorAll("a[href^='#']"));
    allLinks.forEach((link) => {
      link.addEventListener("click", anchorHandler);
    });

    scrollToHash(window.location.hash);

    return () => {
      allLinks.forEach((link) => {
        link.removeEventListener("click", anchorHandler);
      });
    };
  }, []);

  return (
    <footer className="bg-[#2b4063]">
      <div className="max-w-screen-xl mx-auto flex flex-col px-[20px]">
        <div className="flex sm:flex-row flex-col justify-between sm:gap-[100px] gap-[10px] py-[20px] px-[10px]">
          <div className="flex flex-col gap-[20px]">
            <h1
              className="text-[20px] text-[#edeef2] font-bold"
            >
              Data for Impact
            </h1>
            <p className="text-[#edeef270] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur orci vel lectus cursus, vel ultrices tortor interdum.
              Aenean bibendum orci eu gravida vulputate.
            </p>
            <div className="flex gap-[10px] text-[20px] text-[#edeef2]">
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
            <button
              onClick={() => {
                gsap.to(window, { duration: 1, scrollTo: 0 });
              }}
              className="border border-[#edeef2] w-fit inline-flex items-center gap-[10px] p-[5px] rounded-[5px] text-[#edeef2] uppercase text-[13px]"
            >
              <span className="animate-bounce">
                <MdKeyboardDoubleArrowUp />
              </span>
              <span>back to top</span>
            </button>
          </div>

          <div className="w-full">
            <h5
              className="text-[14px] text-[#edeef2] font-bold"
            >
              Quick Links
            </h5>
            <ul className="flex flex-col gap-[5px] text-[#edeef270] text-[14px]">
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#mentors">Mentors</Link>
              </li>
              <li>
                <Link href="/#faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/#reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" text-[#edeef270] text-[13px] flex items-center justify-center py-[5px]">
          <h4>
            &copy;{new Date().getFullYear()} Data for Impact. All rights
            reserved
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
