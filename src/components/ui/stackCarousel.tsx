import Image from "next/image";
import logos from "@/services/stack.json";

export function StackCarousel({maxSize, p="p-2"}: {maxSize: string; p?:string;}) {
  return (
    <div className={`${"inline-flex"} w-full overflow-hidden max-w-[${maxSize}] mx-auto`}>
      <ul
        className={`flex space-x-2 ${"animate-infinite-scroll"} items-center whitespace-nowrap justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
      >
        {logos.map((logo, index) => (
          <li
            key={index}
            className={`${p} border border-slate-300 rounded-md`}
          >
            <Image src={logo.src} alt={logo.alt} width={41} height={41} />
          </li>
        ))}
      </ul>
      <div className="ml-32 mr-32 overflow-hidden">
        <ul
          className={`flex space-x-2 ${"animate-infinite-scroll"} items-center justify-center whitespace-nowrap md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li
              key={index}
              className={`${p} border border-slate-300 rounded-md`}
            >
              <Image src={logo.src} alt={logo.alt} width={41} height={41} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
    
export function ReverseCarousel() {
  return (
    <div className={`${"inline-flex"} w-full overflow-hidden max-w-[300px] py-5 mx-auto px-10`}>
      <ul
        className={`flex space-x-2 ${"animate-left-right"} items-center whitespace-nowrap justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
      >
        {logos.reverse().map((logo, index) => (
          <li
            key={index}
            className={`${"p-4"} border border-slate-300 rounded-md`}
          >
            <Image src={logo.src} alt={logo.alt} width={41} height={41} />
          </li>
        ))}
      </ul>
      <div className="ml-32 mr-32 overflow-hidden">
        <ul
          className={`flex space-x-2 ${"animate-left-right"} items-center justify-center whitespace-nowrap md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
          aria-hidden="true"
        >
          {logos.reverse().map((logo, index) => (
            <li
              key={index}
              className={`p-4 border border-slate-300 rounded-md`}
            >
              <Image src={logo.src} alt={logo.alt} width={41} height={41} />
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

