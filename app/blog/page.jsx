import React from "react";
import { client } from "@/src/sanity/client";
import { getArticles } from "@/src/sanity/queries";
import BlogCard from "@/reusable-components/BlogCard";
import { Montserrat } from "next/font/google";
import Header from "@/reusable-components/Header";
import NoBlog from "@/components/NoBlog";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const options = { next: { revalidate: 30 } };

const Blog = async () => {
  const articles = await client.fetch(getArticles, {}, options);
  return (
    <div className="">
      <Header heading="Our Blog" />
      <main className="max-w-screen-xl mx-auto py-[20px] sm:px-[30px] px-[10px]">
        {articles.length < 0 ? (
          <div className=" w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] items-start">
            {articles.map((article, index) => (
              <BlogCard article={article} key={article._id} index={index} />
            ))}
          </div>
        ) : (
          <NoBlog />
        )}
      </main>
    </div>
  );
};

export default Blog;
