import React from "react";
import downloadeImg from "/assets/icon-downloads.png";
import ratingImg from "/assets/icon-ratings.png";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  return (
    <Link to={`/app/${data.id}`}>
      <div className="bg-white rounded-xl shadow-md p-4 max-w-xs">
        <div className="bg-gray-200 rounded-xl h-72 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={data.image}
            alt={data.title}
          />
        </div>

        <h2 className="text-2xl font-semibold text-slate-800 mt-5 line-clamp-2">
          {data.title}
        </h2>

        <div className="flex justify-between mt-6">
          <button className="bg-lime-50 text-green-500 px-4 py-2 rounded-lg flex items-center gap-2">
            <img className="w-4 h-4" src={downloadeImg} alt="Downloads" />
            {data.downloads}
          </button>

          <button className="bg-orange-50 text-orange-500 px-4 py-2 rounded-lg flex items-center gap-2">
            <img className="w-4 h-4" src={ratingImg} alt="Ratings" />
            {data.ratingAvg}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
