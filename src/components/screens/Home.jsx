import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { Portal } from "react-native-portalize";

import Bottom from "../atoms/BottomSheet/Bottom";
import CategoryCard from "../organism/CategoryCard";
import HeaderBtn from "../atoms/custombutton/HeaderBtn";
import Screen from "../atoms/screendimensions/Screen";
import MainCard from "../organism/MainCard";
import * as ROUTES from "../../constants/routes";
import {
  Header,
  Location,
  LocationTitle,
  BtnsContainer,
  CategoriesContainer,
  Wrapper,
  CtgrContainer,
} from "./HomeStyled";
import {
  deliveryList,
  pickUpList,
  dineInList,
  categorie,
} from "../../data/appData";

const Home = ({ navigation }) => {
  const [deli, setDeli] = useState(deliveryList);
  const [pick, setPick] = useState(pickUpList);
  const [dine, setDine] = useState(dineInList);
  const [ctgr, setCtgr] = useState(categorie);
  const [data, setdata] = useState([]);
  const [sort, setSort] = useState(0);
  const [loading, setLoading] = useState(false);
  const categorySheetRef = useRef();

  const categoryBtn = [
    {
      id: 1,
      title: "Convenience",
      imgUrl: require("../../../assets/picture/Convenience.png"),
    },
    {
      id: 2,
      title: "Alcohol",
      imgUrl: require("../../../assets/picture/Alcohol.png"),
    },
    {
      id: 3,
      title: "Pet-Supplies",
      imgUrl: require("../../../assets/picture/Pet-Supplies.png"),
    },
    {
      id: 4,
      title: "More",
      imgUrl: require("../../../assets/picture/Menu.png"),
    },
  ];

  const heandleCtgr = (num) => {
    if (num === 1) {
      navigation.navigate(ROUTES.CONVENIENCE_STACK);
    } else if (num === 4) {
      categorySheetRef.current.open();
    } else {
      alert("no works");
    }
  };

  const fetchData = () => {
    if (sort === 0) {
      setdata(deli);
    } else if (sort === 1) {
      setdata(pick);
    } else if (sort === 2) {
      setdata(dine);
    }
  };

  const handlePress = (value) => {
    setSort(value);
  };
  const btns = [
    {
      value: 0,
      title: "Delivery",
    },
    {
      value: 1,
      title: "Pickup",
    },
    {
      value: 2,
      title: "Dine-in",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 1000);
  }, [sort]);

  return (
    <Screen>
      <Wrapper>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="green"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : (
          <FlatList
            ListHeaderComponent={
              <Header>
                <BtnsContainer>
                  {btns.map((item) => {
                    return (
                      <HeaderBtn
                        key={item.value}
                        title={item.title}
                        onPress={() => handlePress(item.value)}
                        light={item.value === sort ? true : false}
                      />
                    );
                  })}
                </BtnsContainer>
                <Location>
                  <LocationTitle>Now &#8226; London Hall</LocationTitle>
                </Location>
                <CategoriesContainer>
                  {categoryBtn.map((item) => {
                    return (
                      <CategoryCard
                        key={item.id}
                        title={item.title}
                        imgUrl={item.imgUrl}
                        onPress={() => heandleCtgr(item.id)}
                      />
                    );
                  })}
                </CategoriesContainer>
              </Header>
            }
            data={data}
            renderItem={({ item }) => (
              <MainCard
                keyExtractor={(item) => item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                price={sort === 0 ? item.price : ""}
                deliveryTime={item.deliveryTime}
                rating={item.rating}
                promotion={sort === 0 ? item.promotion : ""}
                distance={sort === 1 ? item.distance : ""}
                onPress={() =>
                  navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
                }
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Wrapper>
      <Portal>
        <Bottom bottomSheetRef={categorySheetRef} modalHeight={555}>
          <CtgrContainer>
            {ctgr.map((item) => {
              return (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  imgUrl={item.imgUrl}
                />
              );
            })}
          </CtgrContainer>
        </Bottom>
      </Portal>
    </Screen>
  );
};

export default Home;
