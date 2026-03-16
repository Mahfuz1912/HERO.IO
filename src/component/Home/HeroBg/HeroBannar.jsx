import React from "react";
import BannarImg from "/assets/hero.png";
import GoogleplayImg from "/assets/google-play.png";
import AppstoreImg from "/assets/app-store.png";
import { Link } from "react-router-dom";
const HeroBannar = () => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4 sm:gap-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-tight max-w-xl">
        We Build{" "}
        <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br className="hidden sm:block" />{" "}
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
        <Link
          to="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline border border-gray-300 hover:border-gray-400 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-colors duration-200">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8"
              src={GoogleplayImg}
              alt="Google Play"
            />
            Google Play
          </button>
        </Link>
        <Link
          to="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline border border-gray-300 hover:border-gray-400 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-colors duration-200">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8"
              src={AppstoreImg}
              alt="App Store"
            />
            App Store
          </button>
        </Link>
      </div>
      <img
        src={BannarImg}
        alt="Hero Banner"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mt-4 sm:mt-6"
      />
    </div>
  );
};

export default HeroBannar;
