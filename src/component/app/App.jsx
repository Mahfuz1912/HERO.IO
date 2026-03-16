import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import error from "/assets/App-Error.png";
import { Helmet } from "react-helmet";

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

const App = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let timer;
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
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

  useEffect(() => {
    if (searchTerm === "") {
      setData(allData);
    } else {
      const filteredData = allData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm),
      );
      setData(filteredData);
    }
  }, [searchTerm, allData]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  if (loading) {
    return (
      <div className="bg-linear-to-b from-gray-100 to-gray-200 py-8 sm:py-10 md:py-12 lg:py-22 min-h-screen">
        <Helmet>
          <title>Loading Apps - HERO.IO</title>
        </Helmet>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
            OUR ALL APPLICATIONS
          </h1>
          <p className="text-center mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="flex justify-between flex-col sm:flex-row items-center mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 order-2 sm:order-1">
              Loading Apps...
            </h1>

            <label className="input input-bordered flex items-center gap-2 bg-white shadow-sm w-full sm:w-auto order-1 sm:order-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search apps..."
                className="grow text-sm sm:text-base"
                disabled
              />
            </label>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-b from-gray-100 to-gray-200 py-8 sm:py-10 md:py-12 lg:py-22 min-h-screen">
      <Helmet>
        <title>{`${data.length} Apps - HERO.IO`}</title>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
          OUR ALL APPLICATIONS
        </h1>
        <p className="text-center mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between flex-col sm:flex-row items-center mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 order-2 sm:order-1">
            {data.length} Apps Found
          </h1>

          <label className="input input-bordered flex items-center gap-2 bg-white shadow-sm w-full sm:w-auto order-1 sm:order-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search apps..."
              className="grow text-sm sm:text-base"
            />
          </label>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {data.map((item) => (
            <SingleCard key={item.id} data={item} />
          ))}
        </div>
        {data.length === 0 && searchTerm && (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-242px)] gap-4">
            <img src={error} className="w-125 h-125" alt="Error 404" />
            <h1 className="text-5xl font-semibold">Oops, App not found!</h1>
            <p className="text-[#627382] text-xl">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none transition-all duration-200 px-7 mb-3"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
