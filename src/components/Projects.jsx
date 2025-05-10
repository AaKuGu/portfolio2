"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    id: "cla",
    name: "Course Launcher App (My Productify)",
    description:
      "This is a WebApp which helps people launch their course pages online as their own personal site. User can add custom domain, and connect their favourite email autoresponder etc",
    image_path: "/images/courseLauncherAppImage.webp",
    deployed_url: "https://myproductify.site",
    github_url: "",
    category: ["fullStack", "react"],
    key_techs: [
      "Next Js",
      "React Js",
      "Express Js",
      "TailwindCss",
      "MongoDB",
      "Zustand",
    ],
  },
  {
    id: "sp",
    name: "Sales Page (My Productify)",
    description:
      "This is the sales page for my Course Page Launcher app. High Converting Sales page made using Next js (SSG) feature for quick loading",
    image_path: "/images/salesPage.png",
    deployed_url: "https://live.myproductify.site/",
    github_url: "https://github.com/AaKuGu/myproductifySalespage",
    category: ["react"],
    key_techs: [
      "Next Js",
      "Zustand",
      "Third Party Libraries",
      "TailwindCss",
      "Framer Motion",
    ],
  },
  {
    id: "wba",
    name: "Website Builder App",
    description:
      "A no-code Website Builder App that lets users create responsive, professional websites with drag-and-drop ease. Designed to save time, cut costs, and empower anyone — from entrepreneurs to small businesses — to launch a stunning online presence effortlessly.",
    image_path: "/images/wba.jpg",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    key_techs: [
      "Next Js",
      "React Js",
      "Express Js",
      "TailwindCss",
      "NextAuth",
      "MongoDB",
      "Zustand",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <div className="" id="projects">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
       

        {/* Projects Cards */}
        <div className="flex items-center justify-start gap-3 flex-wrap">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="max-w-sm rounded-lg shadow-lg bg-white dark:bg-dark-300 overflow-hidden"
              id={project.id}
            >
              <Image
                width={400}
                height={250}
                src={project.image_path}
                alt={project.name}
                className=" object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold text-gray-800 ">
                  {project.name}
                </h5>
                <p className="text-sm text-gray-600  mt-2">
                  {project.description}
                </p>
                <div className="flex items-center mt-4 gap-2 flex-wrap">
                  {project.key_techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-sm px-2 py-1 rounded-full text-gray-700 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                  >
                    Get More Info
                  </Link>
                  {project.deployed_url && (
                    <a
                      href={project.deployed_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
