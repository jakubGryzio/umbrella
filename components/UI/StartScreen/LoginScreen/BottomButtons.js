import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { boldText } from "../../constant";

const BottomButtons = (props) => {
  return (
    <View style={styles.bottomButtonContainer}>
      <TouchableOpacity onPress={props.signUp}>
        <Text style={styles.downText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.downText}>Forgot Passwords</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  downText: {
    fontFamily: boldText,
    fontSize: 17,
  },
  bottomButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 33,
  },
});

export default BottomButtons;
