"use client";

import { useState } from "react";
import { Project, ProjectLinks, CaseStudyButton } from "./Works";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function ProjectsCarousel({ projectList }: { projectList: Project[] }) {
  const [viewMode, setViewMode] = useState<"carousel" | "scroll">("scroll");
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    if (index >= projectList.length - 1) setIndex(0);
    else setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index === 0) setIndex(projectList.length - 1);
    else setIndex((prev) => prev - 1);
  };

  return (
    <div className="w-full text-slate-900 dark:text-slate-100">
      <div className="flex justify-end mb-8 space-x-3">
        <button
          onClick={() => setViewMode("scroll")}
          className={`px-5 py-2 text-sm font-bold tracking-wide rounded-md transition-all ${
            viewMode === "scroll"
              ? "bg-custom-green text-white shadow-md scale-105"
              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          Story View
        </button>
        <button
          onClick={() => setViewMode("carousel")}
          className={`px-5 py-2 text-sm font-bold tracking-wide rounded-md transition-all ${
            viewMode === "carousel"
              ? "bg-custom-green text-white shadow-md scale-105"
              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          Carousel View
        </button>
      </div>

      <div className="w-full transition-opacity duration-500 ease-in-out">
        {viewMode === "carousel" ? (
          <div>
            <Project 
              project={projectList[index]} 
              next={next} 
              prev={prev} 
            />
          </div>
        ) : (
          <ProjectsScrollStory projectList={projectList} />
        )}
      </div>
    </div>
  );
}

function ProjectsScrollStory({ projectList }: { projectList: Project[] }) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full flex flex-col pt-4">
      {/* Global Progress Indicator */}
      <div className="sticky top-[10vh] left-0 w-full h-1.5 bg-slate-200 dark:bg-slate-800 z-50 rounded-full overflow-hidden mb-8 md:mb-16">
        <motion.div 
          className="h-full bg-custom-green origin-left" 
          style={{ scaleX: scrollYProgress }} 
        />
      </div>

      {projectList.map((project, i) => (
        <StorySection key={i} project={project} index={i} />
      ))}
    </div>
  );
}

function StorySection({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`min-h-[90vh] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-12 lg:gap-20 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/50 last:border-0 relative`}
    >
      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 z-10">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-custom-green font-black tracking-widest uppercase text-sm mb-4 block">
            Chapter 0{index + 1}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 dark:text-white leading-tight">
            {project.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          {project.problem && (
            <div className="mb-5 bg-custom-red/10 dark:bg-custom-red/5 border-l-4 border-custom-red p-4 rounded-r-lg">
              <h4 className="font-bold text-custom-red dark:text-red-400 uppercase tracking-widest text-xs mb-2">The Problem</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="mb-8 bg-custom-green/10 dark:bg-custom-green/5 border-l-4 border-custom-green p-4 rounded-r-lg">
              <h4 className="font-bold text-custom-green uppercase tracking-widest text-xs mb-2">The Solution</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.split(',').map((tech, i) => (
              <span key={i} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-xs rounded-full dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                {tech.trim()}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <CaseStudyButton project={project} />
            <ProjectLinks project={project} />
          </div>
        </motion.div>
      </div>

      {/* Visual Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, rotate: isEven ? 2 : -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 relative h-[50vh] min-h-[400px] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 group"
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-700" />
      </motion.div>
    </motion.div>
  );
}