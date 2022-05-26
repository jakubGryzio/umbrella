import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isRegistrationFrom: false,
  isLoginForm: false,
  isTravelRoute: false,
  isSettings: false,
  isClothesProposition: false,
  isWeatherCondition: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    goToTravelRoute(state) {
      state.isTravelRoute = true;
      state.isWeatherCondition = false;
      state.isClothesProposition = false;
    },
    gotToSettings(state) {
      state.isSettings = true;
      state.isClothesProposition = false;
      state.isWeatherCondition = false;
    },
    goToWeatherCondition(state) {
      state.isWeatherCondition = true;
      state.isTravelRoute = false;
      state.isClothesProposition = false;
      state.isSettings = false;
      state.isRegistrationFrom = false;
    },
    goToClothesProposition(state) {
      state.isClothesProposition = true;
    },
    goToRegistrationForm(state) {
      state.isRegistrationFrom = true;
      state.isLoginForm = false;
    },
    goToLoginFrom(state) {
      state.isLoginForm = true;
      state.isRegistrationFrom = false;
    },
  },
});

export default uiSlice;
