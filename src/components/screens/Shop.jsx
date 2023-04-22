import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const ShopContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Shop = () => {
  return (
    <ShopContainer>
      <Text>SHOP SCREEN</Text>
    </ShopContainer>
  );
};

export default Shop;
