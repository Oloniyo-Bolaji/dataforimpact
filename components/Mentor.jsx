"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { mentors } from "@/lib/data";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Mentor = () => {
  const staggerRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(staggerRef.current?.children || []);

    gsap.from(boxes, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: staggerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div id="mentors" className="max-w-screen-xl mx-auto">
      <h3 className="headings">Meet The Mentors</h3>
      <p className="text-center sm:text-[15px] text-[13px] text-[#7a7a7a] font-normal leading-[22px] sm:max-w-[500px] mx-auto">
        Our Proactive Mentors who are industry leaders passionate about guiding the next generation of data innovators
      </p>
      <main
        ref={staggerRef}
        className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] px-[50px]"
      >
        {mentors.map((mentor) => {
          return (
            <div
              key={mentor.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] rounded-full bg-gradient-to-b from-[#008080] to-[#00274D]  p-[5px]">
                <div className="relative w-full h-full">
                  <Image
                    src={mentor.image}
                    alt="profile pic"
                    fill
                    sizes="100%"
                    priority
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <h4 className="font-semibold sm:text-[16px] text-[14px] text-center text-[#008080]">
                  {mentor.name}
                </h4>
                <div className="flex gap-[20px] text-[15px]">
                  <a href="/">
                    <FaXTwitter />
                  </a>

                  <a href="/" className="text-[#0A66C2]">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Mentor;
