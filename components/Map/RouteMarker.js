import React from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";
import images from "./images";
import { useSelector } from "react-redux";

const RouteMarker = () => {
  const startPoint = useSelector((state) => state.route.start);
  const endPoint = useSelector((state) => state.route.end);
  return (
    <React.Fragment>
      {startPoint.longitude && startPoint.latitude && (
        <Marker
          coordinate={{
            latitude: startPoint.latitude,
            longitude: startPoint.longitude,
          }}
        >
          <Image source={images.marker} style={{ height: 45, width: 45 }} />
        </Marker>
      )}
      {endPoint.longitude && endPoint.latitude && (
        <Marker
          coordinate={{
            latitude: endPoint.latitude,
            longitude: endPoint.longitude,
          }}
        >
          <Image source={images.marker} style={{ height: 45, width: 45 }} />
        </Marker>
      )}
    </React.Fragment>
  );
};

export default RouteMarker;
