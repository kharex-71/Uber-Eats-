import React, { useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Image, Text, View } from "react-native";
import Screen from "../atoms/screendimensions/Screen";
import HeaderBtn from "../atoms/custombutton/HeaderBtn";
import ShopCard from "../organism/ShopCard";
import { ScrollView } from "react-native-gesture-handler";

const BasketsContainer = styled.View`
  flex: 1;
  background: #ffffff;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 1px 17px 5px 15px;
  margin-bottom: 11px;
`;

const Order = styled.View`
  width: 107px;
`;

const HeaderTitle = styled.Text`
  position: absolute;
  top: 40px;
  right: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;

const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.View`
  margin-top: 71px;
`;

const Picture = styled.Image``;
const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  padding-bottom: 12px;
`;
const Review = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 0 27px 38px 27px;
`;

const icon = require("../../../assets/icon/back.png");

const shopData = {
  shoppingCart: [
    {
      idx: 0,
      title: "Begs & Megs",
      price: "1 item    US$43.00",
      desc: "Deliver to San Franciscao Bay Area",
      imgUrl: require("../../../assets/cartScreen/shopCart/shop-1.png"),
    },
    {
      idx: 1,
      title: "Begs & Megs",
      price: "1 item    US$43.00",
      desc: "Deliver to San Franciscao Bay Area",
      imgUrl: require("../../../assets/cartScreen/shopCart/shop-1.png"),
    },
    {
      idx: 2,
      title: "Begs & Megs",
      price: "1 item    US$43.00",
      desc: "Deliver to San Franciscao Bay Area",
      imgUrl: require("../../../assets/cartScreen/shopCart/shop-1.png"),
    },
    {
      idx: 3,
      title: "Begs & Megs",
      price: "1 item    US$43.00",
      desc: "Deliver to San Franciscao Bay Area",
      imgUrl: require("../../../assets/cartScreen/shopCart/shop-1.png"),
    },
  ],
};

const Baskets = () => {
  const [data, setData] = useState(false);
  return (
    <Screen>
      <BasketsContainer>
        <HeaderContainer>
          <Order>
            <HeaderBtn
              light
              title="Order"
              iconLeft={require("../../../assets/icon/orders.png")}
              onPress={() => console.log("Order")}
            />
          </Order>
          <HeaderTitle>Carts</HeaderTitle>
        </HeaderContainer>
        {data && (
          <Content>
            <ImageContainer>
              <Picture
                source={require("../../../assets/cartScreen/cart-1.png")}
              />
            </ImageContainer>
            <Title>Add items to start a basket</Title>
            <Review>
              Once you add items from a restuarant or store, your basket will
              appear here.
            </Review>
            <HeaderBtn
              title="Start Shopping"
              onPress={() => console.log("start shopping")}
            />
          </Content>
        )}
        <ScrollView>
          {shopData.shoppingCart.map((item) => {
            return (
              <ShopCard
                key={item.idx}
                title={item.title}
                price={item.price}
                subTitle={item.desc}
                imgUrl={item.imgUrl}
                iconUrl={icon}
              />
            );
          })}
        </ScrollView>
      </BasketsContainer>
    </Screen>
  );
};

export default Baskets;
