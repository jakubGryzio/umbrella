import React from "react";
import { View, StyleSheet, Text, Image, ToastAndroid } from "react-native";
import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import Input from "../../Common/Input";
import SignContainer from "../../Common/SignContainer";
import BottomButtons from "./BottomButtons";
import { boldText, appName } from "../../constant";
import useInput from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import authSlice from "../../../../store/auth-slice";
import images from "../images";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import uiSlice from "../../../../store/ui-slice";

const LoginForm = (props) => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const { value: inputEmail, valueChange: emailChangeHandler } = useInput();

  const { value: inputPassword, valueChange: passwordChangeHandler } =
    useInput();

  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  const signInHandler = () => {
    signInWithEmailAndPassword(auth, inputEmail, inputPassword)
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

  const guessHandler = () => {
    dispatch(authSlice.actions.signIn());
    dispatch(uiSlice.actions.goToWeatherCondition());
  };

  const signUpHandler = () => {
    dispatch(uiSlice.actions.goToRegistrationForm());
  };

  return (
    <View style={styles.page}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{appName}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.login} />
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
        onLogged={signInHandler}
      >
        <Image style={styles.imageButton} source={images.button} />
      </SignContainer>
      <SignContainer
        label={"Guest access"}
        textStyle={styles.guestText}
        onLogged={guessHandler}
      >
        <Image style={styles.imageButton} source={images.button} />
      </SignContainer>
      <BottomButtons signUp={signUpHandler} />
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
    marginBottom: 17,
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
