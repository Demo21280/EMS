import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Navbar /> */}
        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
