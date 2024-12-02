import { useEffect, useState } from "react";

interface CounterProps {
  /**
   * icon: icon
   */
  icon: React.ReactNode;
  /**
   * text: title of the counter
   */
  text: string;
  /**
   * start: starting number
   */
  start: number;
  /**
   * end: ending number
   */
  end: number;
  /**
   * duration: duration of the count in  milliseconds
   */
  duration?: number;
}

/**
 * Creates a counter component
 * @param {CounterProps}
 * @returns a counter component
 */
export const Counter: React.FC<CounterProps> = ({
  icon,
  text,
  start,
  end,
  duration = 4000,
}) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const interval = duration / (end - start);
    const counter = setInterval(() => {
      if (count < end) setCount((prev) => prev + 1);
      if (count == end) clearInterval(counter);
    }, interval);
    return () => {
      clearInterval(counter);
    };
  }, [start, end, duration, count]);
  return (
    <div className="inline-block space-y-2 z-10">
      <div>{icon}</div>
      <p className="text-4xl dark:text-custom-white text-black dm-mono-regular">
        {count}
        <span className="opacity-70">+</span>
      </p>
      <p className="dm-mono-light-italic text-base dark:text-custom-white text-black">
        {text}
      </p>
    </div>
  );
};
