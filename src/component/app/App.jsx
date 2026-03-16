import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import error from "/assets/App-Error.png";
const App = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
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
      <div className="bg-linear-to-b from-gray-100 to-gray-200 py-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#632EE3] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-b from-gray-100 to-gray-200 py-10 pt-22 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          OUR ALL APPLICATIONS
        </h1>
        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between flex-col md:flex-row items-center mt-10 gap-4">
          <h1 className="text-2xl font-semibold text-gray-700">
            {data.length} Apps Found
          </h1>

          <label className="input input-bordered flex items-center gap-2 bg-white shadow-sm">
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
              placeholder="Search by title only"
              className="grow"
            />
          </label>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => (
            <SingleCard key={item.id} data={item} />
          ))}
        </div>
        {data.length === 0 && searchTerm && (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-242px)] gap-4">
            <img src={error} className="w-125 h-125" alt="Error 404" />
            <h1 className="text-5xl font-semibold">Oops, App not found!</h1>
            <p className="text-[#627382] text-xl">
              The App you are requesting is not found on our system.  please try another apps
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
