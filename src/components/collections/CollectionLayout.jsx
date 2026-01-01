import React from "react";
import useFavStore from "../../store/useFavStore";
import CollectionItem from "./CollectionItem";
import NoCollection from "./NoCollection";

const CollectionLayout = () => {
  const { favs } = useFavStore();

  if (favs.length === 0) return <NoCollection />;

  // 🔑 Group by collectionName
  const groupedFavs = favs.reduce((acc, item) => {
    const key = item.collectionName || "Uncategorized";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className="my-[2rem] flex flex-col gap-6">
      <div className="bg-white rounded-xl p-4 border flex gap-2 flex-col border-gray-200">
        {Object.entries(groupedFavs).map(([collectionName, items]) => (
          <div className="bg-zinc-50 p-4 rounded-xl">
            {/* ✅ Dynamic collection title */}
            <h3 className="text-left mb-4 font-bold text-xl capitalize">
              {collectionName}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {items.map((c) => (
                <CollectionItem
                  key={c.id}
                  name={c.name}
                  img={c.image}
                  cat={c.category}
                  rat={c.rating}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionLayout;
