import React from "react";
import {View,Pressable,Image} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ROUTES from "../constants/routes";
import Grocery from "../components/screens/Grocery"
import StoreScreen from "../components/screens/StoreScreen";
import Text from "../components/atoms/fontsText/Text";
import BackButton from "../components/atoms/custombutton/BackButton";

const backIcon = require("../../assets/icon/backArrow.png")
const user = require("../../assets/icon/user.png")
const cart = require("../../assets/icon/Cart1.png")


const Stack = createNativeStackNavigator();

function StackGrocery({navigation}) {
  return (
    <Stack.Navigator
     screenOptions={() => ({headerShown:true,title: "", headerShadowVisible: false,
      headerRight: ()=> (
        <View style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
          <Pressable>
            <Image source={user} style={{marginRight:23}}/>
          </Pressable>
          <Pressable>
            <Image source={cart}/>
          </Pressable>
        </View>
      ),
    })}
    >
      <Stack.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{headerLeft:()=>(
          <View style={{display: "flex", alignItems: "center",flexDirection:"row"}}>
              <BackButton iconUrl={backIcon} onPress={()=> navigation.navigate(ROUTES.HOME_SCREEN) }/>
              <Text type="bold" color="black-400" size={20} style={{paddingLeft: 7}}>Stores</Text>
          </View>
        )}}
      />
      <Stack.Screen
        name={ROUTES.STORE_SCREEN}
        component={StoreScreen}
      />
    </Stack.Navigator>
  );
}

export default StackGrocery;