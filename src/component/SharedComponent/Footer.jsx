import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiFacebook } from "react-icons/tfi";
import { RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-[#001931] text-center p-4">
      <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4 border-b-2 border-gray-500 flex justify-between">
        <Link
          to="/"
          className="text-white flex items-center font-bold text-base"
        >
          <img src={logo} className="w-10 h-10" alt="Logo" />
          HERO.IO
        </Link>

        <nav className=" md:place-self-center md:justify-self-end">
          <h1 className="font-medium text-xl">Social Links</h1>
          <div className="flex gap-1 mt-2">
            <Link
              to="https://twitter.com/Mahfuz1912"
              target="blank"
              className="text-2xl text-black rounded-full bg-white p-1"
            >
              <RiTwitterXFill />
            </Link>
            <Link
              to="https://www.instagram.com/mahfuz1912/"
              target="blank"
              className="text-2xl text-black rounded-full bg-white p-1"
            >
              <RiLinkedinLine />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mahfuz1912/"
              target="blank"
              className="text-2xl text-black rounded-full bg-white p-1"
            >
              <TfiFacebook />
            </Link>
          </div>
        </nav>
      </footer>
      <p className="text-sm text-gray-400 mt-4">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
