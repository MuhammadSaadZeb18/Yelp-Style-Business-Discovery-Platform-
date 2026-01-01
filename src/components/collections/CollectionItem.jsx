import React from "react";

const CollectionItem = ({ name, img, cat, rat }) => {
  return (
    <div class="bg-white border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md">
      <div class="flex gap-3">
        <div class="flex-1 flex gap-3 min-w-0">
          <img
            src={img}
            alt={name}
            class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
          />
          <div class="flex-1 min-w-0">
            <h4 class="font-medium text-gray-900 truncate hover:text-indigo-600">
              {name}
            </h4>
            <p class="text-sm text-gray-600 truncate">{cat}</p>
            <div class="flex items-center gap-1 text-sm text-gray-500">
              <span>★</span>
              <span>{rat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
