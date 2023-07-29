import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Browse from "../components/screens/Browse"
import DealsStack from "../components/screens/DealsStack";
import * as ROUTES from "../constants/routes";



const Stack = createNativeStackNavigator();

function StackBowse() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShadowVisible: false,}}
    >
      <Stack.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.DEALS_STACK}
        component={DealsStack}
        options={{title: "Deals"}}
      />
    </Stack.Navigator>
  );
}

export default StackBowse;