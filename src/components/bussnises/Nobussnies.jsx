import React from "react";
import useSearchStore from "../../store/useSearchStore";
const Nobussnies = () => {
  const { clearAll } = useSearchStore();
  return (
    <div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold mb-2">No businesses found</h3>
      <p className="text-gray-600 mb-4">
        Try adjusting your filters or search terms
      </p>
      <button
        onClick={clearAll}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Nobussnies;
