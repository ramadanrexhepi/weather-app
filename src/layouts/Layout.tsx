// src/layouts/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
