import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiFacebook } from "react-icons/tfi";
import { RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-[#001931] text-center py-6 sm:py-8 px-4">
      <footer className="footer footer-horizontal text-neutral-content items-center p-4 border-b-2 border-gray-500 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          to="/"
          className="text-white flex items-center font-bold text-lg sm:text-xl"
        >
          <img src={logo} className="w-8 h-8 sm:w-10 sm:h-10 mr-2" alt="Logo" />
          HERO.IO
        </Link>

        <nav className="place-self-center justify-self-end text-center sm:text-right">
          <h1 className="font-medium text-lg sm:text-xl mb-2">Social Links</h1>
          <div className="flex justify-center sm:justify-end gap-2">
            <Link
              to="https://twitter.com/Mahfuz1912"
              target="blank"
              className="text-xl sm:text-2xl text-black rounded-full bg-white p-2 hover:bg-gray-200 transition-colors duration-200"
            >
              <RiTwitterXFill />
            </Link>
            <Link
              to="https://www.instagram.com/mahfuz1912/"
              target="blank"
              className="text-xl sm:text-2xl text-black rounded-full bg-white p-2 hover:bg-gray-200 transition-colors duration-200"
            >
              <RiLinkedinLine />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mahfuz1912/"
              target="blank"
              className="text-xl sm:text-2xl text-black rounded-full bg-white p-2 hover:bg-gray-200 transition-colors duration-200"
            >
              <TfiFacebook />
            </Link>
          </div>
        </nav>
      </footer>
      <p className="text-sm sm:text-base text-gray-400 mt-4 sm:mt-6">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
