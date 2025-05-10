"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
const Home = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen p-4 md:p-10 w-full bg-white">
      {/* Sidebar slide-in from right */}
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="w-full md:w-1/3 lg:w-1/4 bg-white border-[2px] border-dashed p flex flex-col gap-6 h-fit"
      >
        <Sidebar />
      </motion.aside>

      {/* Main content slide-in from right */}
      <motion.main
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 70,
          damping: 20,
        }}
        className="flex-1 flex flex-col gap-6"
      >
        <Navbar />
        <section className="bg-gradient-to-r rounded-2xl shadow-md p-3 flex-1">
          {children}
        </section>
      </motion.main>
    </div>
  );
};

export default Home;
