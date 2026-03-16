import React from "react";
import HeroBannar from "./HeroBg/HeroBannar";
import Badge from "./Badge/Badge";
import TopReted from "./TopReted/TopReted";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Helmet>
        <title>Home - HERO.IO</title>
      </Helmet>
      <HeroBannar />
      <Badge />
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
            <TopReted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
