import React from "react";
import Header from "../header/Header";
import Filterbox from "../filtersSearch/Filterbox";
import BussniesList from "../bussnises/BussniesList";
import Collections from "../collections/Collections";
import RecentlyMain from "../recentlyViewed/RecentlyMain";

const Landing = () => {
  return (
    <div className="container">
      <Header />
      <Collections />
      <RecentlyMain />
      <Filterbox />
      <BussniesList />
    </div>
  );
};

export default Landing;
