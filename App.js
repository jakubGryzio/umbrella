import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapState from "./components/MapState";
import WeatherCondition from "./components/UI/WeatherCondition";
import useLocation from "./components/hooks/useLocation.js";

export default function App() {
  const [travelRoute, isTravelRoute] = useState(false);

  const travelRouteHandler = () => {
    isTravelRoute(true);
  };

  const weatherConditionHandler = () => {
    isTravelRoute(false);
  };

  const location = useLocation();

  let content = <WeatherCondition onTravelRoute={travelRouteHandler} />;

  if (travelRoute) {
    content = (
      <MapState
        location={location}
        onWeatherCondition={weatherConditionHandler}
      />
    );
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
