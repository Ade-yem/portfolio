import React from "react";
import { cn } from "@/services/utils";

export const WebsiteDevelopment = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={cn(
        "stroke-1 stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green",
        className,
      )}
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      width="40px"
      height="40px"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect
          x="3"
          y="5"
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          width="26"
          height="22"
        ></rect>{" "}
        <line
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          x1="13"
          y1="8"
          x2="13"
          y2="8"
        ></line>{" "}
        <line
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          x1="10"
          y1="8"
          x2="10"
          y2="8"
        ></line>{" "}
        <line
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          x1="7"
          y1="8"
          x2="7"
          y2="8"
        ></line>{" "}
        <line
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          x1="3"
          y1="11"
          x2="29"
          y2="11"
        ></line>{" "}
      </g>
    </svg>
  );
};
