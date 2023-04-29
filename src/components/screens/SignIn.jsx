import React, { useState } from "react";
import { Pressable, Text, View,Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {FontAwesomeIcon} from "react-native-vector-icons/FontAwesome5"

import Button from "../atoms/custombutton/Button";

import styled from "styled-components/native";
import * as ROUTES from "../../constants/routes";




const Container = styled(View)`
  flex-direction: column;
`;

const Picture = styled(Image)`
 width: 100%;
`;

const SignupContainer = styled(View)`
  align-items: center;
  justify-content: space-evenly;
`;


const ContentText = styled(Text)`
color: #000000;
font-weight: 500;
font-size: 30px;
line-height: 36px;
margin-top: 10px;
`;

const SinUpInput = styled(TextInput)`
width: 345px;
height: 51px;
background: #F5F5F5;
border: 1px solid #E6E6E6;
`;


const SignIn = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Picture source={require('../../../assets/picture/LoadingScreen.png')}/>
      <SignupContainer>
        <ContentText>Use your uber account to get started</ContentText>
        
        <Button title="Sing in" onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)} />
        <SinUpInput
        value="number"
        
        
        />
        <FontAwesomeIcon icon="fa-regular fa-earth-americas" />
      </SignupContainer>
    </Container>
  );
};

export default SignIn;
