import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch } from "react-redux";
import uiSlice from "../../store/ui-slice";

import customMapStyle from "./customMapStyle";

const GOOGLE_MAPS_APIKEY = "AIzaSyDpgQBK2ZMFPjuPCiyMXgK1VCXlWfoc-XE";

const MapState = (props) => {
  const dispatch = useDispatch();

  const origin = {
    latitude: props.location.latitude,
    longitude: props.location.longitude,
  };

  const destination = {
    latitude: 52.220415273884505,
    longitude: 21.01207102961384,
  };

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
          <Marker
            coordinate={{
              latitude: 52.220415273884505,
              longitude: 21.01207102961384,
            }}
            title={"KEBAB DUBAI"}
            description={"Najlepszy kebab na świecie"}
          >
            <Image
              source={require("../../assets/images/marker.png")}
              style={{ height: 45, width: 45 }}
            />
          </Marker>

          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
          />
        </MapView>
        <TouchableOpacity
          style={styles.button}
          onPress={weatherConditionHandler}
        >
          <Image
            style={styles.imageButton}
            source={require("../../assets/images/prev_button.png")}
          />
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
    height: 50,
    width: 50,
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
    height: 50,
    width: 50,
  },
});

export default MapState;
