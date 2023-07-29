import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { Portal } from "react-native-portalize";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

import * as ROUTES from "../../constants/routes";
import Bottom from "../atoms/BottomSheet/Bottom";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import RadioLabel from "../molecules/RadioLabel";
import CheckLabel from "../molecules/CheckLabel";
import PromotionWidget from "../molecules/PromotionWidget";
import LargBtn from "../atoms/custombutton/LargBtn";
import LargBtnLight from "../atoms/custombutton/LargBtnLight";
import RecommendationsCard from "../molecules/RecommendationsCard";
import CardOfPurchasedProducts from "../molecules/CardOfPurchasedProducts";

const Contaienr = styled(Screen)``;
const Price = styled(Text)`
  margin: 8px 0;
`;
const RestDescContainer = styled.ScrollView`
  padding: 7px 10px 0 10px;
  margin-bottom: 40px;
`;

const Required = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 55px;
`;

const Cashier = styled.View`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CounterBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TotalBox = styled.Pressable`
  width: 100%;
  height: 54px;
  background-color: #000000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const BottomSheetWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeaderBox = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #eeeeee;
`;
const CartBox = styled.View`
  margin: 16px;
`;
const BtnBox = styled.View`
  display: flex;
  align-items: center;
  margin: 0 16px;
`;
const PurchaseBox = styled.View`
  margin: 27px 16px 16px;
`;

const obj = {
  sauce: [
    {
      id: 0,
      value: 1,
      price: 0,
      label: "Mariana Sauce",
      sale: false,
    },
    {
      id: 1,
      value: 2,
      price: 0,
      label: "Garlicky Sauce",
      sale: false,
    },
    {
      id: 2,
      value: 3,
      price: 0,
      label: "Pesto Sauce",
      sale: false,
    },
    {
      id: 3,
      value: 4,
      price: 0,
      label: "BBQ Sauce",
      sale: false,
    },
    {
      id: 4,
      value: 5,
      price: 0,
      label: "Buffalo Sauce",
      sale: false,
    },
  ],
  size: [
    {
      id: 0,
      value: 1,
      label: "Small 10” (6 Slices)",
      sale: false,
    },
    {
      id: 1,
      value: 2,
      label: "Medium 12” (8 Slices)",
      price: 4,
      sale: false,
    },
    {
      id: 2,
      value: 3,
      label: "Large 14” (8 Slices)",
      price: 10,
      sale: false,
    },
    {
      id: 3,
      value: 4,
      label: "Extra large 16” (12Slices)",
      price: 15,
      sale: false,
    },
    {
      id: 4,
      value: 5,
      label: "Super 20” (12 Slices)",
      price: 18,
      sale: false,
    },
    {
      id: 5,
      value: 6,
      label: "24",
      price: 24,
      sale: false,
    },
  ],
  crust: [
    {
      id: 0,
      value: 1,
      label: "Regular Crust",
      sale: false,
    },
    {
      id: 1,
      value: 1,
      label: "Corn Skinny Crust",
      price: 4,
      sale: false,
    },
    {
      id: 2,
      value: 1,
      label: "Thick Pan Crust",
      price: 10,
      sale: false,
    },
  ],
  add: [
    {
      id: 0,
      value: 1,
      add: "1 Side of Ranch Dressing",
      price: 5,
      sale: false,
    },
    {
      id: 1,
      value: 2,
      add: "2 Side of Ranch Dressing",
      price: 1,
      sale: false,
    },
    {
      id: 2,
      value: 3,
      add: "Side of Marinara Sauce",
      price: 0.7,
      sale: false,
    },
  ],
  supplement: [
    {
      id: 0,
      value: 1,
      label: "Soda",
      price: 2,
      sale: false,
    },
    {
      id: 1,
      value: 2,
      label: "Cheeze Pizza",
      price: 4,
      sale: false,
    },
    {
      id: 2,
      value: 3,
      label: "Amigos Hawaiana Pizza",
      price: 8,
      sale: false,
    },
  ],
};

const orderData = [
  {
    id: 0,
    price: 0,
    label: "Cantina Crispy Chicken",
    subTitle: "Buy 1, get 1 free (add 2 to basket)",
    sale: false,
  },
  {
    id: 1,
    price: 0,
    label: "Spicy Cheesy Double",
    subTitle: "Buy 1, get 1 free (add 2 to basket)",
    sale: false,
  },
  {
    id: 2,
    price: 0,
    label: "Mango Freeze",
    subTitle: "Buy 1, get 1 free (add 2 to basket)",
    sale: false,
  },
];

