import { Image, FlatList } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import ShopCard from "../organism/ShopCard";
import { store, shop } from "../../data/appData";

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

const ConvenienceScreen = ({ navigation: { goBack } }) => {
  const [store1, setStore1] = useState(store);
  const [shop2, setShop2] = useState(shop);
  return (
    <Contaienr>
      <MainWrapper>
        <HeaderWrapper>
          <IconContainer onPress={() => goBack()}>
            <Image source={backIcon} />
          </IconContainer>
          <TextContainer>
            <Text type="bold" color="black-400" size={36}>
              Convenience
            </Text>
          </TextContainer>
          <StoreInfo>
            <StoreTitle>
              <Text type="bold" color="black-400" size={30}>
                Featured stores
              </Text>
            </StoreTitle>
            <StoreImgContaienr>
              {/* {store.map((item) => {
                return <Image key={item.id} source={item.imgUrl} />;
              })} */}
              <FlatList
                data={store1}
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
          {shop2.map((item) => {
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
