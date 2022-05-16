import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { useFonts, KumbhSans_700Bold } from "@expo-google-fonts/kumbh-sans";
import Input from "../../Common/Input";
import EntryContainer from "../../Common/EntryContainer";
import { boldText } from "../../constant";

const LoginForm = (props) => {
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
        <Input placeholder="Your Email" />
        <Input placeholder="Password" />
      </View>
      <EntryContainer
        label={"Sign in"}
        textStyle={styles.signInText}
        onLogged={props.onLogged}
      >
        <Image
          style={styles.imageButton}
          source={require("../../../../assets/images/login_button.png")}
        />
      </EntryContainer>
      <EntryContainer
        label={"Guest access"}
        textStyle={styles.guestText}
        onLogged={props.onLogged}
      >
        <Image
          style={styles.imageButton}
          source={require("../../../../assets/images/login_button.png")}
        />
      </EntryContainer>
      <View style={styles.downButtonContainer}>
        <Text style={styles.downText}>Sign Up</Text>
        <Text style={styles.downText}>Forgot Passwords</Text>
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
  downText: {
    fontFamily: boldText,
    fontSize: 17,
  },
  image: {
    height: "90%",
    width: "90%",
  },
  imageButton: {
    width: 52,
    height: 52,
  },
  downButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 55,
  },
});

export default LoginForm;
