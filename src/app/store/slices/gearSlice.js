import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadState, saveState } from "@/app/utils/localStorage";

let persistedData = loadState();

if (persistedData == undefined) {
  persistedData = [
    {
      name: "The Big Four",
      id: nanoid(),
      items: [
        {
          id: nanoid(),
          name: "",
          description: "",
          price: 0,
          unitOfMeasure: "oz",
          weight: "1",
          qty: 1,
        },
      ],
    },
  ];
}

const gearSlice = createSlice({
  name: "gear",
  initialState: {
    gear: persistedData,
  },
  reducers: {
    addCatagory(state, action) {
      state.gear.push({
        name: "",
        id: nanoid(),
        items: [
          {
            id: nanoid(),
            name: "",
            description: "",
            price: "",
            unitOfMeasure: "oz",
            weight: "",
            qty: 1,
          },
        ],
      });

      saveState(state.gear);
    },
    deleteCatagory(state, action) {
      // assumption
      // action.payload == catagory id
      const updated = state.gear.filter(
        (catagory) => catagory.id !== action.payload
      );
      state.gear = updated;
      saveState(state.gear);
    },
    updateCatagory(state, action) {
      // assumtion
      // action.payload = {catagoryID: id, name: 'new name}

      let objIndex = state.gear.findIndex(
        (obj) => obj.id == action.payload.catagoryID
      );

      state.gear[objIndex].name = action.payload.name;
      saveState(state.gear);
    },
    addItem(state, action) {
      // assumption
      // action.payload {
      // catagoryID: randomID
      // }

      let objIndex = state.gear.findIndex(
        (obj) => obj.id == action.payload.catagoryID
      );
      state.gear[objIndex].items.push({
        id: nanoid(),
        name: "",
        description: "",
        price: null,
        unitOfMeasure: "oz",
        weight: "",
        qty: 1,
      });
      saveState(state.gear);
    },
    deleteItem(state, action) {
      // assumption
      // {
      // catagoryID: id
      // itemID: id
      // }

      let objIndex = state.gear.findIndex(
        (catagory) => catagory.id == action.payload.catagoryID
      );

      state.gear[objIndex].items = state.gear[objIndex].items.filter(
        (item) => item.id != action.payload.itemID
      );
      saveState(state.gear);
    },
    updateItem(state, action) {
      // assumption
      // action.payload == {
      // catagoryID: randomid,
      // itemID: randomID,
      // weight: 12
      // }

      let objIndex = state.gear.findIndex(
        (obj) => obj.id == action.payload.catagoryID
      );
      let itemID = state.gear[objIndex].items.findIndex(
        (obj) => obj.id == action.payload.itemID
      );

      delete action.payload.catagoryID;
      delete action.payload.itemID;

      state.gear[objIndex].items[itemID] = Object.assign(
        state.gear[objIndex].items[itemID],
        action.payload
      );
      saveState(state.gear);
    },
  },
});

export const {
  addCatagory,
  deleteCatagory,
  updateCatagory,
  addItem,
  deleteItem,
  updateItem,
} = gearSlice.actions;
export const gearReducer = gearSlice.reducer;
