import { updateItem, deleteItem } from "../store";
import { useDispatch } from "react-redux";

const CatagoryItem = ({ data, catagoryID, id }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem({ catagoryID: catagoryID, itemID: id }));
  };

  const handleInputChange = (event) => {
    console.log(event.target.name);
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <>
      <tr className="odd:bg-slate-100 odd:hover:bg-slate-200 even:hover:bg-zinc-200 duration-200 text-gray-800">
        <td>
          <input
            className="outline-0 bg-inherit hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 pl-2"
            bg-inherit
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
            bg-inherit
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
            type="number"
            name="weight"
            placeholder="weight"
            value={data.weight}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <select
            name={`unitOfMeasure-${data.id}`}
            id={`unitOfMeasure-${data.id}`}
            onChange={handleInputChange}
            className="outline-0 bg-inherit w-full hover:ring-2 hover:ring-inset hover:ring-pink py-1 px-2 mr-4"
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
        {/* <button onClick={handleDeleteItem}>XXX</button> */}
      </tr>
    </>
  );
};

export default CatagoryItem;
