import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: undefined,
  },
  reducers: {
    isWeatherChanged(state, action) {
      if (state.temperature !== action.payload) {
        state.temperature = action.payload;
      }
    },
  },
});

export default weatherSlice;
