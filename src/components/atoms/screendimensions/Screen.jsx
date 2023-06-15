import React from "react";
import { Platform, Dimensions } from "react-native";
import styled from "styled-components";
import { ThemeContext } from "../../../global/ThemeManager";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const MainWrapper = styled.KeyboardAvoidingView`
  display: flex;
  height: 100%;
  background: #ffffff;
`;

const Background = styled.ImageBackground`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

const Screen = ({ mode, children, ...otherProps }) => {
  return (
    <MainWrapper
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...otherProps}
    >
      <Background>
        <Container>{children}</Container>
      </Background>
    </MainWrapper>
  );
};

export default Screen;
