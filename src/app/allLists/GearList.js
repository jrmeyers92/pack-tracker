"use client";

import { useState } from "react";

import CatagoryList from "./CatgoryList";

const GearList = ({ item }) => {
  const [itemsShowing, setItemsShowing] = useState(false);

  return (
    <div className="flex flex-col border-2 m-4 p-4">
      <div className="grid grid-cols-5">
        <h3>J. Meyers</h3>
        <h4 className="col-span-2">
          <span>Total Gear Price: </span>
          {item.totalGearListPrice}
        </h4>
        <h4 className="col-span-2">
          <span>Total Gear Weight: </span> {item.totalGearListWeight}
          oz
        </h4>
      </div>
      <button
        onClick={() => setItemsShowing(!itemsShowing)}
        className="my-2 bg-primary hover:bg-primary-600 rounded-sm shadow-sm hover:bg-shadow-md text-white py-2 inline w-auto"
      >
        {itemsShowing ? "Hide Gear" : "Show Gear"}
      </button>

      {itemsShowing &&
        item.gear.map((list) => {
          return (
            <div className="border m-4 p-4">
              <CatagoryList data={list} />
            </div>
          );
        })}

      {/* {item.gear.map((list) => {
        return (
          <div className="border m-4 p-4">
            <CatagoryList data={list} />
          </div>
        );
      })} */}
    </div>
  );
};

export default GearList;
