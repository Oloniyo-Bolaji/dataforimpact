"use client";
import { coreServices } from "@/lib/data";
import ServiceCard from "@/reusable-components/ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const staggerRef = useRef();

  // GSAP for grid layout
  useGSAP(() => {
    const boxes = gsap.utils.toArray(staggerRef.current?.children || []);

    gsap.from(boxes, {
      x: -100,
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
    <div id="services" className="my-[20px] ">
      <h3 className="headings">Our Core Services</h3>
      <div
        ref={staggerRef}
        className="my-[10px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] sm:px-[50px] px-[15px]"
      >
        {" "}
        {coreServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
