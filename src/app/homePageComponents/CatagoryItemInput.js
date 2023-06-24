import { useDispatch } from "react-redux";
import { updateItem, deleteItem } from "../store";

const CatagoryItemInput = ({
  id,
  labelText,
  name,
  catagoryID,
  value,
  type,
}) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(
      updateItem({
        catagoryID: catagoryID,
        itemID: id,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    <div className="flex">
      <label htmlFor={`name-${id}`} className="md:hidden mr-2 w-1/2">
        {labelText}:
      </label>
      <input
        className="border md:border-0 md:outline-0 bg-inherit md:hover:ring-2 hover:ring-inset md:hover:ring-pink w-1/2 md:w-full md:w-full py-1 px-2 pl-2"
        type={type}
        name={name}
        id={`name-${id}`}
        placeholder="name"
        onChange={handleInputChange}
        value={value}
      />
    </div>
  );
};

export default CatagoryItemInput;
