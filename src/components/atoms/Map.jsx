import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

let data = [
  {
    title: "first",
    location: {
      latitude: 41.57332357649769,
      longitude: 44.98004371372484,
    },
    description: "My first Marker",
  },
  {
    title: "second",
    location: {
      latitude: 41.567801233281536,
      longitude: 44.983391110457404,
    },
    description: "My second Marker",
  },
];

const Map = () => {
  const navigation = useNavigation();
  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationOfInterest = () => {
    return data.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 41.5444421980127,
          latitudeDelta: 0.00885791432448002,
          longitude: 45.01166172849341,
          longitudeDelta: 0.006758276165527377,
        }}
      >
        {showLocationOfInterest()}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
