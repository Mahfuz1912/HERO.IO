import React, { useEffect, useState } from "react";
import downloadsImg from "/assets/icon-downloads.png";
import ratingImg from "/assets/icon-ratings.png";
import error from "/assets/App-Error.png";
const Installation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const installedApps = localStorage.getItem("installedApps");
    if (installedApps) {
      setData(JSON.parse(installedApps));
    }
  }, []);

  console.log(data);
  const handleGoBack = () => {
    window.history.back();
  };
  const handleRemove = (id) => {
    const updatedData = data.filter((app) => app.id !== id);
    setData(updatedData);
    localStorage.setItem("installedApps", JSON.stringify(updatedData));
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-5xl font-bold">Your Installed Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>
      <div className="flex justify-between items-center gap-4 mt-4">
        <p className="text-2xl font-semibold">{data.length} App Found</p>
        <select name="" id="">
          <option value="">High to Low</option>
          <option value="">Low to High</option>
        </select>
      </div>
      <div>
        {data.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-242px)] gap-4">
            <img src={error} className="w-125 h-125" alt="Error 404" />
            <h1 className="text-5xl font-semibold">No Apps Installed</h1>
            <p className="text-[#627382] text-xl">
              You haven't installed any apps yet.
            </p>
            <button
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none transition-all duration-200 px-7 mb-3"
              onClick={handleGoBack}
            >
              Go Back!
            </button>
          </div>
        )}
        {data.map((app) => (
          <div
            className="flex justify-between items-center gap-4 mt-4 p-4 bg-white rounded-lg shadow-md"
            key={app.id}
          >
            <div>
              <img className="w-20 h-20" src={app?.image} alt="" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-medium text-start">
                {app?.title || "Untitled App"}
              </h1>
              <div className="flex gap-6 mt-2">
                <div className="flex items-center justify-center gap-2">
                  <img className="w-3 h-3" src={downloadsImg} alt="" />
                  <p className="text-[#00D390]">
                    {app?.downloads / 1000000 || 0} M
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-3 h-3" src={ratingImg} alt="" />
                  <p className="text-[#FF8811]">{app?.ratingAvg || 0}</p>
                </div>
                <p className="text-[#627382]">{app.size}MB</p>
              </div>
            </div>
            <div>
              <button
                className="btn bg-[#00D390] text-white font-semibold font_inter outline-none border-none"
                onClick={() => handleRemove(app.id)}
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
