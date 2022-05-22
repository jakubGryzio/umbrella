import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapState from "./Map/MapState";
import WeatherCondition from "./UI/MainScreen/WeatherCondition";
import useLocation from "./hooks/useLocation";
import LoginForm from "./UI/StartScreen/LoginScreen/LoginForm";
import "../config/firebase";
import { useSelector } from "react-redux";

const AppEntry = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const travelRoute = useSelector((state) => state.ui.isTravelRoute);

  const location = useLocation();

  let content = <LoginForm />;

  if (!travelRoute && isLogged) {
    content = <WeatherCondition location={location} />;
  }

  if (travelRoute && isLogged) {
    content = <MapState location={location} />;
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppEntry;
