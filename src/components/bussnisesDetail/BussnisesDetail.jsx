import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useRecentStore from "../../store/useRecentsStore";
import { useParams } from "react-router-dom";
import bussnies from "../../data/data.json";
import CollectionModal from "../collections/CollectionModal";
import useCollectionModalStore from "../../store/useCollectionModalStore";
const BussnisesDetail = ({
  category,
  name,
  phone,
  img,
  rating,
  hours,
  description,
  address,
  features,
}) => {
  const { id } = useParams();
  const business = bussnies.find((b) => b.id === id);
  const addRecent = useRecentStore((s) => s.addRecent);
  const { fav, openModal } = useCollectionModalStore();
  // Add this business to recently viewed on mount
  useEffect(() => {
    addRecent({
      id,
      category,
      name,
      phone,
      img,
      rating,
      hours,
      description,
      address,
      features,
    });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Header Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Back Button */}
        <Link
          className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow-lg"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="lucide lucide-arrow-left w-4 h-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span className="font-medium">Back</span>
        </Link>

        {/* Category Badge */}
        <div className="absolute top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium">
          {category}
        </div>
      </div>

      {/* Business Info */}
      <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{name}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="font-semibold text-lg">{rating}</span>
                    <span className="text-gray-500">Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-dollar-sign w-5 h-5 text-gray-400"
                    >
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <span className="font-semibold">{"$".repeat(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => openModal(business)}
                className="inline-flex w-fit cursor-pointer items-center gap-2 px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-heart w-4 h-4"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>

                <span>Add to Favorites</span>
              </button>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Contact & Features */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-map-pin w-5 h-5 text-indigo-600 mt-1 flex-shrink-0"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-phone w-5 h-5 text-indigo-600 mt-1 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-clock w-5 h-5 text-indigo-600 mt-1 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p className="text-gray-600">{hours}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-circle-check w-5 h-5 text-green-500 flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {fav && <CollectionModal />}
    </div>
  );
};

export default BussnisesDetail;