const OrderSelection = ({ route, navigation: { goBack } }) => {
  const navigation = useNavigation();
  const { restourantName, price, recipe, address } = route.params;
  const [total, setTotal] = useState(parseFloat(0));
  const [collector, setCollector] = useState(0);
  const [count, setCount] = useState(1);
  const orderSheetRef = useRef();

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plius = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTotal(parseFloat(count) * 10 + parseFloat(collector));
  }, [count, collector]);

  const handleSubmit = () => {
    navigation.navigate(ROUTES.DELIVERY_DETAILS, { total, count }),
      orderSheetRef.current.close();
  };

  // const isChecked = (id, amount, arr) => {
  //   let num = parseInt(price);
  //   setCollector(num + (amount ? amount : 0));

  //   obj.size.forEach((item) => {
  //     if (item.id !== id) {
  //       item.sale = false;
  //     } else {
  //       item.sale = true;
  //     }
  //   });
  // };

  return (
    <Contaienr>
      <RestDescContainer showsVerticalScrollIndicator={false}>
        <View>
          <Text type="bold" size={24} color="black-400">
            {restourantName}
          </Text>
          <Text type="bold" size={24} color="black-400">
            (Emeryville)
          </Text>
          <Price type="bold" size={22} color="black-400">
            ${price}
          </Price>
          <Text type="medium" size={16} color="gray-700">
            {recipe}
          </Text>
        </View>
        <PromotionWidget />
        <Required>
          <Text type="medium" color="black-400" size={18}>
            Choose your sauce
          </Text>
          <View style={{ backgroundColor: "lightgray", borderRadius: 15 }}>
            <Text type="bold" color="gray-700" size={14} style={{ padding: 4 }}>
              Required
            </Text>
          </View>
        </Required>
        <RadioLabel arry={obj.sauce} setCollector={setCollector} />
        <Required>
          <Text type="medium" color="black-400" size={18}>
            Choose your size
          </Text>
          <View style={{ backgroundColor: "lightgray", borderRadius: 15 }}>
            <Text type="bold" color="gray-700" size={14} style={{ padding: 4 }}>
              Required
            </Text>
          </View>
        </Required>
        <View>
          <RadioLabel arry={obj.size} setCollector={setCollector} />
        </View>
        <Required>
          <Text type="medium" color="black-400" size={18}>
            Choose your crust
          </Text>
          <View style={{ backgroundColor: "lightgray", borderRadius: 15 }}>
            <Text type="bold" color="gray-700" size={14} style={{ padding: 4 }}>
              Required
            </Text>
          </View>
        </Required>
        <View>
          <RadioLabel arry={obj.crust} setCollector={setCollector} />
        </View>
        <Required>
          <Text type="medium" color="black-400" size={18}>
            Choose your add-ons
          </Text>
        </Required>
        <View>
          {obj.add.map((item) => {
            return (
              <CheckLabel
                key={item.id}
                text={item.add}
                number={item.price}
                setCollector={setCollector}
              />
            );
          })}
        </View>
        <Required>
          <Text type="medium" color="black-400" size={18}>
            Frequently brought together
          </Text>
        </Required>
        <View>
          {obj.supplement.map((item) => {
            return (
              <CheckLabel
                key={item.id}
                text={item.label}
                number={item.price}
                setCollector={setCollector}
              />
            );
          })}
        </View>
        <Cashier>
          <CounterBox>
            <AntDesign
              name="minuscircleo"
              size={50}
              color="black"
              onPress={minus}
            />
            <Text
              type="medium"
              color="black-400"
              size={18}
              style={{ padding: 10 }}
            >
              {total}
            </Text>
            <AntDesign
              name="pluscircleo"
              size={50}
              color="black"
              onPress={plius}
            />
          </CounterBox>
          <TotalBox onPress={() => orderSheetRef.current.open()}>
            <Text type="bold" color="white-700">
              Add {count} to basket US$ {total}
            </Text>
          </TotalBox>
        </Cashier>
        <View style={{ height: 47 }} />
      </RestDescContainer>
      <Portal>
        <Bottom bottomSheetRef={orderSheetRef} modalHeight={575}>
          <BottomSheetWrapper>
            <HeaderBox>
              <View
                style={{
                  paddingHorizontal: 44,
                  paddingVertical: 16,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text
                  type="bold"
                  color="black-400"
                  size={24}
                  style={{ textAlign: "center" }}
                >
                  {address}
                </Text>
                <Text type="medium" color="secondary-600" size={14}>
                  You‘re saving US$25
                </Text>
              </View>
            </HeaderBox>
            <PurchaseBox>
              <CardOfPurchasedProducts quantity={count} price={total} />
            </PurchaseBox>
            <CartBox>
              {orderData.map((item) => {
                return (
                  <RecommendationsCard
                    key={item.id}
                    title={item.label}
                    subTitle={item.subTitle}
                    icon
                    onPress={() => console.log("add item")}
                  />
                );
              })}
            </CartBox>
            <BtnBox>
              <LargBtn title="Go to Checkout" onPress={() => handleSubmit()} />
              <LargBtnLight
                title="Add items"
                onPress={() => console.log(collector, total, count)}
              />
            </BtnBox>
          </BottomSheetWrapper>
        </Bottom>
      </Portal>
    </Contaienr>
  );
};
export default OrderSelection;
