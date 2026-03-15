import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="bg-[#D9D9D9]">
      <h1 className="text-3xl font-bold text-center pt-10">
        OUR ALL APPLICATIONS
      </h1>
      <p className="text-center mt-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div>
        <div className="flex justify-between items-center mt-10 px-10">
          <h1>{data.length} Apps Found</h1>

          <label className="input">
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
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
