import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import WeatherInfo from "./WeatherInfo";
import { useSelector } from "react-redux";
import { boldText } from "../constant";

const WeatherInfoContainer = (props) => {
  const icon = useSelector((state) => state.weather.icon);
  return (
    <React.Fragment>
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.weatherInfoText}>Todays weather</Text>
      </View>
      <Image
        style={styles.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${icon}.png`,
        }}
      />
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
  icon: {
    width: 40,
    height: 40,
  },
});

export default WeatherInfoContainer;
