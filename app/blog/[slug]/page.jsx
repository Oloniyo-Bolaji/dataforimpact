import { client } from "@/src/sanity/client";
import { getArticle } from "@/src/sanity/queries";
import { PortableText } from "next-sanity";
import React from "react";


const options = { next: { revalidate: 30 } };

const page = async ({params}) => {
  const { slug } = params; 

  const article = await client.fetch(getArticle, {slug});
  return (
    <div>
      <PortableText></PortableText>
    </div>
  );
};

export default page;
