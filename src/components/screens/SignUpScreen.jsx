import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import SnackBar from "../molecules/SnackBar";
import Button from "../atoms/custombutton/Button";
import CustumInput from "../atoms/TextInput/CustumInput";
import { storeData } from "../../helpers/SaveInformationProvided";

let googleIcon = require("../../../assets/icon/google.png");
let appleIcon = require("../../../assets/icon/apple.png");
let user = require("../../../assets/icon/user1.png");
let email = require("../../../assets/icon/email1.png");
let pass = require("../../../assets/icon/paswword1.png");


const SignUpScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [tokens, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigation = useNavigation();

  const handlePressSignUp = () => {
    navigation.navigate(ROUTES.LOGIN_SCREEN);
  };

  const InAppLoginPath = () => {
    if (form.name === "" && form.email === "" && form.password === "") {
      setError((prev) => !prev);
      console.warn("A syntax error was detected");
    } else {
      storeData("user", form);
      navigation.navigate(ROUTES.LOGIN_SCREEN);
      setSuccess((prev) => !prev);
    }
  };

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
            <Text style={styles.welcome}>Create account</Text>
            <Text style={styles.info}>Sign up to get started!</Text>
          </View>
          <View style={styles.inputBox}>
            <CustumInput
              placeholder="UserName"
              icon={user}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <CustumInput
              placeholder="Email address"
              value={form.email}
              icon={email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <CustumInput
              placeholder="Password"
              value={form.password}
              icon={pass}
              onChangeText={(text) => setForm({ ...form, password: text })}
              secured
            />
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
            <Text style={styles.signText}>Already member?</Text>
            <Pressable
              onPress={handlePressSignUp}
              style={{ borderBottomWidth: 1, borderBottomColor: "#FFCA42" }}
            >
              <Text>Log in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 40,
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
  },
  signText: {
    color: "#1F5460",
  },
});
