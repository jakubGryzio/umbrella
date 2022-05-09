import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const MapState = (props) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onWeatherCondition}
        >
          <Text>GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    top: "3%",
    left: "7%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
    backgroundColor: "#babfbf",
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export default MapState;
