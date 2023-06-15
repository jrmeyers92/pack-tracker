"use client";

import { updateItem, deleteItem } from "../store";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CatagoryItem = ({ data, catagoryID, id, anotherCatagoryID }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem({ catagoryID: anotherCatagoryID, itemID: id }));
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

  return (
    <div className="odd:bg-slate-100 odd:hover:bg-slate-200 even:hover:bg-zinc-200 duration-200 text-gray-800 group grid grid-cols-5">
      <input
        className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 pl-2"
        type="text"
        name="name"
        placeholder="name"
        onChange={handleInputChange}
        value={data.name}
      />
      <input
        className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2"
        type="text"
        placeholder="description"
        name="description"
        onChange={handleInputChange}
        value={data.description}
      />
      <input
        className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2"
        type="number"
        placeholder="price"
        name="price"
        onChange={handleInputChange}
        value={`${data.price ? data.price : ""}`}
      />
      <div className="flex items-center">
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2"
          type="number"
          name="weight"
          placeholder="weight"
          value={data.weight}
          onChange={handleInputChange}
        />
        <select
          name={`unitOfMeasure`}
          id={`unitOfMeasure]`}
          onChange={handleInputChange}
          className="outline-0 bg-inherit w-full hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 mr-4"
        >
          <option selected={data.unitOfMeasure == "g" ? true : false} value="g">
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
      <div className="flex justify-between items-center">
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 ml-2"
          type="number"
          name="qty"
          id=""
          placeholder="Quantity"
          value={data.qty}
          onChange={handleInputChange}
        />
        <button
          onClick={handleDeleteItem}
          className="flex items-center justify-center"
        >
          <AiOutlineCloseCircle className="text-gray-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto mr-2" />
        </button>
      </div>
    </div>
  );
};

export default CatagoryItem;
