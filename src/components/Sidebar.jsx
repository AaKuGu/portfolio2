"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-5 w-full p-2 py-3 "
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Image
          src="/images/heroImage5.png"
          alt="Profile Pic"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
      </motion.div>

      {/* Name */}
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <span className="bg-gradient-to-r from-blue-800 to-green-900 bg-clip-text text-transparent font-kaushan">
          Aadarsh
        </span>
        <span className="bg-gradient-to-r from-blue-800 to-green-900 bg-clip-text text-transparent">
          Gupta
        </span>
      </div>

      {/* Title & Resume */}
      <div className="flex flex-col items-center gap-3 w-full px-4">
        <div className="bg-gray-100 dark:bg-dark-200 w-full py-2 rounded-full text-center text-sm  text-black font-bold">
          Full Stack Web Developer
        </div>
        <a
          href="/pdf/aadarsh-gupta-cv.pdf"
          download
          className="bg-gradient-to-r from-green-700 to-blue-800 hover:scale-[1.1] w-full py-2 rounded-full text-center text-sm font-semibold text-white shadow-md transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-6 text-green-800 text-3xl"
      >
        <a
          href="https://github.com/AaKuGu"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aadarsh-gupta-09a514139/"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <AiFillLinkedin />
        </a>
      </motion.div>

      {/* Address */}
      <div className="w-full bg-gray-100 dark:bg-dark-200 rounded-xl p-4 flex flex-col gap-2 text-sm text-gray-700 shadow-inner">
        <div className="flex items-center gap-2">
          <MdLocationPin className="text-green-500 min-w-[15px] min-h-[15px]" />
          <span>Uttar Pradesh, India</span>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="text-green-500 min-w-[15px] min-h-[15px]" />
          <span>reviewerhiphanviral@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-green-500 min-w-[15px] min-h-[15px]" />
          <span>7388958220</span>
        </div>
      </div>

      {/* Email Me Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:reviewerhiphanviral@gmail.com"
        className="mt-4 w-[200px] py-2 text-center bg-gradient-to-r from-blue-700 to-green-900 text-white font-bold rounded-full shadow-md transition-all duration-300"
      >
        Email Me
      </motion.a>
    </motion.div>
  );
};

export default Sidebar;
