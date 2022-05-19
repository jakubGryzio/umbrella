import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import Input from "../../Common/Input";
import SignContainer from "../../Common/SignContainer";
import { boldText } from "../../constant";
import BottomButtons from "./BottomButtons";
import useInput from "../../../hooks/useInput";

const LoginForm = (props) => {
  const { value: inputEmail, valueChange: emailChangeHandler } = useInput();

  const { value: inputPassword, valueChange: passwordChangeHandler } =
    useInput();

  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }
  return (
    <View style={styles.page}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/login_image1.png")}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          placeholder="Your Email"
          value={inputEmail}
          onInputChange={emailChangeHandler}
        />
        <Input
          placeholder="Password"
          password={true}
          onInputChange={passwordChangeHandler}
          value={inputPassword}
        />
      </View>
      <SignContainer
        label={"Sign in"}
        textStyle={styles.signInText}
        onLogged={props.onLogged}
      >
        <Image
          style={styles.imageButton}
          source={require("../../../../assets/images/login_button.png")}
        />
      </SignContainer>
      <SignContainer
        label={"Guest access"}
        textStyle={styles.guestText}
        onLogged={props.onLogged}
      >
        <Image
          style={styles.imageButton}
          source={require("../../../../assets/images/login_button.png")}
        />
      </SignContainer>
      <BottomButtons />
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
    alignItems: "center",
    justifyContent: "center",
    height: "43%",
  },
  inputView: {
    marginBottom: 12,
  },
  signInText: {
    fontFamily: boldText,
    fontSize: 30,
  },
  guestText: {
    fontFamily: boldText,
    fontSize: 27,
  },
  image: {
    height: "90%",
    width: "90%",
  },
  imageButton: {
    width: 52,
    height: 52,
  },
});

export default LoginForm;