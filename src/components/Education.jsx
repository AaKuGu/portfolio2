"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <div className="py-2">
      {/* Education Section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-12"
      >
        <h5 className="my-3 text-3xl font-bold text-center text-blue-600">
          Education
        </h5>

        <div className="mb-8">
          <h5 className="text-xl font-semibold text-green-600">
            Bachelor of Technology (Hons.) - Computer Science Engineering
          </h5>
          <p className="font-semibold text-gray-300">
            Lovely Professional University | 2020 - 2024
          </p>
          <p className="mt-2 text-gray-500">
            Successfully completed B.Tech (Hons.) in Computer Science
            Engineering with a strong foundation in Full Stack Web Development
            (MERN stack, Next.js) and modern web technologies.
          </p>
          <p>7.1 CGPA</p>
        </div>

        <div className="mb-8">
          <h5 className="text-xl font-semibold text-green-600">
            Senior Secondary (Class 12th) - Science Stream
          </h5>
          <p className="font-semibold text-gray-300">
            Sunbeam School | 2018 - 2020
          </p>
          <p className="mt-2 text-gray-500">
            Completed Higher Secondary Education with Physics, Chemistry, and
            Mathematics as major subjects, achieving a strong academic record
            and building analytical and problem-solving skills essential for
            engineering.
          </p>
          <p>8 CGPA</p>
        </div>

       
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 text-3xl font-bold text-center text-blue-600">
          Experience
        </h5>

        <div className="mb-8">
          <h5 className="text-xl font-semibold text-green-600">
            Full Stack Developer (Personal Projects)
          </h5>
          <p className="font-semibold text-gray-300">August 2022 – Present</p>
          <p className="mt-2 text-gray-500">
            Developed multiple Full Stack applications utilizing the MERN stack
            and Next.js. Built major projects like a Course Launching Platform
            and a Website Builder App, integrating advanced features like
            drag-and-drop UI, email automation, payment gateways, and dynamic
            template systems. Passionate about building scalable, user-friendly
            applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
