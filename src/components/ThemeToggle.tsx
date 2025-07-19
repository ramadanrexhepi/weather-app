import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    return (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches))
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-gray-800" />}
    </button>
  );
}

export default ThemeToggle;
