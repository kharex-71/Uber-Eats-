import { View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as ROUTES from "../../constants/routes";
import Text from "../atoms/fontsText/Text";
import Screen from "../atoms/screendimensions/Screen";
import PromotionWidget from "../molecules/PromotionWidget";
import RadioLabel from "../molecules/RadioLabel";
import CheckLabel from "../molecules/CheckLabel";
import { useEffect } from "react";
const Contaienr = styled(Screen)``;
const Price = styled(Text)`
  margin: 8px 0;
`;
const RestDescContainer = styled.ScrollView`
  padding: 40px 10px 0px 10px;
  /* margin-bottom: 200px; */
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
      price: 1.69,
      sale: false,
    },
    {
      id: 1,
      value: 2,
      label: "Cheeze Pizza",
      price: 12.99,
      sale: false,
    },
    {
      id: 2,
      value: 3,
      label: "Amigos Hawaiana Pizza",
      price: 16.99,
      sale: false,
    },
  ],
};

const OrderSelection = ({ route }) => {
  const navigation = useNavigation();
  const { restourantName, price, recipe } = route.params;
  const [total, setTotal] = useState(parseFloat(0));
  const [collector, setCollector] = useState(0);
  const [count, setCount] = useState(1);

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
      <RestDescContainer>
        <View>
          <Text type="Bold" size={24} color="black-400">
            {restourantName}
          </Text>
          <Text type="Bold" size={24} color="black-400">
            (Emeryville)
          </Text>
          <Price type="Bold" size={22} color="black-400">
            ${price}
          </Price>
          <Text type="Medium" size={16} color="gray-700">
            {recipe}
          </Text>
        </View>
        <PromotionWidget />
        <Required>
          <Text type="Medium" color="black-400" size={18}>
            Choose your sauce
          </Text>
          <View style={{ backgroundColor: "lightgray", borderRadius: 15 }}>
            <Text type="Bold" color="gray-700" size={14} style={{ padding: 4 }}>
              Required
            </Text>
          </View>
        </Required>

        <RadioLabel arry={obj.sauce} setCollector={setCollector} />

        <Required>
          <Text type="Medium" color="black-400" size={18}>
            Choose your size
          </Text>
          <View style={{ backgroundColor: "lightgray", borderRadius: 15 }}>
            <Text type="Bold" color="gray-700" size={14} style={{ padding: 4 }}>
              Required
            </Text>
          </View>
        </Required>
        <View>
          <RadioLabel arry={obj.size} setCollector={setCollector} />
        </View>
        <Required>
          <Text type="Medium" color="black-400" size={18}>
            Choose your crust
          </Text>
          <View style={{ backgroundColor: "lightgray", borderRadius: 15 }}>
            <Text type="Bold" color="gray-700" size={14} style={{ padding: 4 }}>
              Required
            </Text>
          </View>
        </Required>
        <View>
          <RadioLabel arry={obj.crust} setCollector={setCollector} />
        </View>
        <Required>
          <Text type="Medium" color="black-400" size={18}>
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
          <Text type="Medium" color="black-400" size={18}>
            Frequently brought together
          </Text>
        </Required>
        <View>
          {obj.supplement.map((item) => {
            return (
              <CheckLabel
                key={item.id}
                text={item.label}
                select={item.price}
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
              type="Medium"
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
          <TotalBox>
            <Text type="Bold" color="white-700">
              {total}
            </Text>
          </TotalBox>
        </Cashier>
        <View style={{ height: 111 }} />
      </RestDescContainer>
    </Contaienr>
  );
};
export default OrderSelection;
