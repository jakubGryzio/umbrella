import React, { useContext, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import WeatherContext from "../../store/weather-context";
import { boldText } from "../constant";

const WeatherInfo = (props) => {
  const weatherCtx = useContext(WeatherContext);

  const weatherInfoHandler = async (location) => {
    const api_key = "eb1a50b360956a4174702fcf42888f4a";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${api_key}`
      );
      const data = await response.json();
      const temp = data.main?.temp;

      weatherCtx.changeWeather(temp);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    weatherInfoHandler(props.location);
  }, []);

  return <Text style={styles.weatherInfoText}>{weatherCtx.temperature}</Text>;
};

const styles = StyleSheet.create({
  weatherInfoText: {
    fontFamily: boldText,
    fontSize: 20,
    marginVertical: 1,
  },
});

export default WeatherInfo;
