import { Image, FlatList } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import ShopCard from "../organism/ShopCard";

const backIcon = require("../../../assets/icon/backArrow.png");
const RaitingIcon = require("../../../assets/icon/ratingIconBlack.png");

const Contaienr = styled(Screen)``;

const MainWrapper = styled.ScrollView``;

const IconContainer = styled.Pressable`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderWrapper = styled.View`
  margin: 15px 18px;
`;
const TextContainer = styled.View`
  margin-top: 7px;
`;

const StoreInfo = styled.View`
  margin-top: 20px;
`;

const StoreTitle = styled.View`
  margin-bottom: 14px;
`;

const StoreImgContaienr = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ShopContainer = styled.View`
  margin-top: 7px;
  padding-left: 21px;
  padding-right: 21px;
`;

const store = [
  {
    id: 0,
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-shop/StoreCard1.png"),
  },
  {
    id: 1,
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-shop/StoreCard2.png"),
  },
  {
    id: 2,
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-shop/StoreCard1.png"),
  },
  {
    id: 3,
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-shop/StoreCard2.png"),
  },
];

const shop = [
  {
    id: 0,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-1.png"),
  },
  {
    id: 1,
    title: "Orange Inn",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-11.png"),
  },
  {
    id: 2,
    title: "Bricks Guards",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-2.png"),
  },
  {
    id: 3,
    title: "7Eleven",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-3.png"),
  },
  {
    id: 4,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-4.png"),
  },
  {
    id: 5,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-5.png"),
  },
  {
    id: 6,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-6.png"),
  },
  {
    id: 7,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-7.png"),
  },
  {
    id: 8,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-8.png"),
  },
  {
    id: 9,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-9.png"),
  },
  {
    id: 12,
    title: "Begs & Megs",
    open: "Opens at 08:00",
    imgUrl: require("../../../assets/cartScreen/shopCart/shop-10.png"),
  },
];

const ConvenienceScreen = ({ navigation: { goBack } }) => {
  return (
    <Contaienr>
      <MainWrapper>
        <HeaderWrapper>
          <IconContainer onPress={() => goBack()}>
            <Image source={backIcon} />
          </IconContainer>
          <TextContainer>
            <Text type="Bold" color="black-400" size={36}>
              Convenience
            </Text>
          </TextContainer>
          <StoreInfo>
            <StoreTitle>
              <Text type="Bold" color="black-400" size={30}>
                Featured stores
              </Text>
            </StoreTitle>
            <StoreImgContaienr>
              {/* {store.map((item) => {
                return <Image key={item.id} source={item.imgUrl} />;
              })} */}
              <FlatList
                data={store}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Image source={item.imgUrl} style={{ marginLeft: 10 }} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </StoreImgContaienr>
          </StoreInfo>
        </HeaderWrapper>
        <ShopContainer>
          {shop.map((item) => {
            return (
              <ShopCard
                key={item.id}
                subTitle={item.open}
                title={item.title}
                imgUrl={item.imgUrl}
                iconUrl={RaitingIcon}
              />
            );
          })}
        </ShopContainer>
      </MainWrapper>
    </Contaienr>
  );
};

export default ConvenienceScreen;
