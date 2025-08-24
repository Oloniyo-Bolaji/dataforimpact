import Image from "next/image";
import React from "react";
import MentorCard from "@/reusable-components/MentorCard";
import { getMentors } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";

const options = { next: { revalidate: 30 } };

const Mentor = async () => {
  const mentors = await client.fetch(getMentors, {}, options);
  console.log(mentors)
  return (
    <div id="mentors" className="max-w-screen-xl mx-auto">
      <h3 className="headings">Meet The Mentors</h3>
      <p className="text-center sm:text-[15px] text-[13px] text-[#7a7a7a] font-normal leading-[22px] sm:max-w-[500px] mx-auto">
        Our Proactive Mentors who are industry leaders passionate about guiding
        the next generation of data innovators
      </p>
      <main
        className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] px-[50px] my-[20px]"
      >
        {mentors.map((mentor) => {
          return <MentorCard key={mentor._id} mentor={mentor} />;
        })}
      </main>
    </div>
  );
};

export default Mentor;
