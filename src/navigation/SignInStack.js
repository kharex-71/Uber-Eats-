import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "../components/screens/SignUpScreen";
import LogInScreen from "../components/screens/LogInScreen";
import RegistrationPage from "../components/screens/RegistrationPage";
import * as ROUTES from "../constants/routes";


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