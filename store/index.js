import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import authSlice from "./auth-slice";
import weatherSlice from "./weather-slice";
import routeSlice from "./route-slice";
import clothesSlice from "./clothes-slice";

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    route: routeSlice.reducer,
    clothes: clothesSlice.reducer,
  },
});

export default store;
