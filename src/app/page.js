"use client";

import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col gap-8 p-3 md:p-10 w-full h-full text-white ">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white  mb-3">
          About Me
        </h1>
        <p className="text-gray-600  text-sm md:text-lg max-w-2xl mx-auto">
          A glimpse into my journey, skills, and passion for technology!
        </p>
      </motion.div>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white dark:bg-dark-200 rounded-xl shadow-lg p-3 md:p-10 max-w-3xl mx-auto flex flex-col items-center gap-6 text-center"
      >
        {/* Icon */}
        <div className="text-green-500 text-5xl">
          <FaUserAstronaut />
        </div>

        {/* Bio Text */}
        <p className="text-gray-700  leading-relaxed text-sm md:text-base">
          I'm a <b className="text-green-500">Full Stack Developer</b> driven by
          a deep passion for coding and innovation. Skilled in{" "}
          <b className="text-green-500">MERN stack</b> and{" "}
          <b className="text-green-500">Next.js</b>, I specialize in building
          modern, scalable web applications. I love creating products that not
          only work seamlessly but also provide amazing user experiences. Always
          excited to embrace new challenges and technologies!
        </p>

        <p className="text-gray-700  leading-relaxed text-sm md:text-base">
          I recently developed a{" "}
          <span className="italic font-bold text-red-500">
            Course Launcher App
          </span>{" "}
          and am currently crafting a{" "}
          <span className="italic font-bold text-red-500">
            Website Builder App
          </span>{" "}
          with{" "}
          <span className="italic font-bold text-red-500">
            drag-and-drop design
          </span>
          ,{" "}
          <span className="italic font-bold text-red-500">
            email automation
          </span>
          ,{" "}
          <span className="italic font-bold text-red-500">
            payment gateway integration
          </span>
          , and more!
        </p>

        {/* Fun fact or Quote */}
        <div className="pt-4">
          <p className="italic text-gray-500  text-sm">
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
