import React from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "./key";
import routeSlice from "../../store/route-slice";
import { useDispatch } from "react-redux";

const MapPlaces = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.places}>
      <GooglePlacesAutocomplete
        placeholder="Starting point"
        minLength={2}
        autoFocus={false}
        returnKeyType={"search"}
        listViewDisplayed="auto"
        enablePoweredByContainer={false}
        isRowScrollable={true}
        suppressDefaultStyles={true}
        fetchDetails={true}
        textInputProps={{
          placeholderTextColor: "black",
        }}
        renderDescription={(row) => row.description}
        onPress={(data, details = null) => {
          const location = {
            longitude: parseFloat(details.geometry.location.lng),
            latitude: parseFloat(details.geometry.location.lat),
          };
          dispatch(routeSlice.actions.setStartPoint(location));
        }}
        getDefaultValue={() => {
          return ""; // text input default value
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        styles={{
          description: {
            fontWeight: "bold",
          },
          textInputContainer: {
            marginBottom: 10,
          },
          textInput: {
            marginLeft: 15,
            marginRight: 15,
            paddingLeft: 10,
            height: 45,
            backgroundColor: "#D8D8D8",
            opacity: 0.7,
            color: "black",
            borderRadius: 15,
            fontSize: 16,
            width: "100%",
          },
          listView: {},
          row: {
            backgroundColor: "#D8D8D8",
            padding: 5,
            height: 40,
            flexDirection: "row",
          },
          predefinedPlacesDescription: {
            fontSize: 15,
          },
        }}
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch"
        GoogleReverseGeocodingQuery={{}}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        debounce={200}
      />
      <GooglePlacesAutocomplete
        placeholder="Destination"
        minLength={2}
        autoFocus={false}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        suppressDefaultStyles={true}
        fetchDetails={true}
        textInputProps={{
          placeholderTextColor: "black",
        }}
        renderDescription={(row) => row.description}
        onPress={(data, details = null) => {
          const location = {
            longitude: parseFloat(details.geometry.location.lng),
            latitude: parseFloat(details.geometry.location.lat),
          };
          dispatch(routeSlice.actions.setEndPoint(location));
        }}
        getDefaultValue={() => {
          return ""; // text input default value
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        styles={{
          description: {
            fontWeight: "bold",
          },
          textInputContainer: {},
          textInput: {
            marginLeft: 15,
            marginRight: 15,
            paddingLeft: 10,
            height: 45,
            backgroundColor: "#D8D8D8",
            opacity: 0.7,
            color: "black",
            borderRadius: 15,
            fontSize: 16,
            width: "100%",
          },
          listView: {},
          row: {
            backgroundColor: "#D8D8D8",
            padding: 5,
            height: 40,
            flexDirection: "row",
          },
          predefinedPlacesDescription: {
            fontSize: 20,
          },
        }}
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch"
        GoogleReverseGeocodingQuery={{}}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        debounce={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  places: {
    width: "80%",
    position: "absolute",
    top: "13%",
    left: "10%",
    alignSelf: "flex-start",
  },
});

export default MapPlaces;
