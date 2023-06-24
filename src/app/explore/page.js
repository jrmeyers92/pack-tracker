import React from "react";
import ExploreGearList from "./ExploreGearList";

async function getData() {
  const res = await fetch("http://localhost:3008/api/v1/gearList", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const allLists = async () => {
  const data = await getData();

  return (
    <div className="grid lg:grid-cols-2">
      {data.data.data.map((item) => {
        return <ExploreGearList item={item} />;
      })}
    </div>
  );
};

export default allLists;
