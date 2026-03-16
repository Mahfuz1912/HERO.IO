import React, { useEffect, useState } from "react";
import SingleCard from "../../app/SingleCard";
import { Link } from "react-router-dom";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 w-full animate-pulse">
      <div className="bg-gray-300 rounded-xl h-48 sm:h-52 md:h-56 lg:h-60"></div>
      <div className="mt-3 sm:mt-4 md:mt-5">
        <div className="h-4 sm:h-5 md:h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 sm:h-5 md:h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
        <div className="bg-gray-300 h-8 sm:h-9 rounded-lg flex-1"></div>
        <div className="bg-gray-300 h-8 sm:h-9 rounded-lg flex-1"></div>
      </div>
    </div>
  );
};

const TopReted = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timer;
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 px-4">
          Trending Apps
        </h1>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

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
