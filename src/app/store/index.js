import { configureStore } from "@reduxjs/toolkit";
import {
  gearReducer,
  addCatagory,
  deleteCatagory,
  updateCatagory,
  addItem,
  deleteItem,
  updateItem,
} from "./slices/gearSlice";

const store = configureStore({
  reducer: {
    gear: gearReducer,
  },
});

export {
  store,
  addCatagory,
  deleteCatagory,
  updateCatagory,
  addItem,
  deleteItem,
  updateItem,
};
