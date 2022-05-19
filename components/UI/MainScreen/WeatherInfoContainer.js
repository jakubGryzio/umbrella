import React from "react";
import { View, StyleSheet, Text } from "react-native";
import WeatherInfo from "./WeatherInfo";
import { boldText } from "../constant";

const WeatherInfoContainer = (props) => {
  return (
    <React.Fragment>
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
    flexDirection: "row",
    alignItems: "flex-start",
    lineHeight: 18,
  },
});

export default WeatherInfoContainer;
