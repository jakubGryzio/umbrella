import { createSlice } from "@reduxjs/toolkit";

const clothesSlice = createSlice({
  name: "clothes",
  initialState: { clothes: [] },
  reducers: {
    setClothes(state, action) {
      state.clothes = action.payload;
    },
  },
});

export default clothesSlice;
