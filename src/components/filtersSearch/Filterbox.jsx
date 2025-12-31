import React from "react";
import Form from "./Form";
const Filterbox = ({ data }) => {
  return (
    <div className=" mt-10 bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between my-[1.4rem]">
        <h2 className="font-semibold text-lg">Filters &amp; Search</h2>
        <p className="text-gray-400"> {data.length} results</p>
      </div>
      <Form />
    </div>
  );
};

export default Filterbox;
