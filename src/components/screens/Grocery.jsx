import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const GroceryContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Grocery = () => {
  return (
    <GroceryContainer>
      <Text>GROCERY SCREEN</Text>
    </GroceryContainer>
  );
};

export default Grocery;
