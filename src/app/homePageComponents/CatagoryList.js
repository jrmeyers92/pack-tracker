"use client";

import CatagoryItem from "./CatagoryItem";
import { BsPlus, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateCatagory, addItem, deleteCatagory } from "../store";
import { useEffect, useState } from "react";
import { calculatePrice, calculateCatagoryWeight } from "../utils/calculations";

const CatagoryList = ({ name, data, id }) => {
  const dispatch = useDispatch();
  const [totalCost, setTotalCost] = useState(0);
  const [qty, setQty] = useState(0);
  const [weight, setWeight] = useState(0);
  const [itemsShowing, setItemsShowing] = useState(true);

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

    data.forEach((item) => {
      if (item.qty) {
        qty += parseInt(item.qty);
      }
    });

    setQty(qty);
    setTotalCost(calculatePrice(data));
    setWeight(calculateCatagoryWeight(data));
  }, [data]);

  return (
    <section className="border-b mb-4 text-gray-800">
      <div className="flex justify-between mb-2">
        <button onClick={handleDeleteCatagory}>
          <AiOutlineCloseCircle className="text-gray-500 mr-4 text-xl" />
        </button>
        <input
          type="text"
          name="catagoryName"
          id={id}
          value={name}
          onChange={handleNameChange}
          placeholder="Catagory Name"
          className={`flex-1 outline-0 p-2 mr-8 text-2xl ${
            itemsShowing && "border-b"
          }`}
        />

        {itemsShowing && (
          <button onClick={() => setItemsShowing(!itemsShowing)}>
            <BsChevronDown className="text-gray-500 mr-2" />
          </button>
        )}

        {!itemsShowing && (
          <button onClick={() => setItemsShowing(!itemsShowing)}>
            <BsChevronUp className="text-gray-500 mr-2" />
          </button>
        )}
      </div>

      {itemsShowing && (
        <div>
          <div className="hidden md:grid grid-cols-6">
            <div className="text-left text-sm text-gray-600 pl-2">Brand</div>
            <div className="text-left text-sm text-gray-600 pl-2">Model</div>
            <div className="text-left text-sm text-gray-600 pl-2">
              Description
            </div>
            <div className="text-left text-sm text-gray-600 pl-2">Price</div>
            <div className="text-left text-sm text-gray-600 pl-2">Weight</div>
            <div className="text-left">Qty</div>
          </div>
          <div>
            {data.map((item) => (
              <CatagoryItem
                key={item.id}
                data={item}
                catagoryID={id}
                id={item.id}
                itemsShowing={itemsShowing}
              />
            ))}
          </div>
          <div className="mt-2 hidden md:grid grid-cols-6 ">
            <button
              className="flex items-center text-sm mt-2 pb-4 text-gray-600 col-span-3"
              onClick={addNewItem}
            >
              <BsPlus /> Add new Item
            </button>
            <div className=" font-bold pl-2">${totalCost}</div>
            <div className="font-bold">{weight} oz</div>
            <div className="pl-4 font-bold">{qty}</div>
          </div>

          <div className="md:hidden flex flex-col border-t py-4">
            <div className=" flex items-center">
              <span className="w-[65%] font-bold">Total Cost:</span>{" "}
              <span>${totalCost}</span>
            </div>
            <div className="flex items-center">
              <span className="w-[65%] font-bold">Total Weight: </span>
              {weight} oz
            </div>
            <div className="flex items-center">
              <span className="w-[65%] font-bold">Total Quantity:</span>{" "}
              <span>{qty}</span>
            </div>
            <button
              className="flex items-center text-sm mt-2 pb-4 text-gray-600 col-span-2"
              onClick={addNewItem}
            >
              <BsPlus /> Add new Item
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CatagoryList;
