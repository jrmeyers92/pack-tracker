"use client";

import CatagoryItem from "./CatagoryItem";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateCatagory, addItem } from "../store";

const CatagoryList = ({ name, data, id }) => {
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(updateCatagory());
  };

  const addNewItem = (event) => {
    dispatch(addItem({ catagoryID: id }));
  };

  return (
    <div className="mb-4 border-b pb-4">
      <ul className="mx-auto w-full md:w-[85%]">
        <li className="flex items-center justify-center border-b-2 p-2 pb-0 text-xl">
          <input
            type="text"
            name="catagoryName"
            id={id}
            value={name}
            onChange={handleNameChange}
            placeholder="Catagory Name"
            className="flex-1 outline-0 hover:border hover:border-b-0 active:border active:border-b-0 p-2 mr-8"
          />
          <span className="mx-4">Weight</span>
          <span className="mx-4">Qty</span>
          <button className="hidden">X</button>
        </li>

        {data.map((item) => (
          <CatagoryItem
            data={item}
            key={item.id}
            catagoryID={id}
            id={item.id}
          />
        ))}

        <li>
          <button
            className="flex items-center text-sm mt-2"
            onClick={addNewItem}
          >
            <BsPlus /> Add new Item
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CatagoryList;
