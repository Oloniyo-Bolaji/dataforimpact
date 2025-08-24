import React from "react";
import { client } from "@/src/sanity/client";
import { getArticles } from "@/src/sanity/queries";
import BlogCard from "@/reusable-components/BlogCard";
import Header from "@/reusable-components/Header";
import NoBlog from "@/components/NoBlog";


const options = { next: { revalidate: 30 } };

const Blog = async () => {
  const articles = await client.fetch(getArticles, {}, options);
  return (
    <div className="">
      <Header heading="Our Blog" />
      <main className="max-w-screen-xl mx-auto py-[20px] sm:px-[30px] px-[20px]">
        {articles.length > 0 ? (
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
