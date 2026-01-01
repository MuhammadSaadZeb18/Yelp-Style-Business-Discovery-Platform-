import React from "react";

const NoCollection = () => {
  return (
    <div className="my-[2rem] bg-white rounded-xl p-12 text-center border border-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-heart w-16 h-16 mx-auto mb-4 text-pink-200"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
      <h3 class="text-xl font-semibold mb-2">No Collections Yet</h3>
      <p class="text-gray-600 mb-4">
        Start organizing your favorite businesses into collections!
      </p>
      <p class="text-sm text-gray-500">
        Click the "Add to Favorites" button on any business to create your first
        collection.
      </p>
    </div>
  );
};

export default NoCollection;
