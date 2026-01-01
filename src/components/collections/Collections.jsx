import React, { useState } from "react";
import CollectionLayout from "./CollectionLayout";
import useFavStore from "../../store/useFavStore";

const Collections = () => {
  const [collection, setCollection] = useState(false);
  const { favs } = useFavStore();
  return (
    <>
      <button
        onClick={() => setCollection((p) => !p)}
        className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-xl hover:from-pink-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
      >
        <span className="font-semibold">{`My Collections (${favs.length})`}</span>
      </button>

      {collection && <CollectionLayout />}
    </>
  );
};

export default Collections;
