"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Definerer en type på tema der enten er light eller dark
type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme | ((theme: Theme) => Theme)) => void;
}

//Her oprettes der en kontekst der bruges til at dele temaets tilstand
const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: ReactNode;
}
//Definerer en ThemeProvider der håndterer temaets tilstand
export function ThemeProvider(props: ThemeProviderProps) {
  //variabel der sætter temaets standard til light
  const [theme, setTheme] = useState<Theme>("light");

  //variabel der sætter temaet baseret på brugerens præference i localstorage
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;

    setTheme(localStorage.theme ?? prefersDark ? "dark" : "light");
  }, []);

  //en useEffect der kører hver gang temaet ændres for at synkroniseere med localstorage
  useEffect(() => {
    localStorage.theme = theme;

    //Hvis prefersDark er true, adder den dark til html, hvis ikke, fjerner den
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //variabel der definerer den value der skal deles med themecontext og sikrer at det matcher ThemeContextValue typen
  const value = {
    theme,
    setTheme,
  } satisfies ThemeContextValue;

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

//hook der gør tema kan bruges i komponenter
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme has to be used in a ThemeProvider");
  }

  return context;
}
