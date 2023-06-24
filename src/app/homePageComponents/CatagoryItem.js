"use client";

import { updateItem, deleteItem } from "../store";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CatagoryItemInput from "./CatagoryItemInput";

const CatagoryItem = ({ data, catagoryID, id, itemsShowing }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem({ catagoryID: catagoryID, itemID: id }));
  };

  const handleInputChange = (event) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        [event.target.name]: event.target.value,
      })
    );
  };

  if (itemsShowing) {
    return (
      <div className="md:odd:bg-slate-100 md:odd:hover:bg-slate-200 md:even:hover:bg-zinc-200 duration-200 text-gray-800 group grid grid-cols-1 md:grid-cols-5">
        <CatagoryItemInput
          id={id}
          labelText="Item Name"
          name="name"
          catagoryID={catagoryID}
          value={data.name}
          type="text"
        />

        <CatagoryItemInput
          id={id}
          labelText="Item description"
          name="description"
          catagoryID={catagoryID}
          value={data.description}
          type="text"
        />

        <CatagoryItemInput
          id={id}
          labelText="Price"
          name="price"
          catagoryID={catagoryID}
          value={data.price ? data.price : ""}
          type="number"
        />

        <div className="md:flex items-center">
          <div className="flex">
            <label htmlFor={`weight-${id}`} className="md:hidden mr-2 w-1/2">
              Weight:
            </label>
            <input
              className="border md:border-0 md:outline-0 bg-inherit md:hover:ring-2 hover:ring-inset md:hover:ring-pink w-1/2 md:w-full py-1 px-2"
              type="number"
              id={`weight-${id}`}
              name="weight"
              placeholder="weight"
              value={data.weight}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex">
            <label htmlFor={`uom-${id}`} className="md:hidden mr-2 w-1/2">
              Unit Of Measure:
            </label>
            <select
              name={`unitOfMeasure`}
              id={`uom-${id}`}
              onChange={handleInputChange}
              className="border md:border-0 md:outline-0 bg-inherit md:hover:ring-2 hover:ring-inset md:hover:ring-pink w-1/2 md:w-full py-1 px-2"
            >
              <option
                selected={data.unitOfMeasure == "g" ? true : false}
                value="g"
              >
                g
              </option>
              <option
                selected={data.unitOfMeasure == "oz" ? true : false}
                value="oz"
              >
                oz
              </option>
              <option
                selected={data.unitOfMeasure == "lb" ? true : false}
                value="lb"
              >
                lb
              </option>
              <option
                selected={data.unitOfMeasure == "kg" ? true : false}
                value="kg"
              >
                kg
              </option>
            </select>
          </div>
        </div>
        <div className="md:flex md:justify-between md:items-center">
          <CatagoryItemInput
            id={id}
            labelText="Quantity"
            name="qty"
            value={data.qty}
            catagoryID={catagoryID}
          />

          <button
            onClick={handleDeleteItem}
            className="flex items-center justify-center hidden md:flex"
          >
            <AiOutlineCloseCircle className="text-gray-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto mr-2" />
          </button>
        </div>
      </div>
    );
  } else {
  }
};

export default CatagoryItem;
