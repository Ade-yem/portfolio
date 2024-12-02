import { useEffect, useState } from "react";

export const TypeAnimation = ({text, delay}: {text: string; delay: number}) => {
  const [current, setCurrent] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setCurrent(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, delay);
      return() => clearTimeout(timeout);
    }
  }, [current, index, text, delay])
  return(
    <div>{current}{" "}<span className="animate-pulse">|</span>{" "}</div>
  )
}