import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: "route",
  initialState: {
    start: "",
    end: "",
  },
  reducers: {
    setStartPoint(state, action) {
      state.start = action.payload;
    },
    setEndPoint(state, action) {
      state.end = action.payload;
    },
  },
});

export default routeSlice;
