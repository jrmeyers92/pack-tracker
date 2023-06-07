import { updateItem } from "../store";
import { useDispatch } from "react-redux";

const CatagoryItem = ({ data, catagoryID, id }) => {
  const unitsOfMeasure = ["oz", "g", "lb", "kg"];

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        name: event.target.value,
      })
    );
  };

  const handleDescriptionChange = (event) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        descritption: event.target.value,
      })
    );
  };

  const handleWeightChange = (event) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        weight: event.target.value,
      })
    );
  };

  const handleUOMChange = (event) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        unitOfMeasure: event.target.value,
      })
    );
  };

  const handleQtyChange = (event) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: data.id,
        qty: event.target.value,
      })
    );
  };

  return (
    <li className="p-2 w-full flex justify-between border-b">
      <input
        className="outline-0"
        type="text"
        name="name"
        placeholder="name"
        onChange={handleNameChange}
        value={data.name}
      />
      <input
        className="outline-0"
        type="text"
        placeholder="description"
        onChange={handleDescriptionChange}
        value={data.descritption}
      />
      <input
        className="outline-0"
        type="number"
        placeholder="weight"
        value={data.weight}
        onChange={handleWeightChange}
      />
      <select
        name={`unitOfMeasure-${data.id}`}
        id={`unitOfMeasure-${data.id}`}
        onChange={handleUOMChange}
      >
        <option selected={data.unitOfMeasure == "g" ? true : false} value="g">
          g
        </option>
        <option selected={data.unitOfMeasure == "oz" ? true : false} value="oz">
          oz
        </option>
        <option selected={data.unitOfMeasure == "lb" ? true : false} value="lb">
          lb
        </option>
        <option selected={data.unitOfMeasure == "kg" ? true : false} value="kg">
          kg
        </option>
      </select>
      <input
        className="outline-0 ml-2"
        type="number"
        name="qty"
        id=""
        placeholder="Quantity"
        value={data.qty}
        className="ml-2"
        onChange={handleQtyChange}
      />
    </li>
  );
};

export default CatagoryItem;
