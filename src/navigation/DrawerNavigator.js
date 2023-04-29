import React from "react";
import BottomTabNavigation from "./BottomTabNavigation";
import DrawerContant from "../components/screens/DrawerContant";

import * as ROUTES from "../constants/routes";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {

  return (
      <Drawer.Navigator drawerContent={props => <DrawerContant {...props}/>}>
        <Drawer.Screen
          name={ROUTES.BOTTOM_TAB_NAV}
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />   
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;

