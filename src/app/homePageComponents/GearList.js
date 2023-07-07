"use client";

import { useSelector } from "react-redux";
import CatagoryList from "./CatagoryList";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCatagory } from "../store";
import { useEffect, useState } from "react";
import {
  ozToLbAndOz,
  calculateTotalWeight,
  lbToOz,
} from "../utils/calculations";

const GearList = () => {
  const dispatch = useDispatch();
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const gear = useSelector((state) => {
    return state.gear.gear;
  });

  console.log(gear);

  useEffect(() => {
    let weight = 0;
    let price = 0;

    gear.forEach((list) => {
      list.items.forEach((item) => {
        if (item.price) {
          price += parseInt(item.price);
        }

        if (item.weight) {
          weight += parseInt(item.weight);
        }
      });
    });

    setTotalWeight(weight);
    setTotalPrice(price);
  }, [gear]);

  const addNewCatagory = () => {
    dispatch(addCatagory({}));
  };

  return (
    <div className="pb-20 w-full container px-2">
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
      {/* <div className="w-full flex items-center">
        <button className="bg-primary px-4 py-2 text-white mx-auto my-4 text-xl rounded-sm shadow-sm hover:shadow-md duration-200 hover:bg-primary-600">
          Save
        </button>
      </div> */}
      <div className="flex my-4">
        <div className="mx-2">
          Total Weight: &nbsp;
          <span className="font-bold">
            {ozToLbAndOz(calculateTotalWeight(gear))}
          </span>
        </div>
        <div className="mx-2">
          Total Price: &nbsp;<span className="font-bold">${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default GearList;
