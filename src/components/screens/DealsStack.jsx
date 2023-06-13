import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, FlatList } from "react-native";
import styled from "styled-components/native";

import Screen from "../atoms/screendimensions/Screen";
import DealsBtn from "../atoms/custombutton/DealsBtn";
import MainCard from "../organism/MainCard";
import { dataDeals } from "../../data/appData";

const Container = styled(Screen)``;

const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #ffffff;
`;

const Offers = styled.View`
  /* padding-bottom: 50px; */
  padding: 0 6px 50px;
  background-color: #ffffff;
  margin-top: 10px;
`;

const Rewards = styled.View``;

const DealsStack = ({ route }) => {
  const navigation = useNavigation();

  const passenger = route.params;
  console.log("passenger");
  const [deals, setDeals] = useState(dataDeals);
  const [data, setdata] = useState([]);
  const [sort, setSort] = useState(0);
  const fetchData = () => {
    if (sort === 0) {
      setdata(data);
    } else if (sort === 1) {
      setdata(data);
    }
  };

  const handlePress = (value) => {
    setSort(value);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  });

  const btns = [
    {
      value: 0,
      title: "Offers",
      iconUrl: require("../../../assets/icon/offers.png"),
    },
    {
      value: 1,
      title: "Rewards",
      iconUrl: require("../../../assets/icon/rewards.png"),
    },
  ];

  return (
    <Container>
      <Buttons>
        {btns.map((item) => {
          return (
            <DealsBtn
              key={item.value}
              title={item.title}
              imgUrl={item.iconUrl}
              light={item.value === sort ? true : false}
              onPress={() => handlePress(item.value)}
            />
          );
        })}
      </Buttons>
      <Offers>
        <FlatList
          data={deals.offers}
          renderItem={({ item }) => (
            <MainCard
              keyExtractor={(item) => item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              price={item.price}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={sort === 0 ? item.promotion : ""}
              distance={item.distance}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Offers>
      <Rewards>
        <FlatList
          data={deals.rewards}
          renderItem={({ item }) => (
            <MainCard
              keyExtractor={(item) => item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              price={item.price}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={sort === 0 ? item.promotion : ""}
              distance={item.distance}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Rewards>
    </Container>
  );
};

export default DealsStack;
