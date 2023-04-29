import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ROUTES from "../constants/routes";
import Settings from "../components/screens/Settings";
import SettingsDetails from "../components/screens/SettingsDetails";

const Stack = createNativeStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={Settings}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name={ROUTES.SETTINGS_DETAILS}
        component={SettingsDetails}
        
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
