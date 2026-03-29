import Image from "next/image";
import logos from "@/services/stack.json";

export function StackCarousel({
  maxSize,
  p = "p-2",
}: {
  maxSize: string;
  p?: string;
}) {
  return (
    <div
      className="flex w-full overflow-hidden mx-auto"
      style={{ maxWidth: maxSize }}
    >
      <ul
        className={`flex shrink-0 ${"animate-infinite-scroll"} items-center whitespace-nowrap [&_img]:max-w-none [&_li]:mx-2`}
      >
        {logos.map((logo, index) => (
          <li
            key={index}
            className={`${p} shrink-0 border border-slate-300 rounded-md`}
          >
            <Image src={logo.src} alt={logo.alt} width={41} height={41} />
          </li>
        ))}
      </ul>
      <ul
        className={`flex shrink-0 ${"animate-infinite-scroll"} items-center whitespace-nowrap [&_img]:max-w-none [&_li]:mx-2`}
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li
            key={index}
            className={`${p} shrink-0 border border-slate-300 rounded-md`}
          >
            <Image src={logo.src} alt={logo.alt} width={41} height={41} />
          </li>
        ))}
      </ul>
    </div>
  );
}


export function ReverseCarousel() {
  const reversedLogos = [...logos].reverse();
  return (
    <div className="flex w-full overflow-hidden max-w-[300px] py-5 mx-auto px-10">
      <ul
        className={`flex shrink-0 ${"animate-left-right"} items-center whitespace-nowrap [&_img]:max-w-none [&_li]:mx-2`}
      >
        {reversedLogos.map((logo, index) => (
          <li
            key={index}
            className={`p-4 shrink-0 border border-slate-300 rounded-md`}
          >
            <Image src={logo.src} alt={logo.alt} width={41} height={41} />
          </li>
        ))}
      </ul>
      <ul
        className={`flex shrink-0 ${"animate-left-right"} items-center whitespace-nowrap [&_img]:max-w-none [&_li]:mx-2`}
        aria-hidden="true"
      >
        {reversedLogos.map((logo, index) => (
          <li
            key={index}
            className={`p-4 shrink-0 border border-slate-300 rounded-md`}
          >
            <Image src={logo.src} alt={logo.alt} width={41} height={41} />
          </li>
        ))}
      </ul>
    </div>
  );
}

