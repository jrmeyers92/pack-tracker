import { createSlice, nanoid } from "@reduxjs/toolkit";

const gearSlice = createSlice({
  name: "gear",
  initialState: {
    gear: [
        {
            name: "Big Four",
            id: "1",
            items: [
              {
                id: "2",
                name: "backpack",
                descritption: "my fav backpack",
                unitOfMeasure: "oz",
                weight: "24",
                qty: 1,
              },
              {
                id: "3",
                name: "quilt",
                descritption: "EE quilt",
                unitOfMeasure: "oz",
                weight: "18",
                qty: 1,
              },
              {
                id: "4",
                name: "pad",
                descritption: "neo air xlite",
                unitOfMeasure: "oz",
                weight: "14",
                qty: 1,
              },
            ],
          }
    ]
  }
  reducers: {
    addCatagory(state, action) {
        // assumption 
        // action.payload === "the big four"
        state.gear.push({
            name: action.payload,
            id: nanoid(),
            items: []
        })
    },
    deleteCatagory(state, action) {
        // assumption
        // action.payload == catagory id
        const updated = state.gear.filter(catagory => catagory.id !== action.payload)
        state.gear = updated;
    },
    updateCatagory(state, actione) {},
    addItem(state, action) {
        // assumption 
        // action.payload {
            // catagoryID: randomID
            // name: "pad",
            // descritption: "neo air xlite",
            // unitOfMeasure: "oz",
            // weight: "14",
            // qty: 1,
        // }
        
    //    const selectedCatagory = state.gear.filter(catagory => catagory.id == action.payload.id)
    //    selected
    },
    deleteItem(state, action) {},
    updateItem(state, action) {},
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
