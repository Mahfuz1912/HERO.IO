import React from "react";
import HeroBannar from "./HeroBg/HeroBannar";
import Badge from "./Badge/Badge";
import TopReted from "./TopReted/TopReted";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <HeroBannar />
      <Badge />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <TopReted />
        </div>
      </div>
    </div>
  );
};

export default Home;
