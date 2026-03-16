import Navbar from "./SharedComponent/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./SharedComponent/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#D2D2D2]">
        <Outlet />
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
