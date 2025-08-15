"use client";

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Reviews = () => {
  return (
    <div>
      <h3 className="headings">Impact Stories</h3>
      <div></div>
    </div>
  );
};

export default Reviews;
