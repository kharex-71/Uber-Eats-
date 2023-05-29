import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import styled from "styled-components/native";

import Screen from "../atoms/screendimensions/Screen";
import DealsBtn from "../atoms/custombutton/DealsBtn";
import MainCard from "../organism/MainCard";

const Container = styled(Screen)``;

const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #ffffff;
`;

const Offers = styled.View`
  padding: 0 10px 130px;
`;

const Rewards = styled.View``;

const IconContainer = styled.Pressable``;
const ButtonContainer = styled.Pressable``;
const Title = styled.Text``;

const Line = styled.View``;

const dataDeals = {
  offers: [
    {
      id: 0,
      title: "Adenine Kitchen",
      imgUrl: require("../../../assets/restourantimg/AdenineKitchen.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 1,
      title: "African Flavour",
      imgUrl: require("../../../assets/restourantimg/AfricanFlavour.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 2,
      title: "Almafi VIP",
      imgUrl: require("../../../assets/restourantimg/AlmafiVIP.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 3,
      title: "BBN Inn",
      imgUrl: require("../../../assets/restourantimg/BBNInn.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 4,
      title: "Bellaciasus",
      imgUrl: require("../../../assets/restourantimg/Bellaciasus.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 5,
      title: "Chips Kong",
      imgUrl: require("../../../assets/restourantimg/ChipsKong.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 6,
      title: "Cardinal Ships",
      imgUrl: require("../../../assets/restourantimg/CardinalShips.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 7,
      title: "Casa Della Saucy",
      imgUrl: require("../../../assets/restourantimg/CasaDellaSaucy.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
    {
      id: 8,
      title: "Doantello",
      imgUrl: require("../../../assets/restourantimg/Doantello.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promotion: "5 orders until $8 reward",
    },
  ],
  rewards: [
    {
      id: 0,
      title: "Adenine Kitchen",
      imgUrl: require("../../../assets/restourantimg/AdenineKitchen.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 1,
      title: "African Flavour",
      imgUrl: require("../../../assets/restourantimg/AfricanFlavour.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 2,
      title: "Almafi VIP",
      imgUrl: require("../../../assets/restourantimg/AlmafiVIP.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 3,
      title: "BBN Inn",
      imgUrl: require("../../../assets/restourantimg/BBNInn.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 4,
      title: "Bellaciasus",
      imgUrl: require("../../../assets/restourantimg/Bellaciasus.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 5,
      title: "Chips Kong",
      imgUrl: require("../../../assets/restourantimg/ChipsKong.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Cardinal Ships",
      imgUrl: require("../../../assets/restourantimg/CardinalShips.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 7,
      title: "Casa Della Saucy",
      imgUrl: require("../../../assets/restourantimg/CasaDellaSaucy.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
    {
      id: 8,
      title: "Doantello",
      imgUrl: require("../../../assets/restourantimg/Doantello.png"),
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
    },
  ],
};

const DealsStack = () => {
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
          data={dataDeals.offers}
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
          data={dataDeals.rewards}
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
