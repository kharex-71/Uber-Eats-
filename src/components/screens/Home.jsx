import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const HomeContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Text>HOME SCREEN</Text>
    </HomeContainer>
  );
};

export default Home;
