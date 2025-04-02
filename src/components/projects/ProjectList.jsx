"use client";
import { privateProjectsData, professionalProjectsData } from "@/app/config";
import { motion } from "framer-motion";
import ProjectListLayout from "./ProjectListLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: .51,
    },
  },
};

const ProjectList = () => {
  return (
  <>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h1 className="pb-16 text-5xl text-accent">Projects</h1>
    </motion.div>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {professionalProjectsData.map((project, index) => {
        return <ProjectListLayout key={index} {...project} />;
      })}
      {privateProjectsData.map((project, index) => {
        return <ProjectListLayout key={index} {...project} />;
      })}
    </motion.div>
    </>
  );
};

export default ProjectList;
