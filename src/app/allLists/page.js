import React from "react";
import GearList from "./GearList";

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
        return <GearList item={item} />;
      })}
    </div>
  );
};

export default allLists;
