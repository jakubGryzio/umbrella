import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { boldText } from "../../constant";

const BottomButtons = (props) => {
  return (
    <View style={styles.bottomButtonContainer}>
      <Text style={styles.downText}>Sign Up</Text>
      <Text style={styles.downText}>Forgot Passwords</Text>
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
    marginVertical: 55,
  },
});

export default BottomButtons;
