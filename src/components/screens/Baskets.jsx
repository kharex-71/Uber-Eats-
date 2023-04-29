import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const BasketsContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Baskets = () => {
  return (
    <BasketsContainer>
      <Text>Baskets SCREEN</Text>
    </BasketsContainer>
  );
};

export default Baskets;
