import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeholderStyle}
        placeholder={props.placeholder}
        placeholderTextColor="black"
        secureTextEntry={props.password}
        onChangeText={props.onInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 15,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    height: 55,
    marginVertical: 6,
  },
  placeholderStyle: {
    flex: 1,
  },
});

export default Input;
