import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import { boldText } from "../constant";

const FeatureButton = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Image style={styles.image} source={props.imageName}></Image>
      <Text style={styles.textStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    height: 55,
    marginVertical: 10,
  },
  image: {
    height: "70%",
    width: "8%",
    marginRight: 10,
    resizeMode: "contain",
  },
  textStyle: {
    textAlignVertical: "center",
    fontSize: 17,
    fontFamily: boldText,
  },
});

export default FeatureButton;
