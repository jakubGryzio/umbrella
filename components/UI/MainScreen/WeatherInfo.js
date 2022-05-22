import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import weatherSlice from "../../../store/weather-slice";
import { boldText } from "../constant";

const WeatherInfo = (props) => {
  const dispatch = useDispatch();
  const temperature = useSelector((state) => state.weather.temperature);

  const weatherInfoHandler = async (location) => {
    const api_key = "eb1a50b360956a4174702fcf42888f4a";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${api_key}`
      );
      const data = await response.json();
      const temp = data.main?.temp.toFixed();

      dispatch(weatherSlice.actions.isWeatherChanged(temp));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    weatherInfoHandler(props.location);
  }, []);

  return <Text style={styles.weatherInfoText}>{temperature}</Text>;
};

const styles = StyleSheet.create({
  weatherInfoText: {
    fontFamily: boldText,
    fontSize: 20,
    marginVertical: 1,
  },
});

export default WeatherInfo;
