import React from "react";
import { client } from "@/src/sanity/client";
import { getArticles } from "@/src/sanity/queries";
import BlogCard from "@/components/BlogCard";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const options = { next: { revalidate: 30 } };

const Blog = async () => {
  const articles = await client.fetch(getArticles, {}, options);
  console.log(articles);
  return (
    <div className="relative py-[30px]">
      <div className="max-w-screen-xl back bg-[#2b4063] sm:h-[250px] h-[150px] flex justify-center items-center">
        <div>
          <h1
            className={`${montserrat.className} mt-[10px] sm:text-[45px] text-[25px] text-[#008080] sm:font-extrabold font-bold sm:leading-[50px] leading-[35px]`}
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 ">Blog</span>
              <span className="absolute left-1/2 top-1/2 w-[40px] h-[40px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></span>
            </span>{" "}
          </h1>
        </div>
      </div>
      <main className="py-[20px] sm:px-[30px] px-[10px]">
        <div className="max-w-screen-xl w-full grid grid-cols-1 sm:grid-cols-3 gap-[10px] items-start">
          {articles.map((article, index) => (
            <BlogCard article={article} key={article._id} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
