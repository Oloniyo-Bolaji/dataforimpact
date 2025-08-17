"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { faqs } from "@/lib/data";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const FAQs = () => {
  const [openId, setOpenId] = useState(1);

  const handleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="my-[20px] flex sm:flex-row flex-col gap-[10px] blueglass sm:p-[50px] p-[20px]">
      <div className="sm:w-[35%] w-full flex flex-col">
        <h3 className="headings text-left">Frequently asked questions</h3>
        <p className="text-[#00274d70] sm:text-[20px] text-[15px]">
          Get answers to the frequently asked questions
        </p>
        <div className="justify-center items-center sm:flex hidden">
          <Image
            src="/questionmark.png"
            alt="question mark"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="sm:w-[65%] w-full p-[20px] flex flex-col justify-center items-center glass divide-[#7a7a7a] divide-y-[1px]">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="w-full flex flex-col py-2"
          >
            <div className="flex justify-between items-center text-[#00274d] font-semibold sm:text-[16px] text-[14px]">
              <h3>{faq.question}?</h3>
              <button onClick={() => handleAnswer(faq.id)}>
                {openId === faq.id ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openId === faq.id && (
              <div className="mt-[10px] text-[#edeef2] sm:text-[15px] text-[13px] text-justify">
                {faq.answer}.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
