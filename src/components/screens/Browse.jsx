import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import styled from "styled-components/native";

import { categories } from "../../data/appData";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import BrowseCard from "../organism/BrowseCard";
import SearchInput from "../atoms/TextInput/SearchInput";
import SearchFilter from "../organism/SearchFilter";
import { SectionTitle } from "./HomeStyled";
import { Keyboard } from "react-native";

const Container = styled(Screen)``;
const Wrapper = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;
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
const InputBox = styled.View`
align-items: center;
`;

const Browse = () => {
  const [ctgr, setCtgr] = useState(categories);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     title: "",
  //     headerSearchBarOptions: {
  //       placeHolder: "Search",
  //     },
  //   });
  // }, [navigation]);

  return (
    <Container>
      <InputBox >
       <SearchInput
        placeholder="Food, shopping, drinks, etc"
        value={input}
        onChangeText={(text) => setInput(text)}
        icon={search ? false : true}
        onFocus={() => setSearch(true)}
        onPress={() => setSearch(false)}
       />
      </InputBox>
      {search ? (
        <View>
          <Text
            type="light"
            color="gray-700"
            style={{ marginLeft: 16, marginVertical: 16 }}
          >
            All Categories
          </Text>
          <SearchFilter
            data={ctgr.allcategories}
            input={input}
            setInput={setInput}
          />
        </View>
      ) : (
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
      )}
    </Container>
  );
};

export default Browse;
