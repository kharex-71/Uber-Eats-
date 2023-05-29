import { View, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { ToggleButton, SectionTitle } from "./HomeStyled";
import Text from "../atoms/fontsText/Text";
import Screen from "../atoms/screendimensions/Screen";
import BigBtn from "../atoms/custombutton/BigBtn";
import OrderDetailsCard from "../molecules/OrderDetailsCard";
import OrderDeliveryCard from "../molecules/OrderDeliveryCard";
import RecommendationsCard from "../molecules/RecommendationsCard";

const Contaienr = styled(Screen)``;
const Wrapper = styled.ScrollView``;
const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 170px;
  padding-left: 15px;
`;
const CardWrapper = styled.View``;
const SectionBox = styled.View``;
const TextBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
`;
const TitleBox = styled.View``;
const SubTitleBox = styled.View``;

const data = [
  {
    id: 0,
    value: true,
    address: "San Francisco Bay Area",
    country: "UC",
  },

  {
    id: 1,
    value: false,
    address: "Meet at the door",
    properti: "Add delivery note",
  },
];
const data1 = [
  {
    id: 0,
    value: true,
    title: "Priority",
    price: 1.99,
  },

  {
    id: 1,
    value: false,
    title: "Standard",
  },
  {
    id: 2,
    value: false,
    title: "Standard",
  },
];
const data2 = [
  {
    id: 0,
    value: true,
    title: "Cantina Crispy Chicken",
    recommended: "Buy 1, get 1 free (add 2 to basket)",
  },

  {
    id: 1,
    value: false,
    title: "Spicy Cheesy Double",
    recommended: "Buy 1, get 1 free (add 2 to basket)",
  },
  {
    id: 2,
    value: false,
    title: "Mango Freeze",
    recommended: "Buy 1, get 1 free (add 2 to basket)",
  },
];

const DeliveryDetails = ({ navigation }) => {
  return (
    <Contaienr>
      <Wrapper>
        <HeaderContainer>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text type="bold" color="black-400" size={36}>
            Delivery Details
          </Text>
          <ToggleButton>
            <BigBtn title="Delivery" />
            <BigBtn title="Pickup" />
          </ToggleButton>
        </HeaderContainer>
        <CardWrapper>
          {data.map((item) => {
            return (
              <OrderDetailsCard
                key={item.id}
                title={item.address}
                icon={item.value}
              />
            );
          })}
        </CardWrapper>
        <SectionBox>
          <TextBox>
            <TitleBox>
              <Text type="medium" color="black-400" size={16}>
                Delivery time
              </Text>
            </TitleBox>
            <SubTitleBox>
              <Text type="medium" color="black-400" size={16}>
                15-30 min(s)
              </Text>
            </SubTitleBox>
          </TextBox>
          <CardWrapper>
            {data1.map((item) => {
              return (
                <OrderDeliveryCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
          </CardWrapper>
        </SectionBox>
        <SectionBox>
          <TextBox>
            <TitleBox>
              <Text type="medium" color="black-400" size={16}>
                Your items
              </Text>
            </TitleBox>
            <SubTitleBox>
              <Text type="medium" color="secondary-600" size={16}>
                see menu
              </Text>
            </SubTitleBox>
          </TextBox>
          <CardWrapper>
            {data2.map((item) => {
              return (
                <RecommendationsCard
                  key={item.id}
                  title={item.title}
                  icon
                  subTitle={item.recommended}
                />
              );
            })}
          </CardWrapper>
        </SectionBox>
      </Wrapper>
    </Contaienr>
  );
};

export default DeliveryDetails;
