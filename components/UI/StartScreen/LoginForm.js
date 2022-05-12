import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  KumbhSans_700Bold,
  KumbhSans_400Regular,
} from "@expo-google-fonts/kumbh-sans";

const LoginForm = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_700Bold,
    KumbhSans_400Regular,
  });

  if (!fontsLoaded) {
    return <Text></Text>;
  }
  return (
    <View style={styles.page}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/login_image1.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeholderStyle}
          placeholder="Your Email"
          placeholderTextColor="black"
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeholderStyle}
          placeholder="Password"
          placeholderTextColor="black"
        ></TextInput>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Sign in</Text>
        <TouchableOpacity onPress={props.onLogged}>
          <Image
            style={styles.imageButton}
            source={require("../../../assets/images/login_button.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.guestText}>Guest access</Text>
        <TouchableOpacity onPress={props.onLogged}>
          <Image
            style={styles.imageButton}
            source={require("../../../assets/images/login_button.png")}
          />
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    paddingLeft: 15,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    height: 55,
    marginVertical: 8,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  signInText: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 30,
  },
  guestText: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 27,
  },
  downText: {
    fontFamily: "KumbhSans_700Bold",
    fontSize: 17,
  },
  placeholderStyle: {
    flex: 1,
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
