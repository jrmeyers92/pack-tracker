import { createSlice, nanoid } from "@reduxjs/toolkit";

const gearSlice = createSlice({
  name: "gear",
  initialState: {
    gear: [
      {
        name: "The Big Four",
        id: nanoid(),
        items: [
          {
            id: nanoid(),
            name: "backpack",
            descritption: "my fav backpack",
            unitOfMeasure: "oz",
            weight: "24",
            qty: 1,
          },
          {
            id: nanoid(),
            name: "quilt",
            descritption: "EE quilt",
            unitOfMeasure: "oz",
            weight: "18",
            qty: 1,
          },
          {
            id: nanoid(),
            name: "pad",
            descritption: "neo air xlite",
            unitOfMeasure: "oz",
            weight: "14",
            qty: 1,
          },
        ],
      },
    ],
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
            descritption: "",
            unitOfMeasure: "oz",
            weight: "",
            qty: 1,
          },
        ],
      });
    },
    deleteCatagory(state, action) {
      // assumption
      // action.payload == catagory id
      const updated = state.gear.filter(
        (catagory) => catagory.id !== action.payload
      );
      state.gear = updated;
    },
    updateCatagory(state, action) {
      // assumtion
      // action.payload = {catagoryID: id, name: 'new name}

      let objIndex = state.gear.findIndex(
        (obj) => obj.id == action.payload.catagoryID
      );

      state.gear[objIndex].name = action.payload.name;
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
        descritption: "",
        unitOfMeasure: "oz",
        weight: "",
        qty: 1,
      });
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
