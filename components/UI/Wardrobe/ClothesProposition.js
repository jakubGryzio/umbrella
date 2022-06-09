import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import { boldText } from "../constant";
import images from "./images";
import Clothes from "./Clothes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import uiSlice from "../../../store/ui-slice";
import clothesSlice from "../../../store/clothes-slice";
import * as Database from "firebase/database";
import * as Storage from "firebase/storage";
import { set } from "firebase/database";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ClothesProposition = () => {
  const dispatch = useDispatch();
  const clothes = useSelector((state) => state.clothes.clothes);

  const fetchWardrobe = () => {
    const db = Database.getDatabase();
    const reference = Database.ref(db, "clothes/");
    Database.onValue(reference, (snapshot) => {
      dispatch(clothesSlice.actions.setClothes(snapshot.val()));
    });
  };

  const fetchImage = async () => {
    const storage = Storage.getStorage();
    const fetchUrls = await Promise.all(
      clothes.map(async (elem) => {
        const referance = Storage.ref(storage, `/${elem.image}`);
        let url;
        await Storage.getDownloadURL(referance).then((snap) => {
          url = snap;
        });
        return url;
      })
    );
    return fetchUrls;
  };

  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  useEffect(() => {
    fetchWardrobe();
    return () => undefined;
  }, []);

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

  const cap = clothes.filter((elem) => {
    return elem.type == "cap";
  });

  const hoodie = clothes.filter((elem) => {
    return elem.type == "hoodie";
  });

  const top = clothes.filter((elem) => {
    return elem.type == "top";
  });

  const trousers = clothes.filter((elem) => {
    return elem.type == "trousers";
  });

  const socks = clothes.filter((elem) => {
    return elem.type == "socks";
  });

  const shoes = clothes.filter((elem) => {
    return elem.type == "shoes";
  });

  const validCap = cap[randomIntFromInterval(0, cap.length - 1)];
  const validHoodie = hoodie[randomIntFromInterval(0, hoodie.length - 1)];
  const validTop = top[randomIntFromInterval(0, top.length - 1)];
  const validTrousers = trousers[randomIntFromInterval(0, trousers.length - 1)];
  const validSocks = socks[randomIntFromInterval(0, socks.length - 1)];
  const validShoes = shoes[randomIntFromInterval(0, shoes.length - 1)];

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
      {validCap && (
        <Clothes
          key={validCap.id}
          source={images.clothes.cap}
          brand={images.brand[`${validCap.image.slice(0, -4)}`]}
          brandName={validCap.brand}
          description={validCap.description}
        />
      )}
      {validHoodie && (
        <Clothes
          source={images.clothes.hoodie}
          brand={images.brand[`${validHoodie.image.slice(0, -4)}`]}
          brandName={validHoodie.brand}
          description={validHoodie.description}
        />
      )}
      {validTop && (
        <Clothes
          source={images.clothes.top}
          brand={images.brand[`${validTop.image.slice(0, -4)}`]}
          brandName={validTop.brand}
          description={validTop.description}
        />
      )}
      {validTrousers && (
        <Clothes
          source={images.clothes.trousers}
          brand={images.brand[`${validTrousers.image.slice(0, -4)}`]}
          brandName={validTrousers.brand}
          description={validTrousers.description}
        />
      )}
      {validSocks && (
        <Clothes
          source={images.clothes.socket}
          brand={images.brand[`${validSocks.image.slice(0, -4)}`]}
          brandName={validSocks.brand}
          description={validSocks.description}
        />
      )}
      {validShoes && (
        <Clothes
          source={images.clothes.shoes}
          brand={images.brand[`${validShoes.image.slice(0, -4)}`]}
          brandName={validShoes.brand}
          description={validShoes.description}
        />
      )}
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
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  wardrobe: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 80,
  },
  wardrobeImage: {
    width: 50,
    height: 50,
  },
});

export default ClothesProposition;
