import React from "react";

const Badge = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-12 sm:py-16 md:py-20 text-white">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl px-4">
        Trusted by Millions, Built for You
      </h1>
      <div className="stats stats-vertical lg:stats-horizontal mt-8 sm:mt-10 md:mt-12 justify-center gap-4 sm:gap-6 lg:gap-8">
        <div className="stat place-items-center">
          <div className="stat-title text-white">Downloads</div>
          <div className="stat-value text-4xl sm:text-5xl md:text-6xl font-extrabold">
            29.6M
          </div>
          <div className="stat-desc text-white text-sm sm:text-base">
            21% More Than Last Month
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-white">Total Reviews</div>
          <div className="stat-value text-4xl sm:text-5xl md:text-6xl font-extrabold">
            960K
          </div>
          <div className="stat-desc text-white text-sm sm:text-base">
            46% More Than Last Month
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value text-4xl sm:text-5xl md:text-6xl font-extrabold">
            132+
          </div>
          <div className="stat-desc text-white text-sm sm:text-base">
            31 More Will Launch
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
