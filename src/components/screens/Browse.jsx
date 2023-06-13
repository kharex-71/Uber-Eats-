import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";

import { categories } from "../../data/appData";

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
  /* padding: 10px; */
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
  padding-bottom: 100px;
`;

const Browse = () => {
  const [ctgr, setCtgr] = useState(categories);
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerSearchBarOptions: {
        placeHolder: "Search",
      },
    });
  }, [navigation]);

  return (
    <Container>
      <Wrapper>
        <SectionTitle>Top Categories</SectionTitle>
        <TopCtgr>
          {ctgr.topcategories.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() =>
                  navigation.navigate(ROUTES.DEALS_STACK, {
                    id: item.id,
                    num: item.value,
                  })
                }
              />
            );
          })}
        </TopCtgr>
        <SectionTitle>All Categories</SectionTitle>
        <AllCtgr>
          {ctgr.allcategories.map((item) => {
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
