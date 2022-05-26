import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: undefined,
    description: "",
  },
  reducers: {
    isWeatherChanged(state, action) {
      if (state.temperature !== action.payload) {
        state.temperature = action.payload;
      }
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export default weatherSlice;
