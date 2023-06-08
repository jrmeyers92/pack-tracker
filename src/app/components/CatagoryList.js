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
    <table className="border-b mb-4 text-gray-800">
      <tr>
        <input
          type="text"
          name="catagoryName"
          id={id}
          value={name}
          onChange={handleNameChange}
          placeholder="Catagory Name"
          className="flex-1 outline-0 p-2 mr-8 text-2xl hover:ring-1 active:ring-1 ring-gray-200 hover:bg-gray-100 active:gray-100"
        />
      </tr>
      <tr>
        <th className="text-left pl-2">Item</th>
        <th className="text-left">description</th>
        <th className="text-left">Weight</th>
        <th className="text-left pr-4">Unit of measure</th>
        <th className="text-left">Qty</th>
        {/* <th className="border border-black">
            <button className="hidden">X</button>
          </th> */}
      </tr>

      {data.map((item) => (
        <CatagoryItem data={item} key={item.id} catagoryID={id} id={item.id} />
      ))}

      <tr>
        <button
          className="flex items-center text-sm mt-2 pb-4 text-gray-600"
          onClick={addNewItem}
        >
          <BsPlus /> Add new Item
        </button>
      </tr>
    </table>
  );
};

export default CatagoryList;
