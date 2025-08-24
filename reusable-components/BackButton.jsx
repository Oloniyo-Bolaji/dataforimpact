"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/blog");
    }
  };

  return (
    <div>
      <button onClick={handleBack} className="text-[25px]">
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default BackButton;
