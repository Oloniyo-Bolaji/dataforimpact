"use client";

import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";


const FAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Data for Impact",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      id: 2,
      question: "How do I join",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      id: 3,
      question: "Can I join for free",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      id: 4,
      question: "How are the classes held, Virtual or Onsite",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
    {
      id: 5,
      question: "When does the next cohort start",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
    },
  ];
  return (
    <div className="py-[20px] sm:px-[100px] px-[30px]">
      <h3 className="text-center text-[30px] text-[#00274d] my-[10px]">FAQs</h3>
      <div className="w-full flex flex-col justify-center items-center">
        {faqs.map((faq) => {
          return (
            <div key={faq.id}>
              <div>{faq.question}?</div>
              <div>{faq.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
