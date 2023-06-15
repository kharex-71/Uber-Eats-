import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import * as ROUTES from "../constants/routes";
import AccountNavigation from "./AccountNavigation"
import StackBowse from "./StackBowse";
import StackGrocery from "./StackGrocery";
import Baskets from "../components/screens/Baskets"
import Home from "../components/screens/Home";

const backIcon = require("../../assets/icon/backArrow.png")

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_STACK) {
            icon = focused ? "eye" : "eye-outline";
          } else if (route.name === ROUTES.BASKETS_SCREEN) {
            icon = focused ? "cart" : "cart-outline";
          } else if (route.name === ROUTES.STACK_GROCERY) {
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
        name={ROUTES.BROWSE_STACK}
        component={StackBowse}
        options={{headerShown: false,title: "Browse"}}
        
      />
      <Tab.Screen
        name={ROUTES.STACK_GROCERY}
        component={StackGrocery}
        options={{headerShown: false, title: "Grocery"}}
        
      />
      

      <Tab.Screen
        name={ROUTES.BASKETS_SCREEN}
        component={Baskets}
        options={{ title: "Baskets", headerShown: true, headerLeft:()=>(
          <Pressable>
          <Image source={backIcon} style={{marginLeft: 16}}/>
          </Pressable>
        ) }}
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
