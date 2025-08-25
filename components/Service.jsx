"use client";
import { coreServices } from "@/lib/data";
import ServiceCard from "@/reusable-components/ServiceCard";
import React from "react";

const Service = () => {
  return (
    <div id="services" className="my-[20px] ">
      <h3 className="headings">Our Core Services</h3>
      <div className="my-[10px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] sm:px-[50px] px-[15px]">
        {" "}
        {coreServices.map((service, index) => (
          <ServiceCard key={index} service={service}/>
        ))}
      </div>
    </div>
  );
};

export default Service;
