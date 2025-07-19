// src/components/Header.tsx
import { Link, useLocation } from "react-router-dom";
import { Sun, CalendarDays, Newspaper } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const { pathname } = useLocation();

  const navLinkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 transition ${
      pathname === path ? "bg-blue-200 dark:bg-blue-700" : ""
    }`;

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">WeatherApp</h1>
      <nav className="flex gap-4 text-sm font-medium text-gray-800 dark:text-gray-200">
        <Link to="/" className={navLinkClass("/")}>
          <Sun size={18} /> Home
        </Link>
        <Link to="/forecast" className={navLinkClass("/forecast")}>
          <CalendarDays size={18} /> Forecast
        </Link>
        <Link to="/news" className={navLinkClass("/news")}>
          <Newspaper size={18} /> News
        </Link>
      </nav>
      <ThemeToggle /> 
    </header>
  );
}

export default Header;
