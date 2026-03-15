import React from "react";
import error from "/assets/error-404.png";
const Error = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-242px)] gap-4">
      <img src={error} className="w-125 h-125" alt="Error 404" />
      <h1 className="text-5xl font-semibold">Oops, page not found!</h1>
      <p className="text-[#627382] text-xl">
        The page you are looking for does not exist.
      </p>
      <button
        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none transition-all duration-200 px-7 mb-3"
        onClick={handleGoBack}
      >
        Go Back!
      </button>
    </div>
  );
};

export default Error;
