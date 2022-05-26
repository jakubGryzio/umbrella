import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import Input from "../../Common/Input";
import SignContainer from "../../Common/SignContainer";
import { boldText } from "../../constant";
import useInput from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import authSlice from "../../../../store/auth-slice";
import images from "../images";
import { appName } from "../../constant";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import uiSlice from "../../../../store/ui-slice";

const RegForm = (props) => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const { value: inputName, valueChange: nameChangeHandler } = useInput();
  const { value: inputEmail, valueChange: emailChangeHandler } = useInput();
  const { value: inputPassword, valueChange: passwordChangeHandler } =
    useInput();

  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  const signUpHandler = () => {
    createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
      .then(() => {
        dispatch(authSlice.actions.signIn());
        dispatch(uiSlice.actions.goToWeatherCondition());
      })
      .catch(() => {
        const showToastWithGravity = () => {
          ToastAndroid.showWithGravity(
            "Invalid email or password. Try sign in again!",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        };
        showToastWithGravity();
      });
  };

  const loginFormHandler = () => {
    dispatch(uiSlice.actions.goToLoginFrom());
  };

  return (
    <View style={styles.page}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{appName}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.register} />
      </View>
      <View style={styles.inputView}>
        <Input
          placeholder="Name"
          value={inputName}
          onInputChange={nameChangeHandler}
        />
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
        label={"Sign Up"}
        textStyle={styles.signUpText}
        onLogged={signUpHandler}
      >
        <Image style={styles.imageButton} source={images.button} />
      </SignContainer>
      <TouchableOpacity onPress={loginFormHandler}>
        <Text style={styles.downText}>Sign In</Text>
      </TouchableOpacity>
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
  nameContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  name: {
    fontFamily: boldText,
    fontSize: 35,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "38%",
  },
  inputView: {
    marginTop: 10,
    marginBottom: 15,
  },
  signUpText: {
    fontFamily: boldText,
    fontSize: 30,
  },
  image: {
    height: "100%",
    width: "70%",
  },
  imageButton: {
    width: 52,
    height: 52,
  },
  downText: {
    fontFamily: boldText,
    fontSize: 17,
    marginVertical: 30,
    marginLeft: 260,
  },
});

export default RegForm;
