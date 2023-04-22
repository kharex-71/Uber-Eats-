import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../atoms/custombutton/Button";
import Input from "../atoms/customInput/Input";
import Screen from "../atoms/screendimensions/Screen";
import LoginScreenImage from "../images/LoginScreenImages";

import styled from "styled-components/native";
import * as ROUTES from "../../constants/routes";

const Container = styled(Screen)`
  flex: 1;
`;

const Image = styled(LoginScreenImage)`
  margin-top: 50px;
  margin-bottom: 28px;
`;

const ErorrText = styled(Text)`
  font-size: 10px;
  right: 10%;
  color: red;
`;

const Title = styled(Text)`
  color: #54924f;
  font-size: 16px;
`;

const ForgotContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

const SignupContainer = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const SignIn = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);

  const handlePress = () => {
    if (userName !== "" && password !== "") {
      navigation.navigate(ROUTES.BOTTOM_TAB_NAV, {
        userOfname: userName,
        Ofpassword: password,
      });
    } else {
      setInputError(true);
    }
  };

  return (
    <Container>
      <Image />
      <Input value={userName} placeholder="username" setValue={setUserName} />
      {inputError && <ErorrText>Username cannot be empty</ErorrText>}
      <Input
        value={password}
        placeholder="password"
        setValue={setPassword}
        secureTextEntry
      />
      {inputError && <ErorrText>Password cannot be empty</ErorrText>}
      <Button title="Sing in" onPress={handlePress} />
      <ForgotContainer>
        <Text>Forgot password? </Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <Title> Reset</Title>
        </Pressable>
      </ForgotContainer>
      <SignupContainer>
        <Text>Does`t have account? </Text>
        <Pressable onPress={() => navigation.navigate(ROUTES.SIGN_UP_SCREEN)}>
          <Title> Sign Up</Title>
        </Pressable>
      </SignupContainer>
    </Container>
  );
};

export default SignIn;
