"use client";

import Catagory from "./Catagory";
import { useState } from "react";

const GearList = () => {
  const [catagoryListItems, setCatagroyListItems] = useState([
    <Catagory key="0" id="" />,
  ]);

  return <div className="w-full">{catagoryListItems.map((item) => item)}</div>;
};

export default GearList;
