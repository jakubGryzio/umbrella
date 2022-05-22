import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isTravelRoute: false, isSettings: false },
  reducers: {
    goToTravelRoute(state) {
      state.isTravelRoute = true;
    },
    gotToSettings(state) {
      state.isSettings = true;
    },
    goToWeatherCondition(state) {
      state.isTravelRoute = false;
    },
  },
});

export default uiSlice;
