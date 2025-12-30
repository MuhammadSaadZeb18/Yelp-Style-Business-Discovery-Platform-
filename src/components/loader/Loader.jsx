import React from "react";

const Loader = () => {
  return (
    <div className="grid my-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="shadow-sm  rounded-lg p-4 animate-pulse bg-gray-100 space-y-4"
        >
          <div className="h-40 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
