import React from "react";
import Navbar from "./SharedComponent/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./SharedComponent/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
