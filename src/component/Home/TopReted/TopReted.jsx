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
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold">Trending Apps</h1>
      <p className="text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {topRatedApps.map((item) => (
          <SingleCard key={item.id} data={item} />
        ))}
      </div>

      <Link to="/app" className="my-10 inline-block">
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:from-[#9F62F2] hover:to-[#632EE3] hover:scale-105 transition-all duration-200">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TopReted;
