import React from "react";

const Header = () => {
  return (
    <div className="my-[1.4rem]">
      <h1 className="text-5xl text-center font-bold mb-4 bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
        Yelp-Style Business Discovery Platform:
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
        Discover and explore amazing local businesses in your area
      </p>
    </div>
  );
};

export default Header;
