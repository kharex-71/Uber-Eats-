import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import * as ROUTES from "../constants/routes";
import RegistrationPage from "../components/screens/RegistrationPage";
import LogInScreen from "../components/screens/LogInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";


const Stack = createNativeStackNavigator();

function StackBowse({ navigation}) {
  return (
      <Stack.Navigator 
        screenOptions={{headerShadowVisible: false,}}
      >
        <Stack.Screen
          name={ROUTES.REGISTRATION_SCREEN}
          component={RegistrationPage}
        />
        <Stack.Screen
          name={ROUTES.LOGIN_SCREEN}
          component={LogInScreen}
          options={{title: ""}}
        />
        <Stack.Screen
          name={ROUTES.SIGNUP_SCREEN}
          component={SignUpScreen}
          options={{title: ""}}
        />
    </Stack.Navigator>
  );
}

export default StackBowse;