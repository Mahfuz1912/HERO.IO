import React, { useEffect, useState } from "react";
import downloadsImg from "/assets/icon-downloads.png";
import ratingImg from "/assets/icon-ratings.png";
import error from "/assets/App-Error.png";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const Installation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const installedApps = localStorage.getItem("installedApps");
    if (installedApps) {
      setData(JSON.parse(installedApps));
    }

    // Show loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleGoBack = () => {
    window.history.back();
  };
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `${data?.title || "App"} has been deleted.`,
          icon: "success",
        });
        const updatedData = data.filter((app) => app.id !== id);
        setData(updatedData);
        localStorage.setItem("installedApps", JSON.stringify(updatedData));
      }
    });
  };
  if (loading) {
    return (
      <div className="bg-linear-to-b from-gray-100 to-gray-200 py-8 sm:py-10 md:py-12 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-[#632EE3] mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
            Loading applications...
          </p>
        </div>
      </div>
    );
  }
  const shortBySize = (order) => {
    const sortedData = [...data].sort((a, b) => {
      if (order === "h2l") {
        return b.size - a.size;
      }

      if (order === "l2h") {
        return a.size - b.size;
      }
      return 0;
    });
    setData(sortedData);
  };
  return (
    <div className="py-12 pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Helmet>
            <title>{`${data.length} Installed Apps - HERO.IO`}</title>
          </Helmet>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Your Installed Apps
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <p className="text-xl sm:text-2xl font-semibold text-gray-700">
            {data.length} App{data.length !== 1 ? "s" : ""} Found
          </p>
          <select
            className="select select-bordered w-full sm:w-48"
            onChange={(e) => shortBySize(e.target.value)}
          >
            <option value="">Sort By Size</option>
            <option value="h2l">High to Low</option>
            <option value="l2h">Low to High</option>
          </select>
        </div>

        <div className="space-y-6">
          {data.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl p-8">
              <img
                src={error}
                className="w-32 h-32 sm:w-40 sm:h-40"
                alt="No Apps Installed"
              />
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-700">
                No Apps Installed
              </h1>
              <p className="text-gray-500 text-lg text-center">
                You haven't installed any apps yet.
              </p>
              <button
                className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none  transition-all duration-200 px-8 py-3 mt-4"
                onClick={handleGoBack}
              >
                Go Back!
              </button>
            </div>
          )}

          {data.map((app) => (
            <div
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
              key={app.id}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="shrink-0">
                  <img
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                    src={app?.image}
                    alt={app?.title}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                    {app?.title || "Untitled App"}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-4 h-4"
                        src={downloadsImg}
                        alt="Downloads"
                      />
                      <p className="text-green-600 font-medium">
                        {app?.downloads / 1000000 || 0} M
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img className="w-4 h-4" src={ratingImg} alt="Rating" />
                      <p className="text-orange-500 font-medium">
                        {app?.ratingAvg || 0}
                      </p>
                    </div>
                    <p className="text-gray-500 font-medium">{app.size} MB</p>
                  </div>
                </div>
                <div className="shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
                  <button
                    className="btn bg-[#00D390] font_inter text-white border-none w-full sm:w-auto transition-colors duration-200"
                    onClick={() => handleRemove(app.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
