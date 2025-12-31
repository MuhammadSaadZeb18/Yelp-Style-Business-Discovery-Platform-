import React, { useState } from "react";
import Header from "../header/Header";
import Filterbox from "../filtersSearch/Filterbox";
import BussniesList from "../bussnises/BussniesList";
import Collections from "../collections/Collections";
import RecentlyMain from "../recentlyViewed/RecentlyMain";

const Landing = () => {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="container">
      <Header />
      <Collections />
      <RecentlyMain />
      <Filterbox data={data} setData={setData} />
      <BussniesList data={data} setData={setData} />
    </div>
  );
};

export default Landing;
