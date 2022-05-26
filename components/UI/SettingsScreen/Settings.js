import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import images from "./images";
import FeatureButton from "../Common/FeatureButton";
import { useDispatch } from "react-redux";
import uiSlice from "../../../store/ui-slice";
import authSlice from "../../../store/auth-slice";
// import authSlice from "../../../../store/auth-slice";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

const Settings = (props) => {
  const dispatch = useDispatch();

  const weatherConditionHandler = () => {
    dispatch(uiSlice.actions.goToWeatherCondition());
  };

  const signOutHandler = () => {
    dispatch(authSlice.actions.logOut());
  };
  // const auth = getAuth();
  //   const dispatch = useDispatch();

  //     const signOutHandler = () => {
  //     signOut()
  //       .then(() => {
  //         console.log('User signed out!');
  //       })
  //   };

  return (
    <View style={styles.page}>
      <View style={styles.arrowButton}>
        <TouchableOpacity onPress={weatherConditionHandler}>
          <Image style={styles.arrow} source={images.arrow} />
        </TouchableOpacity>
      </View>
      <FeatureButton
        style={styles.buttons}
        imageName={images.avatar}
        label="Avatar"
        // onPress={props.onAvatar}
      ></FeatureButton>
      <FeatureButton
        style={styles.buttons}
        imageName={images.account}
        label="Account"
        // onPress={props.onAccount}
      ></FeatureButton>
      <FeatureButton
        style={styles.buttons}
        imageName={images.notifications}
        label="Notifications"
        // onPress={props.onNotifications}
      ></FeatureButton>
      <FeatureButton
        style={styles.buttons}
        imageName={images.language}
        label="Language"
        // onPress={props.onLanguage}
      ></FeatureButton>
      <FeatureButton
        style={styles.buttons}
        imageName={images.privacy}
        label="Privacy"
        // onPress={props.onPrivacy}
      ></FeatureButton>
      <FeatureButton
        style={styles.buttons}
        imageName={images.aboutUs}
        label="About Us"
        // onPress={props.onAboutUs}
      ></FeatureButton>
      <FeatureButton
        style={styles.logOut}
        imageName={images.logout}
        label="Log Out"
        onPress={signOutHandler}
      ></FeatureButton>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 36,
    paddingRight: 36,
  },
  arrowButton: {
    flex: 1,
    flexDirection: "row",
    width: "30%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  arrow: {
    marginHorizontal: -10,
    marginVertical: 10,
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    height: 45,
    marginVertical: 8,
  },
  logOut: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "#A6A6A6",
    borderRadius: 20,
    height: 45,
    marginTop: 160,
    marginBottom: 40,
  },
});

export default Settings;
