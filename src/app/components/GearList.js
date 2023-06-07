"use client";

import { useSelector } from "react-redux";
import CatagoryList from "./CatagoryList";

const GearList = () => {
  const gear = useSelector((state) => {
    return state.gear.gear;
  });

  console.log(gear);

  return (
    <div>
      {gear.map((item) => (
        <CatagoryList
          name={item.name}
          id={item.id}
          data={item.items}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default GearList;
