"use client";

import { useState } from "react";

import ExploreCatagoryList from "./ExploreCatgoryList";

const ExploreGearList = ({ item }) => {
  const [itemsShowing, setItemsShowing] = useState(false);

  return (
    <div className="flex flex-col border-2 m-4 p-4">
      <div className="grid grid-cols-5">
        <h3>J. Meyers</h3>
        <h4 className="col-span-2">
          Total Gear Price:&nbsp;
          <span className="font-bold">${item.totalGearListPrice}</span>
        </h4>
        <h4 className="col-span-2">
          Total Gear Weight:&nbsp;
          <span className="font-bold">
            {item.totalGearListWeight}
            oz
          </span>
        </h4>
      </div>
      <button
        onClick={() => setItemsShowing(!itemsShowing)}
        className="my-2 bg-primary hover:bg-primary-600 rounded-sm shadow-sm hover:bg-shadow-md text-white py-2 inline w-auto w-fit mx-auto px-4 mt-4"
      >
        {itemsShowing ? "Hide Gear" : "Show Gear"}
      </button>

      {itemsShowing &&
        item.gear.map((list) => {
          return (
            <div className="border m-4 p-4">
              <ExploreCatagoryList data={list} />
            </div>
          );
        })}
    </div>
  );
};

export default ExploreGearList;
