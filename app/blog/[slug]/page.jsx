import BlogContent from "@/components/BlogContent";
import BackButton from "@/reusable-components/BackButton";

const page = ({ params }) => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-[20px] py-[20px] lg:px-[150px] sm:px-[100px] px-[20px]">
        <BackButton />

        <BlogContent params={params} />
      </div>
    </div>
  );
};

export default page;
