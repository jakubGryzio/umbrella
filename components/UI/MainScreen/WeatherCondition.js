import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  useFonts,
  KumbhSans_700Bold,
  KumbhSans_400Regular,
} from "@expo-google-fonts/kumbh-sans";
import { StatusBar } from "react-native";
import WeatherInfo from "./WeatherInfo";

const WeatherCondition = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
    KumbhSans_400Regular,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#E5EAEA" barStyle="light-content" />
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.weatherInfoText}>Todays weather</Text>
      </View>
      <View style={styles.weatherInfoContainer}>
        <WeatherInfo location={props.location} />
        <Text style={styles.weatherInfoText_}> o</Text>
        <Text style={styles.weatherInfoText}>C</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/main_image-removebg-preview.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={props.onTravelRoute}>
          <Text style={styles.button}>Travel Route</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onSettings}>
          <Text style={styles.button}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 36,
    paddingRight: 36,
  },
  weatherInfoContainer: {
    marginVertical: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  weatherInfoText: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 20,
    marginVertical: 1,
  },
  weatherInfoText_: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 11,
    flexDirection: "row",
    alignItems: "flex-start",
    lineHeight: 18,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "78%",
  },
  image: {
    width: "80%",
    height: "90%",
    borderRadius: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 18,
  },
});
export default WeatherCondition;
