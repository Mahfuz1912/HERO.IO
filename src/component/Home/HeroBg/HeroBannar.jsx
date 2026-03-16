import React from "react";
import BannarImg from "/assets/hero.png";
import GoogleplayImg from "/assets/google-play.png";
import AppstoreImg from "/assets/app-store.png";
import { Link } from "react-router-dom";
const HeroBannar = () => {
  return (
    <div className="pt-7 flex flex-col items-center text-center gap-6">
      <h1 className="md:text-[72px] md:w-150 text-5xl font-bold">
        We Build{" "}
        <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4">
        <Link
          to="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline border border-[#D2D2D2] flex items-center gap-2">
            <img className="w-8 h-8" src={GoogleplayImg} alt="Google Play" />
            Google Play
          </button>
        </Link>
        <Link
          to="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline border border-[#D2D2D2] flex items-center gap-2">
            <img className="w-8 h-8" src={AppstoreImg} alt="App Store" />
            App Store
          </button>
        </Link>
      </div>
      <img src={BannarImg} alt="Hero Banner" />
    </div>
  );
};

export default HeroBannar;
