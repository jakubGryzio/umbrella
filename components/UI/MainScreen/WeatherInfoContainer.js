import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import WeatherInfo from "./WeatherInfo";
import { useSelector } from "react-redux";
import { boldText } from "../constant";
import Images from "./images";

const setIconFromWeather = (value) => {
  const weatherDictionary = {
    Rain: "rain",
    Snow: "snow",
    Drizzle: "rain",
    Thunderstorm: "rain",
    Clear: "sun",
    Clouds: "cloud",
  };

  const iconDescription = weatherDictionary[`${value}`];
  return iconDescription;
};

const WeatherInfoContainer = (props) => {
  const description = useSelector((state) => state.weather.description);
  const icon = setIconFromWeather(description);

  return (
    <React.Fragment>
      <View style={styles.weatherIconContainer}>
        {icon && <Image source={Images[`${icon}`]} />}
      </View>
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.weatherInfoText}>Todays weather</Text>
      </View>
      <View style={styles.weatherInfoContainer}>
        <WeatherInfo location={props.location} />
        <Text style={styles.weatherInfoText_}> o</Text>
        <Text style={styles.weatherInfoText}>C</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  weatherInfoContainer: {
    marginVertical: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  weatherInfoText: {
    fontFamily: boldText,
    fontSize: 20,
    marginVertical: 1,
  },
  weatherInfoText_: {
    fontFamily: boldText,
    fontSize: 11,
    lineHeight: 18,
  },
  weatherIconContainer: {
    position: "absolute",
    right: 50,
    top: 53,
  },
});

export default WeatherInfoContainer;
