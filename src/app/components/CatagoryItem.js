const CatagoryItem = () => {
  return (
    <li className="p-2 w-full flex justify-between">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="description" />
      <select name="unitOfMeasure" id="unitOfMeasure">
        <option value="gram">g</option>
        <option value="oz">oz</option>
        <option value="lb">lb</option>
        <option value="kg">kg</option>
      </select>
      <input type="number" name="qty" id="" placeholder="Quantity" />
    </li>
  );
};

export default CatagoryItem;
