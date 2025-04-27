"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
const data = [
  {
    id: "cla",
    label: "Course Launcher App (My Productify)",
    demoVideoUrl: "https://www.youtube.com/embed/6GEaOwd7ckw",
    proofVideoUrl: "https://www.youtube.com/embed/proof_video_id_for_cla",
    description:
      "The Course Launcher App is the ultimate solution for anyone looking to create and sell online courses without the need for coding skills. Whether you're an entrepreneur, educator, or content creator, this app provides you with everything you need to launch your online course effortlessly. With our pre-designed templates and powerful features, you can go from idea to launch in no time.",
  },
  {
    id: "sp",
    label: "Sales Page (My Productify)",
    demoVideoUrl: "https://www.youtube.com/embed/demo_video_id_for_sp",
    proofVideoUrl: "https://www.youtube.com/embed/proof_video_id_for_sp",
    description:
      "This Sales Page builder enables users to create stunning, high-converting sales pages quickly, solving the problem of expensive landing page tools.",
  },
  {
    id: "wba",
    label: "Website Builder App",
    demoVideoUrl: "https://www.youtube.com/embed/demo_video_id_for_sp",
    proofVideoUrl: "https://www.youtube.com/embed/proof_video_id_for_sp",
    description:
      "The Website Builder App empowers users to effortlessly create stunning, responsive websites without writing a single line of code. With a drag-and-drop interface, pre-designed templates, and powerful customization options, it eliminates the complexity of traditional web development. This app solves the real-world problem of expensive and time-consuming website creation, making it accessible for entrepreneurs, freelancers, and small businesses to establish their online presence quickly and affordably. Designed with user experience in mind, it bridges the gap between technical expertise and creative vision.",
  },
];

const ProjectDetails = ({ params }) => {
  const { project_id } = params;
  const router = useRouter();

  const project = data.find((item) => item.id === project_id);

  if (!project) {
    return (
      <div className="p-8 text-center text-red-500">Project not found!</div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      {/* Proof Video */}
      <div className="aspect-w-16 aspect-h-9">
        <h2 className="text-2xl font-semibold mb-4">
          Here is the proof, that i have created this project
        </h2>
        <iframe
          src={project.proofVideoUrl}
          title="Proof of Creation Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 md:h-[500px] rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Project Title */}
      <h1 className="text-xl md:text-3xl font-bold text-center">
        {project.label} Demo
      </h1>

      {/* Demo Video */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={project.demoVideoUrl}
          title="Project Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 md:h-[500px] rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Project Description */}
      <div className="bg-white dark:bg-dark-300 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          How This Project Solves a Real Problem
        </h2>
        <p className="text-gray-700 italic leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <Link
          href={`/projects`}
          onClick={() => router.back()}
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white px-4 py-1 rounded-sm shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-3"
        >
          <IoMdArrowRoundBack />
          Back
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
