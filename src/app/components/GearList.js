"use client";

import { useSelector } from "react-redux";
import CatagoryList from "./CatagoryList";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCatagory } from "../store";

const GearList = () => {
  const dispatch = useDispatch();

  const gear = useSelector((state) => {
    return state.gear.gear;
  });

  console.log(gear);

  const addNewCatagory = () => {
    dispatch(addCatagory({}));
  };

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

      <button
        className="flex items-center text-sm mt-2 text-gray-600"
        onClick={addNewCatagory}
      >
        <BsPlus /> Add new Catagory
      </button>
    </div>
  );
};

export default GearList;
