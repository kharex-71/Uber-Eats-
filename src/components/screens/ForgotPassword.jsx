import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Screen from "../atoms/screendimensions/Screen";
const Container = styled(Screen)``;

const ForgotPassword = () => {
  return (
    <Container>
      <Text>Forgot Password</Text>
    </Container>
  );
};

export default ForgotPassword;
