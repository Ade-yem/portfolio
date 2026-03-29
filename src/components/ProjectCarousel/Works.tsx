import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  client: string;
  technologies: string;
  liveLink: string;
  github?: string;
  image: string;
  problem: string;
  solution: string;
  architecture: string;
}

interface ProjectProps {
  project: Project;
  next: () => void;
  prev: () => void;
}

export function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center space-x-2 px-6 py-3 border-b-2 border-slate-800 dark:border-custom-white dark:text-custom-white font-bold transition-all hover:bg-slate-900/5 dark:hover:bg-white/5"
        >
          <span>Live Demo</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 justify-center items-center px-6 py-3 dark:text-custom-white border-b-2 border-slate-800 dark:border-custom-white font-bold transition-all hover:bg-slate-900/5 dark:hover:bg-white/5"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
          </svg>
          <span>GitHub</span>
        </a>
      )}
    </div>
  );
}

export function CaseStudyButton({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
      >
        <span>View Case Study</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800"
          >
            <div className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-black dark:text-white uppercase tracking-tight">{project.title} Case Study</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 space-y-12">
              <section>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-8 h-1 bg-custom-red rounded-full" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-custom-red">The Problem</h4>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed bg-custom-red/5 p-6 rounded-2xl border border-custom-red/10">
                  {project.problem || "Information details for this project's problem statement are coming soon."}
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-8 h-1 bg-custom-green rounded-full" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-custom-green">The Solution</h4>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed bg-custom-green/5 p-6 rounded-2xl border border-custom-green/10">
                  {project.solution || "Technical solution architecture and implementation details for this project are currently being documented."}
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-8 h-1 bg-custom-blue rounded-full" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-custom-blue">Architecture</h4>
                </div>
                <div className="bg-custom-blue/5 p-6 rounded-2xl border border-custom-blue/10">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    {project.architecture || "Stack overview and architecture diagrams for this deployment are currently being finalized."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold dark:text-white uppercase tracking-tighter">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export const Project: React.FC<ProjectProps> = ({ project, next, prev }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-8 tracking-wide">
      <div className="relative h-[300px] md:h-full w-full overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <Image
          fill
          className="object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="flex flex-col space-y-6">
        <div>
          <h2 className="text-3xl font-black md:text-4xl dark:text-white mb-2">{project.title}</h2>
          <p className="dm-mono-light-italic dark:text-slate-300 text-lg">
            {project.description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-y border-slate-200 dark:border-slate-800 flex justify-between py-3">
            <p className="dark:text-white font-bold text-custom-green">Client</p>
            <p className="dark:text-custom-white">{project.client}</p>
          </div>
          <div className="border-b border-slate-200 dark:border-slate-800 flex justify-between pb-3">
            <p className="dark:text-white font-bold text-custom-green">Stack</p>
            <p className="dark:text-custom-white text-right max-w-[200px]">{project.technologies}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            {/* <CaseStudyButton project={project} /> */}
            <ProjectLinks project={project} />
          </div>

          <div className="flex space-x-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              className="rounded-full flex items-center justify-center size-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-custom-green hover:text-white transition-all shadow-sm"
              onClick={() => prev()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="rounded-full flex items-center justify-center size-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-custom-green hover:text-white transition-all shadow-sm"
              onClick={() => next()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

