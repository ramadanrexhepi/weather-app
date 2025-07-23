// src/layouts/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6 max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
