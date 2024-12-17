"use client";

import { useTheme } from "next-themes";
import {useEffect, useState} from "react";

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currentTheme = theme;

  useEffect(() => {
    setMount(true);
  }, []);

  function handleTheme() {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }
    
  return mount ? (
    <>
      <br/>
      <button type="button" onClick={handleTheme}>Toggle dark / light theme</button>
    </>
   ) : null;
}