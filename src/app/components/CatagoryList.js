"use client";

import CatagoryItem from "./CatagoryItem";
import { BsPlus } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateCatagory, addItem, deleteCatagory } from "../store";
import { useEffect, useState } from "react";
import { lbToOz, kgToOz, gramToOz } from "../utils/weightConversion";
import { calculatePrice, calculateWeight } from "../utils/calculations";

const CatagoryList = ({ name, data, id }) => {
  const dispatch = useDispatch();
  const [totalCost, setTotalCost] = useState(0);
  const [qty, setQty] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleNameChange = (event) => {
    dispatch(updateCatagory({ catagoryID: id, name: event.target.value }));
  };

  const handleDeleteCatagory = () => {
    dispatch(deleteCatagory({ catagoryID: id }));
  };

  const addNewItem = (event) => {
    dispatch(addItem({ catagoryID: id }));
  };

  useEffect(() => {
    let qty = 0;
    let weight = 0;

    data.forEach((item) => {
      if (item.qty) {
        qty += parseInt(item.qty);
      }
    });

    setQty(qty);
    setTotalCost(calculatePrice(data));
    setWeight(calculateWeight(data));
  }, [data]);

  return (
    <section className="border-b mb-4 text-gray-800">
      <div className="group flex justify-between">
        <input
          type="text"
          name="catagoryName"
          id={id}
          value={name}
          onChange={handleNameChange}
          placeholder="Catagory Name"
          className="flex-1 outline-0 p-2 mr-8 text-2xl hover:ring-1 active:ring-1 ring-gray-200 hover:bg-gray-100 active:gray-100"
        />
        <button onClick={handleDeleteCatagory}>
          <AiOutlineCloseCircle className="text-gray-500 hidden group-hover:block" />
        </button>
      </div>
      <div>
        <div className="grid grid-cols-5">
          <div className="text-left text-sm text-gray-600 pl-2">Item</div>
          <div className="text-left text-sm text-gray-600">Description</div>
          <div className="text-left text-sm text-gray-600">Price</div>
          <div className="text-left text-sm text-gray-600" colSpan={2}>
            Weight
          </div>
          <div className="text-left">Qty</div>
        </div>
        <div>
          {data.map((item) => (
            <CatagoryItem
              data={item}
              key={item.id}
              catagoryID={id}
              id={item.id}
              anodiverCatagoryID={id}
            />
          ))}
        </div>
        <div className="mt-2 grid grid-cols-5">
          <button
            className="flex items-center text-sm mt-2 pb-4 text-gray-600 col-span-2"
            onClick={addNewItem}
          >
            <BsPlus /> Add new Item
          </button>
          <div className=" font-bold pl-2">${totalCost}</div>
          <div className="font-bold">{weight} oz</div>
          <div className="pl-4 font-bold">{qty}</div>
        </div>
      </div>
    </section>
  );
};

export default CatagoryList;
