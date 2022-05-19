import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapState from "./components/Map/MapState";
import WeatherCondition from "./components/UI/MainScreen/WeatherCondition";
import useLocation from "./components/hooks/useLocation";
import LoginForm from "./components/UI/StartScreen/LoginScreen/LoginForm";
import WeatherProvider from "./components/store/WeatherProvider";
import app from "./database/realmApp";

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

  const loginHandler = async () => {
    setIsLogged(false);

    const credentials = Realm.Credentials.emailPassword(
      "admin@umbrella.com",
      "admin"
    );
    try {
      const user = await app.logIn(credentials);
      console.log("Successfully logged in!", user.id);
      return user;
    } catch (err) {
      console.error("Failed to log in", err.message);
    }
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
