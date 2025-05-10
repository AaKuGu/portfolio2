"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { label: "About Me", icon: <FaUser />, path: "/" },
  { label: "Education", icon: <FaGraduationCap />, path: "/education" },
  { label: "Skills", icon: <FaTools />, path: "/skills" },
  { label: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
  { label: "Contact", icon: <FaEnvelope />, path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname(); // track current route path

  return (
    <nav className="w-full flex justify-center">
      <ul className="flex flex-row gap-4 md:gap-8 bg-gray-100 dark:bg-dark-200 rounded-full py-3 px-6 shadow-md">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <Link key={index} href={item.path}>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-700 to-green-900 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-300"
                }`}
              >
                {/* For mobile, show only the icon and hide the label */}
                <span className="text-lg">{item.icon}</span>
                <span className="hidden md:inline-block ml-2">
                  {item.label}
                </span>
              </motion.li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
