import React from "react";
import { GOOGLE_MAPS_APIKEY } from "./key";
import { Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const MapDirections = React.forwardRef((props, ref) => {
  const startPoint = useSelector((state) => state.route.start);
  const endPoint = useSelector((state) => state.route.end);
  const origin = {
    latitude: startPoint.latitude,
    longitude: startPoint.longitude,
  };
  const destination = {
    latitude: endPoint.latitude,
    longitude: endPoint.longitude,
  };

  return (
    <React.Fragment>
      {origin.latitude &&
        origin.longitude &&
        destination.latitude &&
        destination.longitude && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            onReady={(result) => {
              const startPoint = result.coordinates[0];
              const endPoint =
                result.coordinates[result.coordinates.length - 1];
              ref.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
          />
        )}
    </React.Fragment>
  );
});

export default MapDirections;
