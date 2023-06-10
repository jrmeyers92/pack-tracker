"use client";

import { updateItem, deleteItem } from "../store";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CatagoryItem = ({ data, key, catagoryID, id, anotherCatagoryID }) => {
  const dispatch = useDispatch();
  console.log(catagoryID);

  const handleDeleteItem = (catagoryID, itemID) => {
    dispatch(deleteItem({ catagoryID: anotherCatagoryID, itemID: id }));
  };

  const handleInputChange = (event) => {
    if (event.target.name == "price") {
      dispatch(
        updateItem({
          catagoryID: catagoryID,
          itemID: data.id,
          [event.target.name]: event.target.value.slice(1),
        })
      );
    } else {
      dispatch(
        updateItem({
          catagoryID: catagoryID,
          itemID: data.id,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  return (
    <tr className="odd:bg-slate-100 odd:hover:bg-slate-200 even:hover:bg-zinc-200 duration-200 text-gray-800 group">
      <td>
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 pl-2"
          type="text"
          name="name"
          placeholder="name"
          onChange={handleInputChange}
          value={data.name}
        />
      </td>
      <td>
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2"
          type="text"
          placeholder="description"
          name="description"
          onChange={handleInputChange}
          value={data.description}
        />
      </td>
      <td>
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2"
          type="text"
          placeholder="price"
          name="price"
          onChange={handleInputChange}
          value={`$${data.price ? data.price : ""}`}
        />
      </td>
      <td>
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2"
          type="number"
          name="weight"
          placeholder="weight"
          value={data.weight}
          onChange={handleInputChange}
        />
      </td>
      <td>
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
      </td>
      <td>
        <input
          className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 ml-2"
          type="number"
          name="qty"
          id=""
          placeholder="Quantity"
          value={data.qty}
          onChange={handleInputChange}
        />
      </td>
      <td className="pr-2">
        <button
          onClick={handleDeleteItem}
          className="flex items-center justify-center"
        >
          <AiOutlineCloseCircle className="text-gray-500 hidden group-hover:block" />
        </button>
      </td>
    </tr>
  );
};

export default CatagoryItem;
