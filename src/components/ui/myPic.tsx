"use client";
import Image from "next/image";

export const Picture = () => {
  return (
    <div className="p-5 h-fit w-fit relative">
      <div className="">
        <div>
          <Image
            src={"/1.png"}
            alt="my picture"
            height={350}
            width={400}
            priority
            className="object-cover rounded-md [clip-path:_polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%);]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-[25%] [clip-path:_polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%);]">
        <Image src={"/3.png"} alt="code under" width={64} height={64} />
      </div>
    </div>
  );
};
