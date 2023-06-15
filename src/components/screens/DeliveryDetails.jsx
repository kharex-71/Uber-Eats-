import { View, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { ToggleButton, SectionTitle } from "./HomeStyled";
import Text from "../atoms/fontsText/Text";
import Screen from "../atoms/screendimensions/Screen";
import BigBtn from "../atoms/custombutton/BigBtn";
import OrderDetailsCard from "../molecules/OrderDetailsCard";
import OrderDeliveryCard from "../molecules/OrderDeliveryCard";
import RecommendationsCard from "../molecules/RecommendationsCard";
import CardOfPurchasedProducts from "../molecules/CardOfPurchasedProducts";
import LargBtn from "../atoms/custombutton/LargBtn";
import * as ROUTES from "../../constants/routes";

let icon = require("../../../assets/icon/back.png");
let plius = require("../../../assets/icon/Plusplusi.png");

const Contaienr = styled(Screen)``;
const Wrapper = styled.ScrollView`
  height: 100%;
`;
const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 170px;
  padding-left: 15px;
`;
const CardWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
const SectionBox = styled.View`
  margin: 0 5px;
`;
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
    iconUrl: require("../../../assets/icon/location.png"),
  },

  {
    id: 1,
    value: false,
    address: "Meet at the door",
    properti: "Add delivery note",
    iconUrl: require("../../../assets/icon/Person1.png"),
  },
];
const data1 = [
  {
    id: 0,
    value: true,
    title: "Priority",
    subTitle: "Delivered directly to you",
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

const DeliveryDetails = ({ navigation, route }) => {
  const numbersBrought = route.params;
  const btn = [
    {
      id: 0,
      value: 1,
      title: "Delivery",
      rame: true,
    },
    {
      id: 1,
      value: 2,
      title: "Pickup",
    },
  ];
  const heandlePress = (num) => {
    if (num === 1) {
      console.log("one");
    } else if (num === 2) {
      console.log("two");
    } else {
      console.log("error");
    }
  };

  return (
    <Contaienr>
      <Wrapper showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <Text type="bold" color="black-400" size={36}>
            Delivery Details
          </Text>
          <ToggleButton>
            {btn.map((item) => {
              return (
                <BigBtn
                  key={item.id}
                  title={item.title}
                  onPress={() => heandlePress(item.value)}
                  light={item.rame}
                />
              );
            })}
          </ToggleButton>
        </HeaderContainer>
        <CardWrapper>
          {data.map((item) => {
            return (
              <OrderDetailsCard
                key={item.id}
                address={item.address}
                country={item.country}
                properti={item.properti}
                iconLeft={item.iconUrl}
                iconRight={icon}
              />
            );
          })}
        </CardWrapper>
        <SectionBox>
          <TextBox>
            <TitleBox>
              <Text type="bold" color="black-400" size={16}>
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
                  subTitle={item.subTitle}
                  price={item.price}
                  border={item.value}
                  onPress={() => console.log(item.title)}
                />
              );
            })}
          </CardWrapper>
        </SectionBox>
        <SectionBox>
          <TextBox>
            <TitleBox>
              <Text type="bold" color="black-400" size={16}>
                Your items
              </Text>
            </TitleBox>
            <SubTitleBox>
              <Text type="medium" color="secondary-600" size={16}>
                see menu
              </Text>
            </SubTitleBox>
          </TextBox>
          <SectionBox>
            <CardOfPurchasedProducts
              quantity={numbersBrought.count}
              price={numbersBrought.total}
            />
          </SectionBox>
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
        <View>
          <BigBtn title="Add items" light iconUrl={plius} />
        </View>
        <View style={{ alignItems: "center" }}>
          <LargBtn
            onPress={() => navigation.navigate(ROUTES.TRACK_ORDER_SCREEN)}
          />
        </View>
      </Wrapper>
    </Contaienr>
  );
};

export default DeliveryDetails;
