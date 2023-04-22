import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../components/screens/Home";
import Orders from "../components/screens/Orders";
import Settings from "../components/screens/Settings";
import Shop from "../components/screens/Shop";

import * as ROUTES from "../constants/routes";
import SettingsNavigator from "./SettingsNavigator";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR_SCREEN) {
            icon = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Order" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR_SCREEN}
        component={SettingsNavigator}
        options={{ title: "Settings" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
