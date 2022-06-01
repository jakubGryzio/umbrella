import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapDirections from "./MapDirections";
import RouteMarker from "./RouteMarker";
import MapPlaces from "./MapPlaces";
import images from "./images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import uiSlice from "../../store/ui-slice";

import customMapStyle from "./customMapStyle";

const MapState = (props) => {
  const dispatch = useDispatch();

  const weatherConditionHandler = () => {
    dispatch(uiSlice.actions.goToWeatherCondition());
  };

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
          showsUserLocation={true}
          customMapStyle={customMapStyle}
        >
          <RouteMarker />
          <MapDirections location={props.location} />
        </MapView>
        <TouchableOpacity
          style={styles.button}
          onPress={weatherConditionHandler}
        >
          <Image style={styles.imageButton} source={images.arrow} />
        </TouchableOpacity>
        <MapPlaces />
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
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
  imageButton: {
    height: 45,
    width: 45,
    resizeMode: "contain",
  },
});

export default MapState;
