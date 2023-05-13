import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import { log } from "react-native-reanimated";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import BrowseCard from "../organism/BrowseCard";
import SearchInput from "../atoms/TextInput/SearchInput";
import SearchFilter from "../organism/SearchFilter";
import { SectionTitle } from "./HomeStyled";

const Container = styled(Screen)``;
const Wrapper = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  /* margin-bottom: 78px; */
`;
const TopCtgr = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const AllCtgr = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 200px;
`;

const categories = {
  topcategories: [
    {
      id: 1,
      title: "Asian",
      imgUrl: require("../../../assets/brows/Asian.png"),
    },
    {
      id: 2,
      title: "Bakery",
      imgUrl: require("../../../assets/brows/Bakery.png"),
    },
    {
      id: 3,
      title: "Bestoverall",
      imgUrl: require("../../../assets/brows/Bestoverall.png"),
    },
    {
      id: 4,
      title: "Bubble Tea",
      imgUrl: require("../../../assets/brows/BubbleTea.png"),
    },
    {
      id: 5,
      title: "Burgers",
      imgUrl: require("../../../assets/brows/Burgers.png"),
    },
    {
      id: 6,
      title: "CategoryImage",
      imgUrl: require("../../../assets/brows/CategoryImage.png"),
    },
  ],
  allcategories: [
    {
      id: 7,
      title: "Coffee & tea",
      imgUrl: require("../../../assets/brows/Coffeetea.png"),
    },
    {
      id: 8,
      title: "Deals",
      imgUrl: require("../../../assets/brows/Deals.png"),
    },
    {
      id: 9,
      title: "Fast Food",
      imgUrl: require("../../../assets/brows/FastFood.png"),
    },
    {
      id: 10,
      title: "Healthy",
      imgUrl: require("../../../assets/brows/Healthy.png"),
    },
    {
      id: 11,
      title: "Juice Smoothies",
      imgUrl: require("../../../assets/brows/JuiceSmoothies.png"),
    },
    {
      id: 12,
      title: "Korean",
      imgUrl: require("../../../assets/brows/Korean.png"),
    },
    {
      id: 13,
      title: "Mexican",
      imgUrl: require("../../../assets/brows/Mexican.png"),
    },
    {
      id: 14,
      title: "Pizza",
      imgUrl: require("../../../assets/brows/Pizza.png"),
    },
    {
      id: 15,
      title: "Restaurant",
      imgUrl: require("../../../assets/brows/Restaurant.png"),
    },
    {
      id: 16,
      title: "Sandwich",
      imgUrl: require("../../../assets/brows/sandwich1.png"),
    },
    {
      id: 17,
      title: "Shipped free",
      imgUrl: require("../../../assets/brows/Shippedfree.png"),
    },
    {
      id: 18,
      title: "Sushi",
      imgUrl: require("../../../assets/brows/Sushi.png"),
    },
    {
      id: 19,
      title: "Vegan",
      imgUrl: require("../../../assets/brows/Vegan.png"),
    },
    {
      id: 20,
      title: "Vietnamese",
      imgUrl: require("../../../assets/brows/Vietnamese.png"),
    },
  ],
};

const Browse = () => {
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  return (
    <Container>
      <Wrapper>
        {/* <SearchInput
          placeholder="search"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <SearchFilter
          data={categories.allcategories}
          input={input}
          setInput={setInput}
        /> */}
        <SectionTitle>Top Categories</SectionTitle>
        <TopCtgr>
          {categories.topcategories.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => navigation.navigate(ROUTES.DEALS_STACK)}
              />
            );
          })}
        </TopCtgr>
        <SectionTitle>All Categories</SectionTitle>
        <AllCtgr>
          {categories.allcategories.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log("Browse Card")}
              />
            );
          })}
        </AllCtgr>
      </Wrapper>
    </Container>
  );
};

export default Browse;
