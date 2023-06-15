import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import OrderDetailsCard from "../molecules/OrderDetailsCard";
import GroceryCard from "../molecules/GroceryCard";
import styled from "styled-components/native";
import { data } from "../../data/appData";

const Container = styled(Screen)``;
const MainBox = styled.ScrollView`
  width: 100%;
  background-color: #ffffff;
`;
const GroceryStoresScreen = styled.View``;

const Info = styled.View``;
const ContantBox = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Grocery = () => {
  const [api, setApi] = useState(data);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerSearchBarOptions: {
        placeHolder: "Search stores and produ...",
      },
    });
  }, [navigation]);

  return (
    <Container>
      <MainBox>
        <GroceryStoresScreen>
          <Info>
            <OrderDetailsCard
              address="San Francisco Bay Area"
              person="John’s List"
            />
          </Info>
          <ContantBox>
            {api.map((item) => {
              return (
                <GroceryCard
                  key={item.id}
                  imgUrl={item.logo}
                  color={item.color}
                  delivery={item.delivery}
                  onPress={() =>
                    navigation.navigate(ROUTES.STORE_SCREEN, {
                      id: item.id,
                      storesName: item.shopName,
                      time: item.delivery,
                      action: item.promotion,
                      prod: item.production,
                    })
                  }
                />
              );
            })}
          </ContantBox>
        </GroceryStoresScreen>
      </MainBox>
    </Container>
  );
};

export default Grocery;
