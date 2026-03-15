import React from "react";

const Badge = () => {
  return (
    <div className="text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-15 text-white">
      <h1 className="font-bold text-5xl">Trusted by Millions, Built for You</h1>
      <div className="stats  mt-10 justify-center">
        <div className=" place-items-center mr-20">
          <div className="stat-title text-white">Downloads</div>
          <div className="stat-value text-6xl font-extrabold">29.6M</div>
          <div className="stat-desc text-white ">21% More Than Last Month</div>
        </div>

        <div className="place-items-center mr-20">
          <div className="stat-title text-white">Total Reviews</div>
          <div className="stat-value text-6xl font-extrabold">960K</div>
          <div className="stat-desc text-white">46% More Than Last Month</div>
        </div>

        <div className=" place-items-center">
          <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value text-6xl font-extrabold">132+</div>
          <div className="stat-desc text-white">31 More Will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
