"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Sample Project Data
export const projects = [
  {
    id: "cla",
    name: "Course Launcher App",
    description:
      "This is a WebApp which helps people launch their course pages online as their own personal site. User can add custom domain, and connect their favourite email autoresponder etc",
    image_path: "/images/courseLauncherAppImage.webp",
    deployed_url: "",
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
  // {
  //   id: "wba",
  //   name: "Website Builder App",
  //   description:
  //     "This project is mainly focused on Framer-Motion library (A library that creates beautiful animations for our application). Just the React JS was enough to create such a thing.",
  //   image_path: "/images/courseLauncherAppImage.webp",
  //   deployed_url: "https://pizzajoint-eight.vercel.app/",
  //   github_url: "https://github.com/AaKuGu/pizzajoint",
  //   category: ["react"],
  //   key_techs: ["React", "TailwindCss", "Framer Motion"],
  // },
  {
    id: "sp",
    name: "My Course Launcher App (My Productify)",
    description:
      "This is the sales page for my Course Page Launcher app. High Converting Sales page made using Next js (SSG) feature for quick loading",
    image_path: "/images/salesPage.png",
    deployed_url: "https://pizzajoint-eight.vercel.app/",
    github_url: "https://github.com/AaKuGu/pizzajoint",
    category: ["react"],
    key_techs: [
      "Next Js",
      "Zustand",
      "Third Party Libraries",
      "TailwindCss",
      "Framer Motion",
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
        <h5 className="my-3 text-3xl font-bold text-center text-blue-600">
          Projects
        </h5>

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
              <img
                src={project.image_path}
                alt={project.name}
                className="w-full h-48 object-cover"
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
                  <Link href={`/projects/${project.id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                      Learn More
                    </button>
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
