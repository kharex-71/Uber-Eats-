import Home from "../components/screens/Home";
import Orders from "../components/screens/Orders";
import Shop from "../components/screens/Shop";
import Settings from "../components/screens/Settings";

import * as ROUTES from "../constants/routes";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Order" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={Settings}
        options={{ title: "Settings" }}
      />
      <Drawer.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Stack.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        options={{ headrShown: false }}
        component={BottomTabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
