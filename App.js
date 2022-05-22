import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import AppEntry from "./components/AppEntry";

export default function App() {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
}
