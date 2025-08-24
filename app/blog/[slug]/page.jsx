"use client";

import BlogContent from "@/components/BlogContent";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const page = ({ params }) => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-[20px] py-[20px] lg:px-[150px] sm:px-[100px] px-[20px]">
        <div>
          <button onClick={() => router.back()}>
            <FaArrowLeft />
          </button>
        </div>

        <BlogContent params={params} />
      </div>
    </div>
  );
};

export default page;
