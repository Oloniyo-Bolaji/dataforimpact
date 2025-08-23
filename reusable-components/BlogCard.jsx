"use client";

import { urlFor } from "@/lib/imageBuilder";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import getReadingTime from "@/lib/readTime";
import Link from "next/link";

const cardRefs = [];

const BlogCard = ({ article, index }) => {
  console.log(article);
  const cardRef = useRef();

  const getPlainText = (blocks) => {
    return blocks
      .map((block) => block.children?.map((child) => child.text).join("") || "")
      .join("\n");
  };

  const previewText = getPlainText(article.content).slice(0, 120) + "...";

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        cardRefs[index] = el;
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="p-[20px] rounded-md shadow-[0_4px_8px_#7a7a7a50] transition-transform"
    >
      {article.coverImage && (
        <div className="w-full h-[200px] relative">
          <Image
            src={urlFor(article.coverImage).url()}
            alt="image"
            fill
            sizes="auto"
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="mt-[10px]">
        <div className="flex items-center justify-end">
          <p className="text-[14px] text-[#7a7a7a]">
            {getReadingTime(article.content)}
          </p>
        </div>
        <h3 className="text-[15px] font-semibold">{article.title}</h3>
        <p className="text-[12px] text-desc">
          {previewText} <Link href={`/blog/${article.slug}`} className="text-[red]">Read more</Link>{" "}
        </p>
        <div className="flex gap-[10px] items-center">
          <div className="relative h-[30px] w-[30px] rounded-full border border-[black]">
            <Image
              src={urlFor(article.author.profilePicture?.asset).url()}
              alt="image"
              fill
              sizes="auto"
              className="object-contain rounded-full"
              priority
            />
          </div>
          <div className="flex flex-col text-[13px] text-[#7a7a7a]">
            <span className="font-medium">{article.author.name ? article.author.name : "Anonymous"}</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
