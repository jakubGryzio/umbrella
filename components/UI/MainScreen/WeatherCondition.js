import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import { StatusBar } from "react-native";
import WeatherInfoContainer from "./WeatherInfoContainer";
import { boldText } from "../constant";
import { useDispatch } from "react-redux";
import uiSlice from "../../../store/ui-slice";
import authSlice from "../../../store/auth-slice";

const WeatherCondition = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });
  const dispatch = useDispatch();

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  const travelRouteHandler = () => {
    dispatch(uiSlice.actions.goToTravelRoute());
  };

  const settingsHandler = () => {
    dispatch(authSlice.actions.logOut());
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#E5EAEA" barStyle="light-content" />
      <WeatherInfoContainer location={props.location} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/main_image-removebg-preview.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={travelRouteHandler}>
          <Text style={styles.button}>Travel Route</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={settingsHandler}>
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
    fontFamily: boldText,
    fontSize: 18,
  },
});
export default WeatherCondition;
