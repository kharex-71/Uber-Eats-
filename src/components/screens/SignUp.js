import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import * as ROUTES from "../../constants/routes";
import Button from '../atoms/custombutton/Button';
import CustumInput from '../atoms/TextInput/CustumInput';
import LoginScreenImage from "../images/LoginScreenImages";
import Screen from '../atoms/screendimensions/Screen';
import Text from '../atoms/fontsText/Text';

const UserIcon = require("../../../assets/icon/user.png")
const PasswordIcon = require("../../../assets/icon/eye.png")




const SignUp = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.wrapper}>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
        <LoginScreenImage style={{marginBottom:20}}/>
        </View>
      <Text type="Medium" size={24} color='black-400' style={{marginBottom:20}}>Log in or enter a personal account</Text>
      <CustumInput icon={UserIcon} placeholder="UserName"/>
      <CustumInput icon={PasswordIcon} placeholder="Password"/>
      <Button
        light
        text="SignUp"
        onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
      />
      </View>
      </View>
    </Screen>
  );
};

export default SignUp

const styles = StyleSheet.create({
  wrapper:{
    marginTop:28,
  },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    imageContainer: {
        alignItems: "center"
    },
})