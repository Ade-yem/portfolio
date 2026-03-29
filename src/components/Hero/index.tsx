"use client";
import { TypeAnimation } from "@/components/ui/typingAnimation";
import { MockTerminal } from "../ui/MockTerminal";
import { StackCarousel } from "../ui/stackCarousel";
import { useLocalStorage } from "../hooks/localStorage";
import { Download } from "../icons/download";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const { theme } = useLocalStorage();
  const color = theme === "dark" ? "#62A92B" : "rgba(6, 64, 43, 1)";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <article className="bg-white dark:bg-dark-bg dm-mono-regular w-full min-h-screen p-6 md:p-[3em] rounded-md card shadow-sm overflow-hidden flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Side: Mock Terminal */}
        <div className="flex h-full items-center justify-center p-2 order-2 md:order-1">
          <MockTerminal />
        </div>

        {/* Right Side: Identity-as-Code content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col justify-center p-2 order-1 md:order-2 space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex flex-wrap text-base text-custom-red dm-mono-regular dark:text-custom-orange">
               <span className="opacity-70">{"<"}</span>
               <span className="mx-1">{"Identity"}</span>
               <span className="opacity-70">{">"}</span>
            </div>
            
            <h1 className="text-black dark:text-custom-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="dark:text-custom-green text-deep-green block">
                Adeyemi Adejumo
              </span>
              <span className="text-xl md:text-2xl lg:text-3xl block mt-2 opacity-90">
                <TypeAnimation text={"Scalable Web Systems & Blockchain Development"} delay={80} />
              </span>
            </h1>

            <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
              <div className="flex items-center dark:text-custom-orange dm-mono-regular text-custom-red italic opacity-60">{"// Mission"}</div>
              <p className="text-xl text-black dark:text-custom-white dm-mono-light-italic leading-relaxed border-l-2 border-custom-green pl-4">
                Engineering robust, AI-driven solutions for modern Web2 and Web3 platforms.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <div className="flex space-x-2 h-fit items-center text-black dark:text-custom-white">
              <StackCarousel maxSize="300px" />
              <p className="text-xs opacity-60">Tech Stack</p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="bg-deep-green dark:bg-custom-green text-white dark:text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center space-x-2"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                className="flex space-x-2 h-fit justify-start items-center border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                role="button"
                href="/Adeyemi_Adejumo_CV.pdf"
                download={"Adeyemi_Adejumo_CV.pdf"}
                target="_blank"
              >
                <Download color={color} />
                <span className="dark:text-slate-400 text-slate-800 text-sm">
                  [ Download CV ]
                </span>
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-custom-red dm-mono-regular dark:text-custom-orange opacity-70 italic text-sm">
             {"</Identity>"}
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}
