import React from "react";
import { GOOGLE_MAPS_APIKEY } from "./key";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";

const MapDirections = (props) => {
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
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={5}
      onReady={(result) => {
        console.log(`Distance: ${result.distance} km`);
        console.log(`Duration: ${result.duration} min.`);

        // this.mapView.fitToCoordinates(result.coordinates, {
        //   edgePadding: {
        //     right: (width / 20),
        //     bottom: (height / 20),
        //     left: (width / 20),
        //     top: (height / 20),
        //   }
        // });
      }}
    />
  );
};

export default MapDirections;
