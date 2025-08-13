"use client";

import Image from "next/image";
import React from "react";

const Mentor = () => {
  const mentors = [
    {
      id: 1,
      name: "Clara Oguji",
      profile:
        "Clara Oguji is a Public Health Strategist with a proven track record in transforming complex health data into actionable strategies. With expertise in monitoring and evaluation, digital health innovation, and international development, she has led multi-million-dollar initiatives in collaboration with global agencies and governments. Clara is focused on building resilient health systems, and achieving sustainable outcomes. Known for her ability to drive collaboration and innovation, Clara emphasizes transparency and accountability in her work. She is committed to improving access to care and creating meaningful change in underserved communities, shaping a future of data-driven and resilient health systems worldwide.",
      image: "",
      x: "",
      linkedIn: "",
    },
    {
      id: 2,
      name: "Dr. Tope Gloria Olatunde-Aiyedun",
      profile:
        "Dr. Tope Gloria Olatunde-Aiyedun is a dynamic educator, researcher, and digital transformation advocate with a strong passion for equipping young people with 21st-century tech skills. She holds a B.Sc. (Ed) in Environmental Science, as well as a Master's and PhD in Science Education. She currently lectures at Confluence University of Science and Technology (CUSTECH), Osara, Kogi State, Nigeria. Her work focuses on the integration of artificial intelligence and emerging technologies in teaching, research, and leadership development. With over 50 academic publications, Dr. OlatundeAiyedun is committed to simplifying academic workflows and empowering youth to thrive in a digital world. She has facilitated several national trainings on the use of Al for research, data analysis, teaching, presentation, and content creation, helping young professionals and academics harness technology for growth and impact.",
      image: "",
      x: "",
      linkedIn: "",
    },
    {
      id: 3,
      name: "Rani Okhomina",
      profile:
        "Rani Okhomina is an experienced Organizational Development practitioner and a qualified Organizational Psychologist with over 12 years of experience in leadership development, cultural transformation, and inclusive talent strategies. She holds a master's degree in Organizational Psychology & Business from a Russel Group University in the United Kingdom, the University of Leeds, is a certified Occupational Test User in Ability and Personality by the British Psychological Society and also a certified European Test User in Work and Organizational Assessment by the European Federation of Psychologists Associations. Her work focuses on helping individuals and organizations grow through evidence-based development approaches, mentoring, and coaching. She is passionate about empowering others and is dedicated to paying it forward by supporting emerging talent.",
      image: "",
      x: "",
      linkedIn: "",
    },
    {
      id: 5,
      name: "Stella Idogho",
      profile:
        "Stella Idogho is a dynamic HR professional with 10+ years of experience delivering strategic HR solutions across industries. She holds a B.Sc. in Economics , postgraduate diplomas in HR and International Business Management, and is a Registered Professional Recruiter (RPR). A member of HRPA and APRC, she also serves on the board of a licensed child care center and leads Career & Coaching initiatives at HR Leaders in Canada (HRLC).As a HR Manager for a First Nation community, Stella specializes in change management, Recruitment, compensation& Benefits, talent acquisition, employee relations, learning and development, total rewards, policy development, and DEIB. She is passionate about aligning HR strategy with business goals and mentoring future leaders to build inclusive, high-performing workplaces.",
      image: "",
      x: "",
      linkedIn: "",
    },
    {
      id: 6,
      name: "Favour Anyanwu",
      profile:
        "Favour Anyanwu is a mission-driven Programs Manager with years of experience designing, managing, and scaling social impact projects across tech, public health, and gender equality. She is adept at using data to inform decisions and digital tools to enhance operational efficiency. Passionate	about	inclusion,	youth	empowerment,	and	building programs that move the needle for underserved communities.",
      image: "",
      x: "",
      linkedIn: "",
    },
    {
      id: 7,
      name: "Emmanuel Odewole",
      profile:
        "Emmanuel Odewole is an experienced researcher and data analyst. He has contributed to several published medical and academic research project at Babcock University Teaching Hospital. He is a Caladium Strategy Skills Academy alumnus, trained in business research and analysis, strategy frameworks and documentation, process documentation and mapping, business planning, and market studies. He also freelances as a data/statistical analyst. Emmanuel is skilled in Excel, SOL, Power Bl. and SPSS. He holds certifications from Google, Microsoft, ALX Africa, and others in HR, Project Management, HSE, and Customer Service & Relationship Management. He enjoys reading, chess, podcasts, and telling stories with data.",
      image: "",
      x: "",
      linkedIn: "",
    },
  ];

  return (
    <div>
      <h3 className="text-center text-[30px] text-[#00274d] my-[10px]">
        Meet Our Mentors
      </h3>
      <main className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] px-[50px]">
        {mentors.map((mentor) => {
          return (
            <div className="flex flex-col rounded-full justify-center items-center">
              <div>
                <Image
                  src="/image1.jpg"
                  alt="profile pic"
                  width={100}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4>{mentor.name}</h4>
                <div>
                  <button>
                    <a href="/">X</a>
                  </button>
                  <button>
                    <a href="/">In</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Mentor;
