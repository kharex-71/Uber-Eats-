import React, {useCallback, useEffect, useState} from "react";
import "react-native-gesture-handler";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigation from "./src/navigation/AppNavigation";



export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);
  const [uberFontsLoaded] = useFonts({
    'bold' : require("./assets/fonts/UberMoveTextBold.otf"),
    'light' : require("./assets/fonts/UberMoveTextLight.otf"),
    'medium' : require("./assets/fonts/UberMoveTextMedium.otf"),
    'regular' : require("./assets/fonts/UberMoveTextRegular.otf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!uberFontsLoaded){
    return undefined;
  }else{
    SplashScreen.hideAsync();
  }
  return <AppNavigation/>;
}
