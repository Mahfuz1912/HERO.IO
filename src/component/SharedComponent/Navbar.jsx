import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/logo.png";
const Navbar = () => {
  const location = useLocation();
  const link = [
    { name: "Home", path: "/" },
    { name: "App", path: "/app" },
    { name: "Installation", path: "/installation" },
  ];

  const isActive = (path) => {
    return location.pathname === path
      ? "underline font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
      : "hover:text-[#632EE3] transition-colors duration-200";
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`${isActive(item.path)} text-base`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="btn outline-none btn-ghost text-xl font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hover:bg-clip-text hover:text-transparent hover:scale-105 transition-transform duration-200"
          >
            <img src={logo} className="w-10 h-10" alt="Logo" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${isActive(item.path)} text-base`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/Mahfuz1912"
            target="blank"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:from-[#9F62F2] hover:to-[#632EE3] hover:scale-105 transition-all duration-200"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
