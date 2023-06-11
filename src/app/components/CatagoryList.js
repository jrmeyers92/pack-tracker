"use client";

import CatagoryItem from "./CatagoryItem";
import { BsPlus } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateCatagory, addItem, deleteCatagory } from "../store";
import { useEffect, useState } from "react";
import { lbToOz, kgToOz, gramToOz } from "../utils/weightConversion";

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
    let cost = 0;
    let qty = 0;
    let weight = 0;

    data.forEach((item) => {
      if (item.price != null || item.price != "") {
        cost += parseInt(item.price);
      }

      if (isNaN(cost)) {
        cost = 0;
      }

      if (item.qty) {
        qty += parseInt(item.qty);
      }

      if (item.weight) {
        if (item.unitOfMeasure == "g") {
          weight += gramToOz(parseInt(item.weight));
        } else if (item.unitOfMeasure == "kg") {
          weight += kgToOz(parseInt(item.weight));
        } else if (item.unitOfMeasure == "lb") {
          weight += lbToOz(parseInt(item.weight));
        } else {
          weight += parseInt(item.weight);
        }
      }
    });

    // round to two decimal places
    weight = Math.round(weight * 100) / 100;

    setQty(qty);
    setTotalCost(cost);
    setWeight(weight);
  }, [data]);

  return (
    <table className="border-b mb-4 text-gray-800 overflow-x-auto">
      <thead>
        <tr className="group flex">
          <th>
            <input
              type="text"
              name="catagoryName"
              id={id}
              value={name}
              onChange={handleNameChange}
              placeholder="Catagory Name"
              className="flex-1 outline-0 p-2 mr-8 text-2xl hover:ring-1 active:ring-1 ring-gray-200 hover:bg-gray-100 active:gray-100"
            />
          </th>
          <th
            colSpan={2}
            className="flex items-center justify-center text-right"
          >
            <button onClick={handleDeleteCatagory}>
              <AiOutlineCloseCircle className="text-gray-500 hidden group-hover:block" />
            </button>
          </th>
        </tr>
        <tr>
          <th className="text-left text-sm text-gray-600 pl-2">Item</th>
          <th className="text-left text-sm text-gray-600">Description</th>
          <th className="text-left text-sm text-gray-600">Price</th>
          <th className="text-left text-sm text-gray-600" colSpan={2}>
            Weight
          </th>
          <th className="text-left">Qty</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <CatagoryItem
            data={item}
            key={item.id}
            catagoryID={id}
            id={item.id}
            anotherCatagoryID={id}
          />
        ))}
      </tbody>
      <tfoot>
        <tr className="mt-2">
          <td>
            <button
              className="flex items-center text-sm mt-2 pb-4 text-gray-600"
              onClick={addNewItem}
            >
              <BsPlus /> Add new Item
            </button>
          </td>
          <td></td>
          <td className=" font-bold pl-2">${totalCost}</td>
          <td className="font-bold">{weight} oz</td>
          <td></td>
          <td className="pl-4 font-bold">{qty}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CatagoryList;
