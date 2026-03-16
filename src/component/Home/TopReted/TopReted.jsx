import React, { useEffect, useState } from "react";
import SingleCard from "../../app/SingleCard";
import { Link } from "react-router-dom";

const TopReted = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const topRatedApps = data
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 12);
  console.log(topRatedApps);
  return (
    <div className="text-center mt-8 sm:mt-10 md:mt-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 px-4">
        Trending Apps
      </h1>
      <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {topRatedApps.map((item) => (
          <SingleCard key={item.id} data={item} />
        ))}
      </div>

      <Link to="/app" className="my-8 sm:my-10 md:my-12 inline-block">
        <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-200 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TopReted;
