import React from "react";
import error from "/assets/error-404.png";
const Error = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] sm:min-h-[calc(100vh-242px)] gap-4 sm:gap-6 px-4 py-8 sm:py-12">
      <img
        src={error}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        alt="Error 404"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800">
        Oops, page not found!
      </h1>
      <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-md">
        The page you are looking for does not exist.
      </p>
      <button
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-200 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base mt-2"
        onClick={handleGoBack}
      >
        Go Back!
      </button>
    </div>
  );
};

export default Error;
