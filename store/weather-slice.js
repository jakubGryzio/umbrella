import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: undefined,
    icon: "",
  },
  reducers: {
    isWeatherChanged(state, action) {
      if (state.temperature !== action.payload) {
        state.temperature = action.payload;
      }
    },
    setIconId(state, action) {
      state.icon = action.payload;
    },
  },
});

export default weatherSlice;
