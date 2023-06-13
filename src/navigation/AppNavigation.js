import * as React from "react";
import { View,Pressable,Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import {Host} from "react-native-portalize";
import {Button} from "react-native";

import * as ROUTES from "../constants/routes";
import DrawerNavigator from "./DrawerNavigator";
import BackButton from "../components/atoms/custombutton/BackButton"
import Screen from "../components/atoms/screendimensions/Screen";
import TrackHdrBtn from "../components/atoms/custombutton/TrackHdrBtn";

import DealsStack from "../components/screens/DealsStack";
import DeliveryDetails from "../components/screens/DeliveryDetails";
import ConvenienceScreen from "../components/screens/ConvenienceScreen";
import OrderSelection from "../components/screens/OrderSelection"
import RestourantDetails from "../components/screens/RestourantDetails";
import TrackOrder from "../components/screens/TrackOrder";
import SignInStack from "./SignInStack"
import {ThemeProvider,ThemeContext} from "../global/ThemeManager";



const backIcon = require("../../assets/icon/backArrow.png")
const user = require("../../assets/icon/user.png")
const cart = require("../../assets/icon/Cart1.png")

const Container = styled(Screen)``;

const Stack = createNativeStackNavigator();


const ToggleBtn = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return(
    <Button 
          color="#fff"
          title="THEME" 
          onPress={()=>{
            toggleTheme()
          }}/>
  )
}
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Host>
      <Stack.Navigator screenOptions={{ headerShown: false
        // title: "",
        // headerBackVisible: false, 
        // headerShown: true,
        // headerTransparent: true,
        // headerStyle: {
        // backgroundColor: '#416F71',
        // },
        // headerShadowVisible: false ,
        // headerRight:()=>(<ToggleBtn/>)
        }}>
        {/* <Stack.Screen
          name={ROUTES.SIGN_IN_STACK}
          options={{ headrShown: false }}
          component={SignInStack}
        /> */}
        

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
          options={{ headerShown: true, title: "",}}
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
  
