import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogged: false },
  reducers: {
    signIn(state) {
      state.isLogged = true;
    },
    logOut(state) {
      state.isLogged = false;
    },
  },
});

export default authSlice;
