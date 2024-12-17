"use client";
import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children, ...props}) {
   return (
     <ThemeProvider {...props}>
       {children}
     </ThemeProvider>);
}