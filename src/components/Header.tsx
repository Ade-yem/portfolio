"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import ChangeTheme from "./ui/themeChanger";
import { Logo, MenuLinks, SocialLinks } from "./ui/Logo";
import { useOutsideClick } from "./hooks/outsideClick";
import details from "@/services/details.json"


const Burger = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div onClick={() => setOpened(!opened)} className="cursor-pointer">
      {!opened ? (
        <svg
          width="40px"
          height="40px"
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
            <g id="Menu / Menu_Alt_02">
              {" "}
              <path
                id="Vector"
                d="M11 17H19M5 12H19M11 7H19"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ) : (
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Menu_Alt_02">
              {" "}
              <path
                id="Vector"
                d="M11 17H19M5 12H19M11 7H19"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      )}
    </div>
  );
};

const GetInTouch = ({
  getInTouch,
  setGetInTouch,
}: {
  getInTouch: boolean;
  setGetInTouch: Dispatch<SetStateAction<boolean>>;
}) => {
  const getInTouchRef = useRef<HTMLDivElement>(null);
  useOutsideClick(getInTouchRef, () => setGetInTouch(false));
  return (
    <div
      className={`bg-custom-white z-10 duration-200 p-4 w-[400px] dark:bg-dark-bg absolute side-bar top-0 left-0 min-h-fit ${
        getInTouch ? "block" : "hidden"
      }`}
      ref={getInTouchRef}
    >
      <div className="flex justify-between p-4 border-b border-b-slate-500 ">
        <Logo />
        <div onClick={() => setGetInTouch(false)} className="p-2 rounded-full">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-start text-black dark:text-white space-x-3 dm-mono-regular">
        <h2 className="dm-mono-medium text-2xl border-b border-b-slate-600 p-4">
          Get In Touch
        </h2>
        <p className="dm-mono-regular-italic leading-8 p-4 text-wrap">
          I&apos;m always excited to take on new projects and collaborate with
          innovative minds. 
        </p>
      </div>
      <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
        <p>Phone Number</p>
        <p>{details.phone}</p>
      </div>
      <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
        <p>Phone Number</p>
        <p>{details.phone}</p>
      </div>
      <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
        <p>Email</p>
        <p>{details.email}</p>
      </div>
      <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
        <p>Address</p>
        <p>{details.address}</p>
      </div>
      <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
        <p>Socials</p>
        <p className="max-w-[100px] flex justify-start">
          <SocialLinks/>
        </p>
      </div>
    </div>
  );
};
const SideBar = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const openedRef = useRef<HTMLDivElement>(null);
  useOutsideClick(openedRef, () => setOpened(false));
  return (
    <div
      className={`z-10 duration-200 bg-dark-bg absolute top-0 right-0 h-screen py-4 side-bar rounded-sm shadow-sm ${
        opened ? "block" : "hidden"
      }`}
      ref={openedRef}
    >
      <div className="flex justify-between p-4 border-b border-b-slate-500 ">
        <Logo />
        <div onClick={() => setOpened(false)} className="p-2 rounded-full">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-start py-3 text-lg text-white/60 space-x-3 dm-mono-regular">
        <a href="#about" className="border-b border-b-slate-500 py-2 px-4 hover:opacity-70">
          About me
        </a>
        <a href="#projects" className="border-b border-b-slate-500 py-2 px-4 hover:opacity-70" >Resume</a>
        <a href="#services" className="border-b border-b-slate-500 py-2 px-4 hover:opacity-70" >Services</a>
        <a href="#portfolio" className="border-b border-b-slate-500 py-2 px-4 hover:opacity-70" >Portfolio</a>
        <a href="#contact" className="border-b border-b-slate-500 py-2 px-4 hover:opacity-70" >Contact</a>
      </div>
    </div>
  );
};

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [getInTouch, setGetInTouch] = useState(false);
  return (
    <div className="dark:bg-dark-bg shadow-sm rounded-md bg-custom-blue min-h-fit max-h-24 flex justify-between items-center relative">
      <div
        className="p-2 hidden md:flex justify-start h-full w-fit border-r m-0 border-r-slate-500"
        role="button"
        onClick={() => setGetInTouch(!getInTouch)}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Menu_Alt_02">
              {" "}
              <path
                id="Vector"
                d="M11 17H19M5 12H19M11 7H19"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <div className="sm:hidden w-full flex justify-between">
        <Logo />
        <Burger opened={opened} setOpened={setOpened} />
      </div>
      <div className="hidden space-x-5 sm:flex justify-around items-center h-fit">
        <Logo />
        <MenuLinks />
        <div className="hidden md:block">
          <SocialLinks/>
        </div>
      </div>
      <div className="flex justify-end w-fit">
        <ChangeTheme />
      </div>
      <GetInTouch getInTouch={getInTouch} setGetInTouch={setGetInTouch} />
      <SideBar opened={opened} setOpened={setOpened} />
    </div>
  );
}
