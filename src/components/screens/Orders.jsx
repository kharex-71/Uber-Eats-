import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const OrdersContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Orders = () => {
  return (
    <OrdersContainer>
      <Text>ORDERS SCREEN</Text>
    </OrdersContainer>
  );
};

export default Orders;
