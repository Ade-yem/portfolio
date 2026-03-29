"use client";
import { TypeAnimation } from "@/components/ui/typingAnimation";
import { Picture } from "../ui/myPic";
import { StackCarousel } from "../ui/stackCarousel";
import { useLocalStorage } from "../hooks/localStorage";
import { Download } from "../icons/download";

export default function Hero() {
  const { theme } = useLocalStorage();
  const color = theme === "dark" ? "#62A92B" : "rgba(6, 64, 43, 1)";
  return (
    <article className="bg-white dark:bg-dark-bg dm-mono-regular w-full min-h-screen md:max-h-screen p-[3em] rounded-md card shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px] base:p-5 p-2">
          <div className="sm:absolute sm:bottom-0">
            <Picture />
          </div>
        </div>
        <div className="flex w-full flex-col justify-stretch base:p-5 p-2">
          <div className="flex flex-col space-y-2 justify-start">
            <div className="flex flex-wrap text-base text-custom-red">
              {"<span>"}
              <TypeAnimation text={"Hi, I'm Adeyemi"} delay={200} />
              {"</span>"}
            </div>
            <div className="space-y-2">
              <p className="text-black dark:text-custom-white text-4xl text-wrap">
                <span className="dark:text-custom-green text-deep-green">
                  {"{Full Stack}"}
                </span>{" "}
                Software Engineer
                <span className=" animate-ping duration-[3000]">_</span>
              </p>
              <div className="space-y-2">
                <span className="flex text-base text-custom-red">{"<p>"}</span>
                <p className="text-wrap text-black dark:text-custom-white ml-4 dm-mono-light-italic">
                  With expertise in cutting-edge technologies such as NodeJS,
                  React, NextJs, and Django... I deliver web solutions that are
                  both innovative and robust.
                </p>
                <span className="flex text-base text-custom-red">{"</p>"}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 mt-4 h-fit items-end text-black dark:text-custom-white">
            <StackCarousel maxSize="250px" />
            <p className="">... and much more</p>
          </div>
          <a
            className="flex space-x-2 h-fit justify-start items-center mt-2"
            role="button"
            href="https://docs.google.com/document/d/1IyTP2koMhvoDpZSHKoaWtNaFmzntZ5gl_pwQvWiBp4Y//export?format=pdf"
            download={"Adeyemi_Adejumo.pdf"}
            target="blank"
          >
            <Download color={color} />
            <span className="dark:text-slate-400 text-slate-800 fdm-mono-regular-italic">
              [ Download my CV ]
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
