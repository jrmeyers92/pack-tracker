const ExploreCatagoryList = ({ data }) => {
  return (
    <div>
      <div>
        <h5 className="text-lg font-bold mb-2 pb-2 border-b">
          {data.catagory_name}
        </h5>

        {data.items.map((listItem) => (
          <div key={listItem.id} className="flex flex-col">
            <div className="grid grid-cols-5 gap-10">
              <span className="font-extralight mr-2">{listItem.name}</span>
              <span className="font-extralight mr-2 col-span-2">
                {listItem.description}
              </span>
              <span className="mr-2 font-extralight">${listItem.price}</span>
              <span className="font-extralight">
                {listItem.weight}
                {listItem.unitOfMeasure}
              </span>
            </div>
          </div>
        ))}
        <div className="mt-2 border-t pt-2">
          <p>
            <span className="">Catagory Price:</span> ${data.totalCatagoryPrice}
          </p>
          <p>
            <span className="">Catagory Weight:</span>{" "}
            {data.totalCatagoryWeight} oz
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCatagoryList;
