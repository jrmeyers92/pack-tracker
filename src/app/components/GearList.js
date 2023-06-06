"use client";

import CatagoryList from "./CatagoryList";
import { data } from "../../../data1";

const GearList = () => {
  console.log(data);

  return (
    <div>
      <CatagoryList name={data.name} id={data.id} data={data.items} />
    </div>
  );
};

export default GearList;
