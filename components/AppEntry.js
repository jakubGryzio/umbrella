import React from "react";
import { StyleSheet, View } from "react-native";
import MapState from "./Map/MapState";
import WeatherCondition from "./UI/MainScreen/WeatherCondition";
import useLocation from "./hooks/useLocation";
import LoginForm from "./UI/StartScreen/LoginScreen/LoginForm";
import ClothesProposition from "./UI/Wardrobe/ClothesProposition";
import RegForm from "./UI/StartScreen/RegisterScreen/RegForm";
import "../config/firebase";
import { useSelector } from "react-redux";
import Settings from "./UI/SettingsScreen/Settings";

const AppEntry = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isTravelRoute = useSelector((state) => state.ui.isTravelRoute);
  const isWeatherCondition = useSelector(
    (state) => state.ui.isWeatherCondition
  );
  const isClothesProposition = useSelector(
    (state) => state.ui.isClothesProposition
  );
  const isSettings = useSelector((state) => state.ui.isSettings);
  const isRegistrationFrom = useSelector(
    (state) => state.ui.isRegistrationFrom
  );

  const location = useLocation();

  let content = <LoginForm />;

  if (isRegistrationFrom && !isLogged) {
    content = <RegForm />;
  }

  if (isWeatherCondition && isLogged) {
    content = <WeatherCondition location={location} />;
  }

  if (isTravelRoute && isLogged) {
    content = <MapState location={location} />;
  }

  if (isClothesProposition && isLogged) {
    content = <ClothesProposition />;
  }

  if (isSettings && isLogged) {
    content = <Settings />;
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppEntry;
