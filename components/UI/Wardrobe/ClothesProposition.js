import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import { boldText } from "../constant";
import images from "./images";
import Clothes from "./Clothes";
import { useDispatch } from "react-redux";
import uiSlice from "../../../store/ui-slice";

const ClothesProposition = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  const dispatch = useDispatch();

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  const weatherConditionHandler = () => {
    dispatch(uiSlice.actions.goToWeatherCondition());
  };

  const travelRouteHandler = () => {
    dispatch(uiSlice.actions.goToTravelRoute());
  };

  const settingsHandler = () => {
    dispatch(uiSlice.actions.gotToSettings());
  };

  return (
    <View style={styles.page}>
      <View style={styles.navContainer}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={weatherConditionHandler}>
            <Image style={styles.arrowImage} source={images.arrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.wardrobe}>
          <TouchableOpacity>
            <Image style={styles.wardrobeImage} source={images.wardrobe} />
          </TouchableOpacity>
        </View>
      </View>
      <Clothes
        source={images.clothes.cap}
        brand={images.brand.cap}
        brandName="Polo Ralph Lauren"
        description="Bawełniana czapka z daszkiem"
      />
      <Clothes
        source={images.clothes.hoodie}
        brand={images.brand.hoodie}
        brandName="Weekday"
        description="Bawełniana bluza z kapturem"
      />
      <Clothes
        source={images.clothes.top}
        brand={images.brand.top}
        brandName="Bershka"
        description="Bawełniana tanktop"
      />
      <Clothes
        source={images.clothes.trousers}
        brand={images.brand.trousers}
        brandName="Levi's"
        description="Spodnie jeansowe"
      />
      <Clothes
        source={images.clothes.socket}
        brand={images.brand.socket}
        brandName="Nike"
        description="Skarpety bawełniane"
      />
      <Clothes
        source={images.clothes.shoes}
        brand={images.brand.shoes}
        brandName="Converse"
        description="Trampki"
      />
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
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 35,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 3,
    borderColor: "#C4C4C4",
    paddingTop: 50,
    paddingLeft: 36,
    paddingRight: 36,
  },
  button: {
    fontFamily: boldText,
    fontSize: 18,
  },
  arrow: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  arrowImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  wardrobe: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 80,
  },
  wardrobeImage: {
    width: 55,
    height: 55,
  },
});

export default ClothesProposition;
