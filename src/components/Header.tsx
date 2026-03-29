"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import ChangeTheme from "./ui/themeChanger";
import { Logo, MenuLinks, SocialLinks } from "./ui/Logo";
import { useOutsideClick } from "./hooks/outsideClick";
import details from "@/services/details.json";

const CloseIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M11 17H19M5 12H19M11 7H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const Burger = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => (
  <button
    onClick={() => setOpened(!opened)}
    className="cursor-pointer"
    aria-label={opened ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={opened}
  >
    <HamburgerIcon />
  </button>
);

const GetInTouch = ({
  getInTouch,
  setGetInTouch,
}: {
  getInTouch: boolean;
  setGetInTouch: Dispatch<SetStateAction<boolean>>;
}) => {
  const getInTouchRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(getInTouchRef, () => setGetInTouch(false));
  return (
    <aside
      className={`bg-custom-white z-10 duration-200 p-4 w-[400px] dark:bg-dark-bg absolute side-bar top-0 left-0 min-h-fit ${
        getInTouch ? "block" : "hidden"
      }`}
      ref={getInTouchRef}
      aria-label="Contact information panel"
    >
      <div className="flex justify-between p-4 border-b border-b-slate-500">
        <Logo />
        <button
          onClick={() => setGetInTouch(false)}
          className="p-2 rounded-full"
          aria-label="Close contact panel"
        >
          <CloseIcon />
        </button>
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
      <address className="not-italic">
        <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
          <p className="font-bold">Email</p>
          <a href={`mailto:${details.email}`} className="hover:underline">{details.email}</a>
        </div>
        <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
          <p className="font-bold">Address</p>
          <p>{details.address}</p>
        </div>
      </address>
      <div className="p-4 block space-y-2 dm-mono-light dark:text-custom-white text-slate-800">
        <p className="font-bold">Socials</p>
        <div className="max-w-[100px] flex justify-start">
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
};

const SideBar = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const openedRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(openedRef, () => setOpened(false));
  return (
    <div
      className={`z-10 duration-200 bg-dark-bg absolute top-0 right-0 h-screen py-4 side-bar w-[300px] rounded-sm shadow-sm ${
        opened ? "block" : "hidden"
      }`}
      ref={openedRef}
    >
      <div className="flex justify-between p-4 border-b border-b-slate-500">
        <Logo />
        <button
          onClick={() => setOpened(false)}
          className="p-2 rounded-full"
          aria-label="Close navigation menu"
        >
          <CloseIcon />
        </button>
      </div>
      <nav aria-label="Mobile navigation" className="flex flex-col py-3 text-lg text-white/60 dm-mono-regular">
        <a href="#resume" className="block border-b border-b-slate-500 py-2 px-4 hover:opacity-70">Resume</a>
        <a href="#services" className="block border-b border-b-slate-500 py-2 px-4 hover:opacity-70">Services</a>
        <a href="#projects" className="block border-b border-b-slate-500 py-2 px-4 hover:opacity-70">Portfolio</a>
        <a href="#contact" className="block border-b border-b-slate-500 py-2 px-4 hover:opacity-70">Contact</a>
      </nav>
    </div>
  );
};

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [getInTouch, setGetInTouch] = useState(false);
  return (
    <header
      className="dark:bg-dark-bg shadow-sm rounded-md bg-custom-blue min-h-fit max-h-24 flex justify-between items-center relative"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-custom-green text-white px-4 py-2 rounded-md z-50 font-bold"
      >
        Skip to main content
      </a>

      <button
        className="p-2 hidden md:flex justify-start h-full w-fit border-r m-0 border-r-slate-500"
        aria-label="Open contact information panel"
        onClick={() => setGetInTouch(!getInTouch)}
      >
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M11 17H19M5 12H19M11 7H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </button>

      <div className="sm:hidden w-full flex justify-between">
        <Logo />
        <Burger opened={opened} setOpened={setOpened} />
      </div>

      <div className="hidden space-x-5 sm:flex justify-around items-center h-fit">
        <Logo />
        <MenuLinks />
        <div className="hidden md:block">
          <SocialLinks />
        </div>
      </div>

      <div className="flex justify-end w-fit">
        <ChangeTheme />
      </div>

      <GetInTouch getInTouch={getInTouch} setGetInTouch={setGetInTouch} />
      <SideBar opened={opened} setOpened={setOpened} />
    </header>
  );
}
