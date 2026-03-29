import React from "react";
import { cn } from "@/services/utils";

export const PerformanceOptimization = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={cn("stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green", className)}
      width="40px"
      height="40px"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
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
        <g
          style={{
            strokeWidth: "1",
            strokeDasharray: "none",
          }}
          transform="translate(-71.217 -81.133) scale(1.79263)"
        >
          {" "}
          <path
            d="M108 109s31-22 26-51c-29-4-50 26-50 26l-19 1-13 21 4 5 16-4 14 14-5 14 5 5 21.173-11.946z"
            className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
            style={{
              fill: "none",
              strokeWidth: "6.69408",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              strokeOpacity: "1",
            }}
          ></path>{" "}
          <circle
            cx="118.676"
            cy="73.434"
            r="6.527"
            className="fill-slate-900 dark:fill-white group-hover:fill-custom-green"
            style={{
              display: "inline",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "1.30539",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 5,
              strokeDasharray: "none",
              strokeOpacity: "1",
            }}
          ></circle>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
