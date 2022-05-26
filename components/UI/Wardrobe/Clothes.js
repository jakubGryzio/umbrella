import React from "react";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import { View, StyleSheet, Text, Image } from "react-native";
import { boldText } from "../constant";
import images from "./images";

const Clothes = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <View style={styles.clothesContainer}>
      <View style={styles.icon}>
        <Image style={styles.iconImage} source={props.source} />
      </View>
      <View style={styles.brand}>
        <Image style={styles.brandImage} source={props.brand} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.brandName}>{props.brandName}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clothesContainer: {
    flexDirection: "row",
    borderColor: "#C4C4C4",
    borderTopWidth: 3,
  },
  icon: {
    flex: 1,
    borderRightWidth: 3,
    alignItems: "center",
    borderColor: "#C4C4C4",
    padding: 5,
    width: 80,
    height: 80,
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  brand: {
    flex: 1,
    alignItems: "center",
    borderColor: "#C4C4C4",
    width: 80,
    height: 80,
  },
  brandImage: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    flex: 3,
    paddingTop: 15,
    paddingLeft: 25,
  },
  description: {
    fontFamily: boldText,
    fontSize: 12,
  },
  brandName: {
    fontFamily: boldText,
    fontSize: 18,
  },
});

export default Clothes;
