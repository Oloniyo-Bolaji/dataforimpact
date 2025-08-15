"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { faqs } from "@/lib/data";
import { Montserrat } from "next/font/google";

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
    <div className="my-[20px] flex sm:flex-row flex-col gap-[10px] bg-[#7a7a7a70] p-[50px]">
      <div className="sm:w-[35%] w-full flex justify-center items-start flex-col">
        <h3
          className={`${montserrat.className} capitalize text-[30px] font-semibold text-[#00274d] my-[10px]`}
        >
          Frequently asked questions
        </h3>
        <p className="text-[#00274d70]">Get answers to the frequently asked questions</p>
      </div>

      <div className="sm:w-[65%] w-full p-[20px] flex flex-col justify-center items-center bg-[#7a7a7a80]">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="w-full border-b-[1px] border-[#7a7a7a] flex flex-col py-2"
          >
            <div className="flex justify-between items-center text-[#00274d] font-semibold text-[16px]">
              <h3>{faq.question}?</h3>
              <button onClick={() => handleAnswer(faq.id)}>
                {openId === faq.id ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openId === faq.id && (
              <div className="mt-[10px] text-[#00274d70] text-[16px]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
