import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../components/screens/Account"
import Settings from "../components/screens/Settings";
import PromotionScreen from "../components/screens/PromotionScreen";
import * as ROUTES from "../constants/routes";


const Stack = createNativeStackNavigator();

function AccountNavigation({ navigation: { goBack } }) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={ROUTES.ACCOUNT_SCREEN}
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={Settings}
        options={{ headerShown: true,title: "Settings"}}
      />
      <Stack.Screen
        name={ROUTES.PROMOTION_SCREEN}
        component={PromotionScreen}
        options={{ headerShown: true,title: "Promotion"}}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
