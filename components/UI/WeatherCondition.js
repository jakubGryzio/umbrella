import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  useFonts,
  KumbhSans_700Bold,
  KumbhSans_400Regular,
} from "@expo-google-fonts/kumbh-sans";

const WeatherCondition = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
    KumbhSans_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Something get wrong!</Text>;
  }

  return (
    <View style={styles.page}>
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.weatherInfoText}>Todays weather</Text>
        <Text style={styles.weatherInfoText}>19o</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/main_image.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={props.onTravelRoute}>
          <Text style={styles.button}>Travel Route</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Settings");
          }}
        >
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
    marginVertical: 15,
  },
  weatherInfoText: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 20,
    marginVertical: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
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
