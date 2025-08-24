import { urlFor } from "@/lib/imageBuilder";
import getReadingTime from "@/lib/readTime";
import ShareArticle from "@/reusable-components/ShareArticle";
import { client } from "@/src/sanity/client";
import { getArticle } from "@/src/sanity/queries";
import { PortableText } from "next-sanity";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const options = { next: { revalidate: 30 } };

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const components = {
  types: {
    image: ({ value }) => {
      return (
        <figure className="my-[10px]">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            width={500}
            height={300}
            className="mx-auto"
          />
          {value.caption && (
            <figcaption className="my-[5px] text-center text-sm text-[#7a7a7a] italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-[#00274d]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-[#00274d]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2 text-[#00274d]">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="leading-7 text-[#7a7a7a] mb-4 text-justify">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={rel ? "_blank" : "_self"}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  },
};

const BlogContent = async ({ params }) => {
  const { slug } = await params;

  const article = await client.fetch(getArticle, { slug });

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-[20px] py-[20px] lg:px-[150px] sm:px-[100px] px-[20px]">
        <div className="text-[15px] font-semibold text-[#00274d]">
          <span>
            {new Date(article._createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>{" "}
          · <span>{getReadingTime(article.content)}</span>
        </div>

        <div>
          <h1
            className={`${montserrat.className} mt-[10px] sm:text-[40px] text-[30px] text-[#00274D] sm:font-extrabold font-bold sm:leading-[40px] leading-[30px]`}
          >
            {article.title}
          </h1>
        </div>

        {article.coverImage && (
          <div className="sm:px-[50px] px-[10px]">
            <div className="relative sm:h-[350px] h-[250px] w-full">
              <Image
                src={urlFor(article.coverImage).url()}
                alt="cover image"
                fill
                sizes="auto"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <PortableText value={article.content} components={components} />

        <div>
          <ShareArticle slug={slug} title={article.title} />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
