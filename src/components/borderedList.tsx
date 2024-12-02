import React from "react";

type listItem = {
  date: string;
  title: string;
  text: string;
};
export function BorderedList({ data }: { data: listItem[] }) {
  return (
    <div>
      <ul className="bordered-list space-y-3">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex space-x-2 bordered-list-item before:bg-slate-900 before:dark:bg-custom-white px-2"
          >
            <div className="dm-mono-regular dark:text-custom-orange max-w-[100px] w-full">
              {item.date}:
            </div>
            <div className="flex flex-col justify-start space-y-2 dm-mono-light">
              <span className="text-custom-green text-wrap">{item.title}</span>
              <span className="text:black dark:text-white dm-mono-light">
                {item.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
