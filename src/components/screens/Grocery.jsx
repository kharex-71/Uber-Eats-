import React from "react";
// import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";
// import Button from "../atoms/custombutton/Button";
import { useNavigation } from "@react-navigation/native";
// import * as ROUTES from "../../constants/routes";
// import LargBtn from "../atoms/custombutton/LargBtn";
// import LargBtnLight from "../atoms/custombutton/LargBtnLight";
import MapView, { Marker } from "react-native-maps";
// const GroceryContainer = styled.View`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Container = styled.View`
//   flex: 1;
// `;
// const Map = styled(MapView)`
//   width: 100%;
//   height: 100%;
// `;

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

const Grocery = () => {
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

export default Grocery;

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
