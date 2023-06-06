import { createSlice, nanoid } from "@reduxjs/toolkit";

const catagorySlice = createSlice({
  name: "catagory",
  initialState: {
    catagories: [],
  },
  reducers: {
    addCatagory(state, action) {
      // assumption
      // action.payload === {name: "big four"}

      state.catagories.push({
        name: action.payload.name,
        id: nanoid(),
      });
    },
    deleteCatagory(state, action) {
      // assumption
      // action.payload === the id of the catagory we want to remove
      const updated = state.catagories.filter((catagory) => {
        catagory.id !== action.payload;
      });

      state.catagories = updated;
    },
    updateCatagory(state, actione) {},
  },
});

export const { addCatagory, deleteCatagory, updateCatagory } =
  catagorySlice.actions;
export const catagoryReducer = catagorySlice.reducer;
