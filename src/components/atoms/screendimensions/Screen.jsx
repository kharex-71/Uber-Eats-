import React from "react";
import { Platform, Dimensions } from "react-native";
import styled from "styled-components";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const MainWrapper = styled.KeyboardAvoidingView`
  display: flex;
  height: 100%;
`;

const Background = styled.ImageBackground`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Screen = ({ children }) => {
  return (
    <MainWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Background>
        <Container>{children}</Container>
      </Background>
    </MainWrapper>
  );
};

export default Screen;
