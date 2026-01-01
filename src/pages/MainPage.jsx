import React from "react";
import Header from "../components/header/Header";
import Filterbox from "../components/filtersSearch/Filterbox";
import BussniesList from "../components/bussnises/BussniesList";
import Collections from "../components/collections/Collections";
import RecentlyMain from "../components/recentlyViewed/RecentlyMain";
const MainPage = () => {
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

export default MainPage;
