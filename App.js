import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapState from "./components/MapState";
import WeatherCondition from "./components/UI/MainScreen/WeatherCondition";
import useLocation from "./components/hooks/useLocation.js";
import LoginForm from "./components/UI/StartScreen/LoginForm";
import WeatherProvider from "./components/store/WeatherProvider";
import WeatherContext from "./components/store/weather-context";

export default function App() {
  const [travelRoute, isTravelRoute] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  const travelRouteHandler = () => {
    isTravelRoute(true);
    setIsLogged(false);
  };

  const weatherConditionHandler = () => {
    isTravelRoute(false);
    setIsLogged(false);
  };

  const loginHandler = () => {
    setIsLogged(false);
  };

  const settingsHandler = () => {
    setIsLogged(true);
  };

  const location = useLocation();

  let content = <LoginForm onLogged={loginHandler} />;

  if (!travelRoute && !isLogged) {
    content = (
      <WeatherCondition
        location={location}
        onTravelRoute={travelRouteHandler}
        onSettings={settingsHandler}
      />
    );
  }

  if (travelRoute && !isLogged) {
    content = (
      <MapState
        location={location}
        onWeatherCondition={weatherConditionHandler}
      />
    );
  }

  return (
    <WeatherProvider>
      <View style={styles.container}>{content}</View>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
