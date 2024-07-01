import React from "react";
import {SideBar} from "../components"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex gap-5 mt-5 pl-4">
      <SideBar />
      <Outlet />
    </main>
  );
};

export default Layout;
