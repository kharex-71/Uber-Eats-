import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import Button from "../atoms/custombutton/Button";
import CustumInput from "../atoms/TextInput/CustumInput";
import SnackBar from "../molecules/SnackBar";
import { getData, storeData } from "../../helpers/SaveInformationProvided";

let googleIcon = require("../../../assets/icon/google.png");
let appleIcon = require("../../../assets/icon/apple.png");
let Name = require("../../../assets/icon/user1.png");
let pass = require("../../../assets/icon/paswword1.png");

const LogInScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigation = useNavigation();

  const handlePressSignUp = () => {
    navigation.navigate(ROUTES.SIGNUP_SCREEN);
  };

  const InAppLoginPath = async () => {
    const res = await getData("user");
    if (userName === res.name && password === res.password) {
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.DRAWER_NAVIGATOR }],
      });
    } else {
      setError((prev) => !prev);
    }
  };

  // const getUserData = async () => {
  //   const res = await getData("user");
  //   console.log(res);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <SnackBar
          visible={error}
          callBack={setError}
          text="The data is not correct!"
        />
        <SnackBar
          visible={success}
          callBack={setSuccess}
          text="You have successfully authenticated."
        />
        <View style={styles.wrapper}>
          <View style={styles.headerTitle}>
            <Text style={styles.welcome}>Welcome back</Text>
            <Text style={styles.info}>Enter your credential to continue</Text>
          </View>
          <View style={styles.inputBox}>
            <CustumInput
              placeholder="UserName"
              icon={Name}
              onChangeText={(value) => setUserName(value)}
            />
            <CustumInput
              placeholder="Password"
              icon={pass}
              onChangeText={(value) => setPassword(value)}
              secured
            />
            <Text style={styles.frgtText}>Forgot password?</Text>
          </View>
          <View style={styles.btnBox}>
            <Button title="Log in" onPress={InAppLoginPath} />
            <Button
              title="Log in using Apple"
              icon={appleIcon}
              onPress={() => console.log("Apple registration")}
            />
            <Button
              title="Log in using Google"
              $light={true}
              icon={googleIcon}
              onPress={() => console.log("Register with Google")}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.signText}>Don't have account?</Text>
            <Pressable
              onPress={handlePressSignUp}
              style={{ borderBottomWidth: 1, borderBottomColor: "#FFCA42" }}
            >
              <Text> Sign up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerTitle: {
    width: "100%",
    paddingLeft: 33,
  },
  welcome: {
    color: "#1F5460",
    fontSize: 32,
    lineHeight: 38,
    fontWeight: 600,
  },
  info: {
    marginTop: 16,
    color: "#1F5460",
    fontSize: 16,
  },
  inputBox: {},
  btnBox: {
    width: "100%",
    alignItems: "center",
  },
  frgtText: {
    color: "#1F5460",
    textAlign: "right",
  },
  signText: {
    color: "#1F5460",
  },
});
