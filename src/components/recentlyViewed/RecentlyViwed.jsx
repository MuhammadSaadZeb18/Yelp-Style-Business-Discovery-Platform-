import React from "react";
import { Link } from "react-router-dom";

const RecentlyViewed = ({
  img,
  name,
  rating,
  category,
  address,
  description,
  features,
  priceLevel,
  id,
  slug,
}) => {
  return (
    <Link
      key={id}
      to={`/business/${id}/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm 
                 hover:shadow-xl transition-all duration-300 
                 border border-gray-100 w-[320px] flex-shrink-0 snap-start"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="font-semibold text-sm">{rating}</span>
        </div>
        {/* Category */}
        <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">
            {name}
          </h3>
          <span className="text-gray-600 font-medium">
            {"$".repeat(priceLevel)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="text-sm text-gray-500 mb-3">📍{address}</div>

        <div className="flex flex-wrap gap-1.5">
          {features.map((f, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RecentlyViewed;
