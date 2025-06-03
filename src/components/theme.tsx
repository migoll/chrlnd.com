"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme | ((theme: Theme) => Theme | null)) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(null); // start with null to avoid hydration mismatch

  // Init theme from localStorage or system
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  // Sync to localStorage and class
  useEffect(() => {
    if (!theme) return; //  Don't run until theme is set

    localStorage.theme = theme;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  if (!theme) return null; // Optionally return nothing until theme is ready

  const value: ThemeContextValue = {
    theme,
    setTheme: setTheme as ThemeContextValue["setTheme"],
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme has to be used in a ThemeProvider");
  }

  return context;
}
