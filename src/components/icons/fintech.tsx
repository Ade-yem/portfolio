import React from "react";
import { cn } from "@/services/utils";

export const Fintech = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={cn(className, "stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green")}
      width="40px"
      height="40px"
      viewBox="0 0 64 64"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <style type="text/css"> </style>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path
              className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
              d="M43,30.7v15.5c0,1.5-1.2,2.7-2.7,2.7H14.7c-1.5,0-2.7-1.2-2.7-2.7V30.7c0-1.5,1.2-2.7,2.7-2.7h25.6 C41.8,28,43,29.2,43,30.7z"
            ></path>{" "}
            <line
              className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
              x1="12"
              x2="43"
              y1="33.5"
              y2="33.5"
            ></line>{" "}
          </g>{" "}
          <g>
            {" "}
            <path
              className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
              d="M20.1,24l1.9-7c0.4-1.5,1.9-2.3,3.4-1.9L50,21.7c1.5,0.4,2.3,1.9,1.9,3.4l-4,15"
            ></path>{" "}
            <line
              className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
              x1="21.2"
              x2="51.2"
              y1="19.7"
              y2="27.7"
            ></line>{" "}
          </g>{" "}
        </g>{" "}
        <circle
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          cx="37"
          cy="43"
          r="2"
        ></circle>{" "}
        <circle
          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
          cx="33"
          cy="43"
          r="2"
        ></circle>{" "}
      </g>
    </svg>
  );
};
