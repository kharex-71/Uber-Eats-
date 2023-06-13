import { View, Image, Pressable, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import CustumInput from "../atoms/TextInput/CustumInput";
import HeaderBtn from "../atoms/custombutton/HeaderBtn";
import ProductFramework from "../molecules/ProductFramework";
import CtgrFrame from "../molecules/CtgrFrame";
import { category } from "../../data/appData";

let searchIcon = require("../../../assets/icon/Vector.png");
let timeIcon = require("../../../assets/grocery/iconclock.png");
let dollarIcon = require("../../../assets/grocery/dollarcoin.png");
let rightArrowIcon = require("../../../assets/icon/back.png");

const Container = styled(Screen)``;
const StoresWrapper = styled.ScrollView``;
const Header = styled.View`
  display: flex;
  align-items: center;
`;
const StoresInfoBox = styled.View`
  width: 344px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const StoresInfo = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
`;

const PromotionBox = styled.View``;
// const PromoText = styled(Text)`
//   /* position: absolute; */
// `;
const ProductionBox = styled.View`
  /* background-color: aqua; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;
const ActionBox = styled.View`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Required = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 16px;
`;

const ContentBox = styled.View``;
const FavoriteProducts = styled.View``;
const CtgrContainer = styled.View`
  margin: 30px 30px 73px;
`;
const OrderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StoreScreen = ({ route }) => {
  const [fetture, setFeature] = useState(true);
  const [ctgr, setCtgr] = useState(false);
  const [order, setOrder] = useState(false);

  const [storeCtgr, setStoreCtgr] = useState(category);

  const navigation = useNavigation();
  const store = route.params;
  const action = store.action;
  const prod = store.prod;
  const storesNmame = route.params.storesName;
  console.log(storesNmame);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: storesNmame,
      headerSearchBarOptions: {
        placeHolder: "Search",
      },
    });
  }, [navigation]);

  const btn = [
    { value: 0, title: "Featured" },
    { value: 1, title: "Categories" },
    { value: 2, title: "Orders" },
  ];
  //   console.log(prod);
  const handlePress = (title) => {
    if (title === "Featured") {
      setFeature(true);
      setCtgr(false);
      setOrder(false);
    } else if (title === "Categories") {
      setFeature(false);
      setCtgr(true);
      setOrder(false);
    } else if (title === "Orders") {
      setOrder(true);
      setFeature(false);
      setCtgr(false);
    }
  };
  return (
    <Container>
      <StoresWrapper>
        <Header>
          <StoresInfoBox>
            <StoresInfo>
              <Image source={timeIcon} style={{ marginRight: 7 }} />
              <Text type="light" color="black-400">
                in {store.time} minutes
              </Text>
            </StoresInfo>
            <StoresInfo>
              <Image source={dollarIcon} style={{ marginRight: 7 }} />
              <Text type="light" color="black-400">
                Pricing and Fees
              </Text>
            </StoresInfo>
            <BtnContainer>
              {btn.map((item, idx) => {
                return (
                  <HeaderBtn
                    key={idx}
                    title={item.title}
                    onPress={() => handlePress(item.title)}
                  />
                );
              })}
            </BtnContainer>
          </StoresInfoBox>
        </Header>
        {/* <Text type="light" color="black-400" size={24}>
          StoreScreen
        </Text> */}
        <ContentBox>
          <View>
            {fetture && (
              <FavoriteProducts>
                <PromotionBox>
                  <FlatList
                    data={action}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <ActionBox>
                        <Image source={item.imgUrl} />
                        <Text
                          style={{ position: "absolute", bottom: 10 }}
                          type="bold"
                          color="white-700"
                          size={14}
                        >
                          {item.title}
                        </Text>
                      </ActionBox>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                </PromotionBox>
                <View>
                  <Required>
                    <Text type="bold" color="black-400" size={18}>
                      Fruits & Vegetables
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        type="bold"
                        color="black-400"
                        size={18}
                        style={{ padding: 4 }}
                      >
                        see all
                      </Text>
                      <Image source={rightArrowIcon} />
                    </View>
                  </Required>
                  <ProductionBox>
                    <FlatList
                      data={prod}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                        <ProductFramework
                          title={item.name}
                          price={item.price}
                          imgUrl={item.imgUrl}
                        />
                      )}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    />
                  </ProductionBox>
                </View>
              </FavoriteProducts>
            )}
          </View>
          <View>
            {ctgr && (
              <CtgrContainer>
                {storeCtgr.map((item) => {
                  return (
                    <CtgrFrame
                      key={item.id}
                      title={item.title}
                      imgUrl={item.imgUrl}
                    />
                  );
                })}
              </CtgrContainer>
            )}
          </View>
          <View>
            {order && (
              <OrderContainer>
                <Text type="bold" color="black-400">
                  No recent orders
                </Text>
                <Text type="light" color="gray-700">
                  Your recent orders will appear here.
                </Text>
              </OrderContainer>
            )}
          </View>
        </ContentBox>
      </StoresWrapper>
    </Container>
  );
};

export default StoreScreen;
