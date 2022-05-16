import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const EntryContainer = (props) => {
  return (
    <View style={styles.signInContainer}>
      <Text style={props.textStyle}>{props.label}</Text>
      <TouchableOpacity onPress={props.onLogged}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signInContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default EntryContainer;
