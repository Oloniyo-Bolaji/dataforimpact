"use client";

import React from "react";
import Mentor from "@/components/Mentor";
import Service from "@/components/Service";
import Header from "@/reusable-components/Header";

const page = () => {
  return (
    <div>
      <Header heading="Get to know us" />
      <Service />
      <Mentor />
    </div>
  );
};

export default page;
