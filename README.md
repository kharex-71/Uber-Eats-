# Uber-Eats- I added the files to the component folder

# Project Name

The project is a sample application that demonstrates the use of React Native and Expo.
I want him to have a home in "Space"

## Table of Contents

- [Introduction](#introduction)
- [Added Features](#added-features)
- [Modified Files](#modified-files)
- [Deleted Files](#deleted-files)

## Introduction

This is an app similar to Uber Eats, created during my studies at the Digital Institute, as part of the React Native Mobile Development course.

## Added Features

- Implemented custom font support using Expo Fonts.
- Added splash screen functionality with Expo SplashScreen.
- Created a new navigation component for improved app navigation.

## Modified Files

- `App.js`:

Summary:

- Added custom fonts for UberMoveTextBold, UberMoveTextLight, UberMoveTextMedium, and UberMoveTextRegular
- Added splash screen functionality using Expo SplashScreen
- Updated App component to handle font loading and display AppNavigation

Details:

- Added useFonts hook from expo-font package to load custom fonts: UberMoveTextBold.otf, UberMoveTextLight.otf, UberMoveTextMedium.otf, and UberMoveTextRegular.otf.
- Imported "react-native-gesture-handler" package for gesture handling in the app.
- Imported SplashScreen from the Expo package "expo-splash-screen" to manage the splash screen behavior.
- Configured useEffect hook to run an async function named 'prepare' to prevent the splash screen from automatically hiding.
- Inside the 'prepare' function, called SplashScreen.preventAutoHideAsync() to prevent the splash screen from hiding until explicitly instructed.
- Implemented a conditional rendering logic using the 'uberFontsLoaded' variable returned by the useFonts hook. If fonts are not yet loaded, return undefined to prevent rendering any UI until fonts are loaded. Otherwise, call SplashScreen.hideAsync() to hide the splash screen.
- Finally, returned the AppNavigation component to be rendered as the main navigation for the app.

- `package-lock.json`: A list of packages that I have installed for the application to work
  "@react-navigation/bottom-tabs": "^6.5.7",
  "@react-navigation/drawer": "^6.6.2",
  "@react-navigation/native-stack": "^6.9.12",
  "@react-navigation/stack": "^6.3.16",
  "expo-checkbox": "~2.3.1",
  "expo-font": "~11.1.1",
  "expo-splash-screen": "~0.18.2",
  "react-native-gesture-handler": "~2.9.0",
  "react-native-maps": "1.3.2",
  "react-native-modalize": "^2.1.1",
  "react-native-paper": "^5.7.0",
  "react-native-phone-number-input": "^2.1.0",
  "react-native-portalize": "^1.0.7",
  "react-native-reanimated": "~2.14.4",
  "react-native-safe-area-context": "4.5.0",
  "react-native-screens": "^3.20.0",
  "react-native-simple-radio-button": "^2.7.4",
  "react-native-svg": "13.4.0",
  "react-native-vector-icons": "^9.2.0",
  "react-native-web": "~0.18.10",
  "styled-components": "^5.3.9"
- `package.json`: A list of packages that I have installed for the application to work.
  "@react-navigation/bottom-tabs": "^6.5.7",
  "@react-navigation/drawer": "^6.6.2",
  "@react-navigation/native-stack": "^6.9.12",
  "@react-navigation/stack": "^6.3.16",
  "expo-checkbox": "~2.3.1",
  "expo-font": "~11.1.1",
  "expo-splash-screen": "~0.18.2",
  "react-native-gesture-handler": "~2.9.0",
  "react-native-maps": "1.3.2",
  "react-native-modalize": "^2.1.1",
  "react-native-paper": "^5.7.0",
  "react-native-phone-number-input": "^2.1.0",
  "react-native-portalize": "^1.0.7",
  "react-native-reanimated": "~2.14.4",
  "react-native-safe-area-context": "4.5.0",
  "react-native-screens": "^3.20.0",
  "react-native-simple-radio-button": "^2.7.4",
  "react-native-svg": "13.4.0",
  "react-native-vector-icons": "^9.2.0",
  "react-native-web": "~0.18.10",
  "styled-components": "^5.3.9"
- `src/components/atoms/custombutton/BigBtn.js`: This component creates a clickable container with a title, subtitle and optional icon. It is used many times in the project and I have to change it many times as the design changes to make it flexible and functional..
- `src/components/atoms/custombutton/DealsBtn.js`: This component creates a clickable container with a title, subtitle and optional imgUrl.
- `src/components/atoms/custombutton/HeaderBtn.js`: This component creates a catch container with a title, it has been used many times in the project and I have to change it many times due to changes in its design, it is a small component but I have not finished it yet
- `src/components/atoms/fontsText/Text.jsx`:
  -The Txt component is a styled Text element defined using styled-components/native. It has a font-family property that dynamically sets the font family based on the type prop value using a switch statement. The font-size property is determined by the size prop, which defaults to 16 pixels if not provided. The color property is also dynamically set based on the color prop value using a switch statement.
  -The Text component itself is a functional component that accepts props such as children (the content to be displayed), type, size, color, and other additional props. It renders the Txt component with the provided props passed down. The type prop is used to determine the font family, the size prop sets the font size, and the color prop determines the text color.
  -Overall, the Text component provides a customizable and reusable text element with flexible styling options for font family, size, and color. It allows for easy integration and usage in React Native applications to display text with varying styles and properties..
- `src/components/atoms/screendimensions/Screen.jsx`: This component serves as a wrapper for screen components and provides a background image and a safe area container. Here's a brief description of the

component:

The windowWidth and windowHeight variables are set to the dimensions of the screen using the Dimensions API from react-native.

The MainWrapper component is a KeyboardAvoidingView component that acts as the main wrapper for the screen. It has a height of 100% and can adjust its behavior based on the platform. By default, it avoids the keyboard when it appears on iOS devices.

The Background component is an ImageBackground component that sets the background image for the screen. It uses the windowWidth and windowHeight variables to determine the width and height, respectively, matching the dimensions of the screen.

The Container component is a SafeAreaView component that acts as the safe area container for the screen. It takes up the full available space and provides padding to ensure content does not overlap with device notches or navigation bars. It has a white background color.

The Screen component itself is a functional component that accepts props such as children (the content to be displayed) and other additional props. It renders the MainWrapper component with the appropriate behavior based on the platform. Inside the MainWrapper, it renders the Background component with the background image and the Container component as the parent for the screen content.

Overall, the Screen component provides a standardized layout for screen components with a background image and safe area container. It ensures that content is displayed correctly across different devices and platforms, providing a consistent user experience in React Native applications.

- `src/components/molecules/CheckLabel.js`:
  -The CheckBox component accepts props such as text, number, select, and setCollector.
  -text represents the label or text associated with the checkbox.
  number represents an optional number value associated with the checkbox.
  select represents an optional text indicating additional options associated with the checkbox.
  setCollector is a function used to update the collector value (a numerical value associated with the checkbox).
  Inside the component, the state isChecked is initialized using the useState hook, representing whether the checkbox is checked or not.

## -The handlePress function is defined to handle the checkbox value change. It updates the isChecked state and updates the collector value based on whether the checkbox is checked or unchecked.

- `src/components/molecules/PromotionWidget.js`:The component is sold separately so that I can use it on different screens and deliver ads to the user as desired.
- `src/components/molecules/RadioLabel.js`:The component works in much the same way as a checkbox, but unlike it, it cannot be checked twice.
- `src/components/organism/Promotion.js`:I have finished working on the advertising component and I am not writing the final comment for the time being
- `src/components/organism/RestDetailsCard.js`: The component receives a title, price, recipe, image, and its container is press-ready, because the information contained in it is for the customer to order.
- `src/components/organism/SearchFilter.js`: I have not finished working on the component...
- `src/components/organism/SettingsCard.js`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/organism/styles.js`: I created a stylistic component to prepare the components. The components assembled in it are used in files where I did not want to overload the file with style.
- `src/components/screens/Account.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/Browse.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/ConvenienceScreen.jsx`: Only the design of the component is assembled, its functionality has not yet been thought of....
- `src/components/screens/DealsStack.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/Grocery.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/Home.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/HomeStyled.js`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/OrderSelection.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/RestourantDetails.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/components/screens/SignIn.jsx`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/constants/routes.js`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/navigation/AccountNavigation.js`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `src/navigation/AppNavigation.js`: ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
- `assets/restourantimg/restDetScreen.png`: "++++++++++++++++++++++++++"
- `src/components/atoms/Map.jsx`: "+++++++++++++++++++++++++++++"
- `src/components/atoms/custombutton/LargBtn.js`: "+++++++++++++++++++++++++++++++"
- `src/components/atoms/custombutton/LargBtnLight.js`: "+++++++++++++++++++++++++"
- `src/components/molecules/OrderDeliveryCard.js`: "+++++++++++++++++++++++++"
- `src/components/molecules/OrderDetailsCard.js`: "+++++++++++++++++++++++++"
- `src/components/molecules/RecommendationsCard.js`: "+++++++++++++++++++++++++"
- `src/components/screens/DeliveryDetails.jsx`: "+++++++++++++++++++++++++"

## Deleted Files

- `src/components/screens/OrderScreen.jsx`: Removed the unused helper.js file.
- `src/components/screens/SignUp.js`: Deleted the old theme.css file.
