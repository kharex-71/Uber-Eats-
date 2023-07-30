import React, { useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../atoms/custombutton/Button";
import LoginScreenImage from "../images/LoginScreenImages";
import Screen from "../atoms/screendimensions/Screen";
import * as ROUTES from "../../constants/routes";

const RegistrationPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerStyle: {
        backgroundColor: "#142328",
      },
    });
  }, [navigation]);

  const handlePressLogIn = () => {
    navigation.navigate(ROUTES.LOGIN_SCREEN);
  };
  const handlePressSignUp = () => {
    navigation.navigate(ROUTES.SIGNUP_SCREEN);
  };
  return (
    <Screen>
      <View style={styles.logoBox}>
        <Text style={styles.myLogo}>
          Uber-Eats
          <View style={styles.dot} />
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Pressable
          style={styles.imageBox}
          onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
        >
          <LoginScreenImage />
        </Pressable>
        <View style={styles.textBox}>
          <Text style={styles.txt}>Let's get started</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.subtitle}>
            Make every day easier for you with our help.
          </Text>
        </View>
        <View style={styles.btnBox}>
          <Button title="Log in" onPress={handlePressLogIn} />
          <Button title="Sign up" $light={true} onPress={handlePressSignUp} />
        </View>
      </View>
    </Screen>
  );
};

export default RegistrationPage;

const styles = StyleSheet.create({
  logoBox: {
    backgroundColor: "#142328",
  },
  myLogo: {
    fontSize: 28,
    color: "#fff",
    fontWeight: 700,
    marginLeft: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FFCA42",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#142328",
    paddingBottom: 20,
  },
  imageBox: {},
  textBox: {
  },
  txt: {
    fontSize: 46,
    textAlign: "center",
    color: "#fff",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 700,
    textAlign: "left",
  },
  btnBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
