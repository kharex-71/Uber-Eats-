import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../components/screens/Home";
import Browse from "../components/screens/Browse"
import Baskets from "../components/screens/Baskets"
import Grocery from "../components/screens/Grocery"
import AccountNavigation from "./AccountNavigation"
import * as ROUTES from "../constants/routes";


import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "eye" : "eye-outline";
          } else if (route.name === ROUTES.BASKETS_SCREEN) {
            icon = focused ? "cart" : "cart-outline";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";       
          } else if (route.name === ROUTES.ACCOUNT_NAVIGATOR_SCREEN) {
            icon = focused ? "person" : "person-outline";
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />


      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse", headerShown: false }}
      />
      

      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{ title: "Grocery" }}
      />

      <Tab.Screen
        name={ROUTES.BASKETS_SCREEN}
        component={Baskets}
        options={{ title: "Baskets", headerShown: false }}
      />

      <Tab.Screen
        name={ROUTES.ACCOUNT_NAVIGATOR_SCREEN}
        component={AccountNavigation}
        options={{ title: "Account", headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
