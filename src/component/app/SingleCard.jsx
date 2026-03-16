import React from "react";
import downloadeImg from "/assets/icon-downloads.png";
import ratingImg from "/assets/icon-ratings.png";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  return (
    <Link to={`/app/${data.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 sm:p-4 md:p-5 w-full">
        <div className="bg-gray-200 rounded-xl h-48 sm:h-52 md:h-56 lg:h-60 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={data.image}
            alt={data.title}
          />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mt-3 sm:mt-4 md:mt-5 line-clamp-2 leading-tight">
          {data.title}
        </h2>

        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
          <button className="bg-lime-50 text-green-500 px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
            <img
              className="w-3 h-3 sm:w-4 sm:h-4"
              src={downloadeImg}
              alt="Downloads"
            />
            {(data.downloads / 1000000).toFixed(1)}M
          </button>

          <button className="bg-orange-50 text-orange-500 px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
            <img
              className="w-3 h-3 sm:w-4 sm:h-4"
              src={ratingImg}
              alt="Ratings"
            />
            {data.ratingAvg}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
