import React from "react";
import useRecentStore from "../../store/useRecentsStore";
import RecentlyViewed from "../recentlyViewed/RecentlyViwed";

const RecentlyMain = () => {
  const recents = useRecentStore((s) => s.recents);

  if (recents.length === 0) return null; // hide section if empty

  return (
    <div className="my-[2rem]">
      <div>
        <h2 className="text-2xl font-bold mb-[2rem]">Recently Viewed</h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-[2rem] snap-x">
        {recents.map((r) => (
          <RecentlyViewed
            key={r.id}
            img={r.img}
            description={r.description}
            address={r.address}
            priceLevel={r.priceLevel}
            features={r.features}
            name={r.name}
            category={r.category}
            rating={r.rating}
            id={r.id}
            slug={r.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyMain;
