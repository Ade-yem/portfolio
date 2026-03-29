"use client";
import Image from "next/image";

export const Picture = () => {
  return (
    <div
      className="base:p-5 p-2 h-fit w-fit relative"
      style={{
        clipPath:
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      }}
    >
      <Image
        src={"/1.png"}
        alt="my picture"
        height={350}
        width={400}
        priority
        className="object-cover rounded-md [clip-path:_polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%);]"
      />

      <div className="absolute bottom-0 z-50 left-[25%] [clip-path:_polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%);]">
        <Image src={"/3.png"} alt="code under" width={64} height={64} />
      </div>
    </div>
  );
};
