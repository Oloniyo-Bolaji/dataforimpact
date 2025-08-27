import React from "react";
import GraduatesCard from "@/reusable-components/GraduatesCard";
import { getGraduates } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";

const options = { next: { revalidate: 30 } };

const Graduates = async () => {
  const graduates = await client.fetch(getGraduates, {}, options);

  return (
    <div className="max-w-screen-xl mx-auto pt-[10px]">
      <h4 className="headings"> Meet Some of our alumni</h4>
      <p className="text-center sm:text-[15px] text-[13px] text-[#7a7a7a] font-normal leading-[22px] sm:max-w-[500px] mx-auto">
        Some of the amazing people who have been mentored by us
      </p>
      <div className="py-[10px]">
        <GraduatesCard graduates={graduates} />
      </div>
    </div>
  );
};

export default Graduates;
