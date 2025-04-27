"use client";

import { motion } from "framer-motion";
import { AiOutlineRobot } from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

// Custom Zustand Icon (can be replaced with an SVG or image if you have one)
const ZustandIcon = () => (
  <div className="text-4xl text-green-500">
    <span>Z</span>
  </div>
);

const ChatGptIcon = () => {
  return (
    <div className="text-4xl text-green-500">
      <img src="/icons/chatgptIcon.webp" alt="chatgpt icon" width={40} height={40} />
    </div>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black " />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 " />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Zustand", icon: <ZustandIcon /> }, // Custom Zustand Icon
  { name: "ChatGPT", icon: <ChatGptIcon className="text-purple-600" /> }, // ChatGPT Icon
];

const Skills = () => {
  return (
    <div className="">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="  text-3xl font-bold text-center text-blue-600">
          Skills
        </h5>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-gray-100 dark:bg-dark-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
            >
              <div className={`${``} text-4xl mb-4 `}>{skill.icon}</div>
              <p className="text-center text-sm font-medium text-gray-700 ">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
