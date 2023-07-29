import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigation from "./BottomTabNavigation";
import DrawerContant from "../components/screens/DrawerContant";

import * as ROUTES from "../constants/routes";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
      <Drawer.Navigator drawerContent={props => <DrawerContant {...props}/>}>
        <Drawer.Screen
          name={ROUTES.BOTTOM_TAB_NAV}
          component={BottomTabNavigation}
          options={{headerShown:false, title:false}}
        />   
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;

