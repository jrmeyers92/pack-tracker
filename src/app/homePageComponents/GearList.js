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

  const addNewCatagory = () => {
    dispatch(addCatagory({}));
  };

  return (
    <div className="pb-20 w-full md:w-11/12 lg:w-10/12 px-2 ">
      {gear &&
        gear.map((item) => (
          <CatagoryList
            name={item.name}
            id={item.id}
            data={item.items}
            key={item.id}
          />
        ))}

      <button
        className="flex items-center text-sm mt-2 text-gr"
        onClick={addNewCatagory}
      >
        <BsPlus /> Add new Catagory
      </button>
      <div className="w-full flex items-center">
        <button className="bg-primary px-4 py-2 text-white mx-auto my-4 text-xl rounded-sm shadow-sm hover:shadow-md duration-200 hover:bg-primary-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default GearList;
