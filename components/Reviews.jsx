"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Reviews = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".heading",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);
  return (
    <div className="sm:my-[30px] px-[30px] ">
      <div className="max-w-screen-xl min-h-[400px]">
        <div className="heading">
          <h3 className="headings">Impact Stories</h3>
          <p className="text-center sm:text-[14px] text-[13px] text-[#7a7a7a] font-normal leading-[22px] sm:max-w-[500px] mx-auto">
            Our words are one thing, but the real impact is best expressed by
            those who’ve experienced it firsthand. Hear directly from our
            students as they share their journeys, challenges, and the
            transformation.
          </p>
        </div>

        <div className="mt-6 flex justify-center w-full">
          <video
            src="/reviews.mp4"
            controls
            title="Graduate Reviews"
            className="rounded-xl shadow-lg w-full max-w-[800px] aspect-video"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
