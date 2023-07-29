import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View} from "react-native";
import {Host} from "react-native-portalize";

import * as ROUTES from "../constants/routes";
import DrawerNavigator from "./DrawerNavigator";
import BackButton from "../components/atoms/custombutton/BackButton"
import TrackHdrBtn from "../components/atoms/custombutton/TrackHdrBtn";

import DealsStack from "../components/screens/DealsStack";
import DeliveryDetails from "../components/screens/DeliveryDetails";
import ConvenienceScreen from "../components/screens/ConvenienceScreen";
import OrderSelection from "../components/screens/OrderSelection"
import RestourantDetails from "../components/screens/RestourantDetails";
import TrackOrder from "../components/screens/TrackOrder";
import SignInStack from "./SignInStack"





const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Host>
      <Stack.Navigator screenOptions={{ headerShown: false
        
        }}>
        
        

        <Stack.Screen
          name={ROUTES.SIGN_IN_STACK}
          component={SignInStack}
        />
        <Stack.Screen
          name={ROUTES.DEALS_STACK}
          component={DealsStack}
        />

        <Stack.Screen
          name={ROUTES.REST_DETAILS}
          component={RestourantDetails}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.CONVENIENCE_STACK}
          component={ConvenienceScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.ORDER_SELECTTION}
          component={OrderSelection}
          options={{ headerShown: true, title: "",headerShadowVisible: false}}
        />
        <Stack.Screen
          name={ROUTES.DELIVERY_DETAILS}
          component={DeliveryDetails}
          options={{ headerShown: true, headerLargeTitle: "Delivery Details"}}
        />
        <Stack.Screen 
          options={{
            headerShown: true,
            title: "",
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <BackButton
                iconUrl={require("../../assets/icon/Close.png")}
                onPress={() => alert('This is a button!')}
              />
            ),
            headerRight: () => (
              <View style={{display: "flex", flexDirection: "row-reverse", marginLeft: 17}}>
              <TrackHdrBtn
                onPress={() => alert('This is a button!')}
                title="Help"
                color="#fff"
              />
              <TrackHdrBtn
                iconUrl={require("../../assets/icon/share.png")}
                onPress={() => alert('This is a button!')}
                color="#fff"
              />
              </View>
            ),
          }}
          name={ROUTES.TRACK_ORDER_SCREEN}
          component={TrackOrder}
        />

        <Stack.Screen
          name={ROUTES.DRAWER_NAVIGATOR}
          component={DrawerNavigator}
          options={{ headrShown: false }}
        />
        
      </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AppNavigation;
  
