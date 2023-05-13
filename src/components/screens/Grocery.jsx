import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import Button from "../atoms/custombutton/Button";
import { useNavigation } from "@react-navigation/native";
import * as ROUTES from "../../constants/routes";
const GroceryContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Grocery = () => {
  const navigation = useNavigation();
  return (
    <GroceryContainer>
      <Button
        title="DEALS"
        onPress={() => console.log("movida dro shemdegi screenis")}
      />
      <Text>GROCERY SCREEN</Text>
    </GroceryContainer>
  );
};

export default Grocery;
