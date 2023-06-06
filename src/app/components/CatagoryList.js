"use client";

import { useEffect, useState } from "react";
import CatagoryItem from "./CatagoryItem";
import { BsPlus } from "react-icons/bs";

const CatagoryList = ({ name, data, id }) => {
  const [nameState, setNameState] = useState(name);

  const handleNameChange = (e) => {
    setNameState(e.target.value);
  };

  useEffect(() => {}, [nameState]);

  return (
    <div>
      <ul className="mx-auto w-full md:w-[85%]">
        <li className="flex items-center justify-center border-b-2 p-2 pb-0 text-xl">
          <input
            type="text"
            name="catagoryName"
            id={id}
            value={nameState}
            onChange={handleNameChange}
            placeholder="Catagory Name"
            className="flex-1 outline-0 hover:border hover:border-b-0 active:border active:border-b-0 p-2 mr-8"
          />
          <span className="mx-4">Weight</span>
          <span className="mx-4">Qty</span>
          <button className="hidden">X</button>
        </li>
        {/* 
        {data.map((item, index) => (
          <CatagoryItem data={item} key={index} />
        ))} */}

        <li>
          <button className="flex items-center text-sm mt-2">
            <BsPlus /> Add new Item
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CatagoryList;
