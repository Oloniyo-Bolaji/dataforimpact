"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { mentors } from "@/lib/data";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MentorCard from "@/reusable-components/MentorCard";

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
        className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] px-[50px] my-[20px]"
      >
        {mentors.map((mentor) => {
          return (
            <MentorCard key={mentor.id} mentor={mentor}/>
          );
        })}
      </main>
    </div>
  );
};

export default Mentor;
