const CatagoryItem = ({ data }) => {
  const unitsOfMeasure = ["oz", "g", "lb", "kg"];

  return (
    <li className="p-2 w-full flex justify-between border-b">
      <input
        className="outline-0"
        type="text"
        placeholder="name"
        value={data.name}
      />
      <input
        className="outline-0"
        type="text"
        placeholder="description"
        value={data.descritption}
      />
      <input
        className="outline-0"
        type="number"
        placeholder="weight"
        value={data.weight}
      />
      <select name={`unitOfMeasure-${data.id}`} id={`unitOfMeasure-${data.id}`}>
        {unitsOfMeasure.map((unit) => {
          return (
            <option
              value={unit}
              selected={unit == data.unitOfMeasure ? true : false}
              key={unit}
            >
              {unit}
            </option>
          );
        })}
      </select>
      <input
        className="outline-0 ml-2"
        type="number"
        name="qty"
        id=""
        placeholder="Quantity"
        value={data.qty}
      />
    </li>
  );
};

export default CatagoryItem;
