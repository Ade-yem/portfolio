"use client";

import { motion } from "framer-motion";

export const MockTerminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-700 font-mono text-sm leading-relaxed flex flex-col"
    >
      {/* Terminal Header */}
      <div className="bg-[#323232] px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs">adeyemi — bash</div>
      </div>

      {/* Terminal Body */}
      <motion.div 
        className="p-4 space-y-1 flex-1 overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.8, delayChildren: 1 } }
        }}
      >
        <div className="space-y-1">
          {/* First Command Block */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -5 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="flex flex-wrap items-center">
              <span className="text-[#c3e88d] mr-2">adeyemi@portfolio:~$</span>
              <span className="text-white font-bold tracking-tight">cat bio.txt</span>
            </div>
            <motion.div 
              className="text-[#89ddff] mt-1 whitespace-pre-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Full Stack Software Engineer with a passion for Scalable Web Systems & Blockchain Development.{"\n"}
              Engineering robust, AI-driven solutions for modern Web2 and Web3 platforms.
            </motion.div>
          </motion.div>

          {/* Second Command Block */}
          <motion.div
            className="pt-2"
            variants={{
              hidden: { opacity: 0, x: -5 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="flex flex-wrap items-center">
              <span className="text-[#c3e88d] mr-2">adeyemi@portfolio:~$</span>
              <span className="text-white font-bold tracking-tight">ls technologies/</span>
            </div>
            <motion.div 
              className="text-[#89ddff] mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              NodeJS  React  NextJs  Django  Solidity  PostgreSQL
            </motion.div>
          </motion.div>

          {/* Active Prompt with Cursor */}
          <motion.div
            className="pt-2 flex items-center"
            variants={{
              hidden: { opacity: 0, x: -5 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <span className="text-[#c3e88d] mr-2">adeyemi@portfolio:~$</span>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 h-5 bg-gray-400 translate-y-px"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
