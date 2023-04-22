import * as React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "../components/atoms/custombutton/Button";
import Screen from "../components/atoms/screendimensions/Screen";
import SignIn from "../components/screens/SignIn";
import ForgotPassword from "../components/screens/ForgotPassword";
import * as ROUTES from "../constants/routes";
import BottomTabNavigation from "./BottomTabNavigation";

const Container = styled(Screen)``;

const Stack = createStackNavigator();

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Sign up Screen</Text>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate(ROUTES.LOG_IN_SCREEN)}
      />
    </Container>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: "#005596",
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen
          name={ROUTES.SIGN_UP_SCREEN}
          options={{ headrShown: false }}
          component={SignUp}
        />

        <Stack.Screen
          name={ROUTES.SIGN_IN_SCREEN}
          options={{ headrShown: false }}
          component={SignIn}
        />

        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD_SCREEN}
          options={{ headrShown: false }}
          component={ForgotPassword}
        />

        <Stack.Screen
          name={ROUTES.BOTTOM_TAB_NAV}
          options={{ headrShown: false }}
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
