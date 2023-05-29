"use client";

import CatagoryItem from "./CatagoryItem";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";

const Catagory = () => {
  const [catagoryListItems, setCatagroyListItems] = useState([
    <CatagoryItem key="0" />,
  ]);

  const addCatagroyItem = () => {
    setCatagroyListItems(
      catagoryListItems.concat(<CatagoryItem key={catagoryListItems.length} />)
    );
  };

  return (
    <div>
      <ul className="mx-auto w-full md:w-[85%]">
        <li className="flex items-center justify-center border-b-2 p-2 pb-0 text-xl">
          <input
            type="text"
            name="catagoryName"
            id=""
            placeholder="Catagory Name"
            className="flex-1 outline-0 hover:border hover:border-b-0 active:border active:border-b-0 p-2 mr-8"
          />
          <span className="mx-4">Weight</span>
          <span className="mx-4">Qty</span>
          <button className="hidden">X</button>
        </li>

        {catagoryListItems.map((item) => item)}

        <li>
          <button
            className="flex items-center text-sm"
            onClick={addCatagroyItem}
          >
            <BsPlus /> Add new Item
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Catagory;
