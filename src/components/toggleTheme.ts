// handleToggleTheme dark mode function inspireret af https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
export function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
