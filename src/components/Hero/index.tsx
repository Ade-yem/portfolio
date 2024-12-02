"use client";
import { TypeAnimation } from "react-type-animation";
import { Picture } from "../ui/myPic";
import { StackCarousel } from "../ui/stackCarousel";
import { useLocalStorage } from "../hooks/localStorage";


export default function Hero() {
  const { theme } = useLocalStorage();
  const color = theme === "dark" ? "#62A92B" : "rgba(6, 64, 43, 1)";
  return (
    <article className="bg-white dark:bg-dark-bg dm-mono-regular w-full min-h-screen md:max-h-screen p-[3em] rounded-md card shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px] p-5">
          <div className="sm:absolute sm:bottom-0">
            <Picture />
          </div>
        </div>
        <div className="flex w-full flex-col justify-stretch p-5">
          <div className="flex flex-col space-y-2 justify-start">
            <div className="flex flex-wrap text-base text-custom-red">
              {"<span>"}
              <TypeAnimation sequence={["Hi, I'm Adeyemi"]} />
              {"</span>"}
            </div>
            <div className="space-y-2">
              <p className="text-black dark:text-[#dee2e6] text-4xl text-wrap">
                <span className="dark:text-custom-green text-deep-green">
                  {"{Full Stack}"}
                </span>{" "}
                Software Engineer
                <span className=" animate-ping duration-[3000]">_</span>
              </p>
              <div className="space-y-2">
                <span className="flex text-base text-custom-red">{"<p>"}</span>
                <p className="text-wrap text-black dark:text-[#dee2e6] ml-4 dm-mono-light-italic">
                  With expertise in cutting-edge technologies such as NodeJS,
                  React, NextJs, and Django... I deliver web solutions that are
                  both innovative and robust.
                </p>
                <span className="flex text-base text-custom-red">{"</p>"}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 h-fit items-end text-black dark:text-[#dee2e6]">
            <StackCarousel maxSize="250px"/>
            <p className="">... and much more</p>
          </div>
          <a
            className="flex space-x-2 h-fit justify-start items-center mt-2"
            role="button"
            href="https://docs.google.com/document/d/1IyTP2koMhvoDpZSHKoaWtNaFmzntZ5gl_pwQvWiBp4Y//export?format=pdf"
            download={"Adeyemi_Adejumo.pdf"}
            target="blank"
          >
            <span>
              <svg
                height={"30px"}
                width={"30px"}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 7L12 14M12 14L15 11M12 14L9 11"
                    stroke={color}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M16 17H12H8"
                    stroke={color}
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                    stroke={color}
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            <span className="dark:text-slate-400 text-slate-800 fdm-mono-regular-italic">
              [ Download my CV ]
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
