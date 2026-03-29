"use client";

import { useEffect, useState } from "react"

export const useLocalStorage = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "">("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
}