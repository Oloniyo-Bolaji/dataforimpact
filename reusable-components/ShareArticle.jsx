"use client";

import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareArticle = ({ title, slug }) => {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : "";

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };
  return (
    <div className="mt-[30px] border-t pt-[20px]">
      <h3 className="text-[15px] font-semibold my-[10px]">Share this article</h3>
      <div className="flex gap-[10px] text-[20px]">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] hover:text-blue-800"
        >
          <FaFacebook />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-sky-700"
        >
          <FaXTwitter />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:text-blue-900"
        >
          <FaLinkedin />
        </a>
        <a
          href={`https://wa.me/?text=${title} - ${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] hover:text-green-800"
        >
          <FaWhatsapp />
        </a>
        <button
          onClick={copyLink}
          className="text-[#7a7a7a] hover:text-gray-800"
        >
          <FaLink />
        </button>
      </div>
    </div>
  );
};

export default ShareArticle;
