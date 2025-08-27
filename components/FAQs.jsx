"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { faqs } from "@/lib/data";
import Image from "next/image";



const FAQs = () => {
  const [openId, setOpenId] = useState(1);

  const handleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faqs" className="my-[20px] bg-[#2b4063]">
      <div className="max-w-screen-xl mx-auto flex sm:flex-row flex-col gap-[10px] sm:p-[50px] p-[20px]">
        <div className="sm:w-[35%] w-full flex flex-col justify-center items-center text-center">
          <h3 className="headings text-[#edeef2]">
            Frequently asked questions
          </h3>
          <p className="text-[#edeef270] sm:text-[15px] text-[13px]">
            Have questions? Here you'll find answers and clarification.
          </p>
        </div>

        <div className="sm:w-[65%] w-full p-[20px] flex flex-col justify-center items-center bg-[#505e7d] divide-[#7a7a7a] divide-y-[1px]">
          {faqs.map((faq) => (
            <div key={faq.id} className="w-full flex flex-col py-2">
              <div className="flex justify-between items-center text-[#edeef2] font-semibold sm:text-[16px] text-[14px]">
                <h3>{faq.question}?</h3>
                <button onClick={() => handleAnswer(faq.id)}>
                  {openId === faq.id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {openId === faq.id && (
                <div className="mt-[10px] text-[#edeef270] sm:text-[15px] text-[13px] text-justify">
                  {faq.answer}.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
