import { FaLaptop, FaChalkboardTeacher, FaHistory } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { GiNetworkBars, GiTeacher } from "react-icons/gi";
import { FaChartLine, FaDatabase } from "react-icons/fa6";

export const services = [
  {
    icons: <FaLaptop />,
    color: "red",
    service: "Bootcamp",
    description:
      "Access interactive classes online from anywhere in the world with engaging, real-time learning experiences.",
  },
  {
    icons: <MdWorkOutline />,
    color: "orange",
    service: "Expert Tutors",
    description:
      "Learn directly from seasoned professionals and subject matter experts who guide you every step of the way.",
  },
  {
    icons: <FaChalkboardTeacher />,
    color: "grey",
    service: "Mentorship",
    description:
      "Receive personalized guidance and career advice from mentors dedicated to your growth and success.",
  },
  {
    icons: <GrCertificate />,
    color: "skyblue",
    service: "Certification",
    description:
      "Earn industry-recognized certificates that validate your skills and boost your professional credibility.",
  },
  {
    icons: <RiUserStarLine />,
    color: "indigo",
    service: "After-Hours Learning",
    description:
      "Gain extended access to learning resources and support, even beyond regular class hours.",
  },
  {
    icons: <FaLaptop />,
    color: "pink",
    service: "Bootcamp",
    description:
      "Intensive, hands-on training programs designed to equip you with practical skills in the shortest time possible.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Data for Impact Bootcamp",
    answer:
      "The Data for Impact Bootcamp is a 4-weeks intensive program designed to empower young women with critical tech skills that can be immediately applied to secure gigs, internships and remote jobs with organizations in development, business, research and advocacy",
  },
  {
    id: 2,
    question: "How do I join",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
  },
  {
    id: 3,
    question: "Can I join for free",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
  },
  {
    id: 4,
    question: "How is the bootcamp held, Virtual or Onsite",
    answer: "The classes are strictly Virtual",
  },
  {
    id: 5,
    question: "When does the next cohort start",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci vel lectus cursus, vel ultrices tortor interdum. ",
  },
];

export const metrics = [
  {
    metric: "6",
    title: "Mentors",
  },
  {
    metric: "20+",
    title: "Mentees",
  },
  {
    metric: "6+",
    title: "Patners and Sponsors",
  },
  {
    metric: "16",
    title: "Graduates",
  },
];

export const coreServices = [
  {
    icons: <GiTeacher />,
    color: "red",
    service: "Capacity Building",
    description:
      "Empowering individuals, organizations, and systems with the knowledge and skills to use data effectively with programs.",
    points: [
      "Data Science Bootcamps",
      "AI for Public Health and Dvelopment Training",
      "Monitoring and Evaluation (M&E) Training Workshops",
      "Data Science Fellowship and Mentorship Programs",
    ],
  },
  {
    icons: <FaChartLine />,
    color: "orange",
    service: "Monitoring, Evaluation & Learning (MEL)",
    description:
      "Designing, implementing, and enhancing M&E systems for evidence-based decision-making.",
    points: [
      "MEL Framework Development",
      "Digital MEL Tool Integration (e.g., DHIS2, Power BI, ODK, Ms Power App)",
      "Evaluation of Digital Tools and AI Systems",
      "Development of Theories of Change and Logical Frameworks",
      "Responsive Feedback mechanism to enhance learning",
    ],
  },
  {
    icons: <FaChalkboardTeacher />,
    color: "yellow",
    service: "Research, Policy & Advocacy Support",
    description:
      "Connecting evidence to action through applied research and policy influence.",
    points: [
      "Operational and Implementation research",
      "Policy Brief Development",
      "Stakeholder ENgagement and Learning Agenda Support",
      "Evidence-to-Action Strategy Development",
      "Peer-reviewed Publication Support e.g., Contributed to a published study on immunizatioon policy in the International Journal of Community Medicine and Public Health",
    ],
  },
  {
    icons: <FaDatabase />,
    color: "green",
    service: "Data Science, AI & Innovation",
    description:
      "Leveraging modern analytics and AI to solve complex data challenges.",
    points: [
      "Predictive Modeling for Health and Livelihoods",
      "Natura Language Processing (NLP) for Text Analysis",
      "AI Evaluation and Responsible USe Frameworks",
      "R-Shiny Dashboards for Immunixation and Surveillance Data",
    ],
  },
  {
    icons: <GiNetworkBars />,
    color: "blue",
    service: "Advanced Analytics & Modelling",
    description:
      "Applying modeling and forecasting to optimize health interventions and resource planning",
    points: [
      "Outbreak Simulation and Vaccine Demand Forecasting",
      "Scenerio Planning and Optimization for Health Campaigns",
      "Geospatial disease Mapping and Hotspot Detection",
      "Health Systems Modeling and Cost-Effectiveness Studies",
      "Gates Foundation -Funded Measles Modeling Project e.g., Member of Bayero University's Measles Modeling Team, Informing immunization programs in Kano and Kaduna State, Nigeria.",
    ],
  },
  {
    icons: <FaHistory />,
    color: "violet",
    service: "Data Storytelling & Strategic Communication",
    description:
      "Translating data into compelling narratives that influence action and funding.",
    points: [
      "Interactive Dashboards",
      "Custom Data Visualizations for Repors and Presentations",
      " Data-Driven Advocacy Tools and Story Maps",
      "Donor Report Automation",
      "Policy-Focused Data Briefs e.g., Translate VPD surbeillance data into visuals for high-level review and action",
    ],
  },
];
