import React, { useEffect, useRef, useState } from "react";
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
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { Portal } from "react-native-portalize";
import Bottom from "../atoms/BottomSheet/Bottom";

const deliveryList = [
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
    promotion: "5 orders until $8 reward",
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
    promotion: "5 orders until $8 reward",
  },
  {
    id: 9,
    title: "Foodilistica",
    imgUrl: require("../../../assets/restourantimg/Foodilistica.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 10,
    title: "Gourmet Burger Kitchen GBK",
    imgUrl: require("../../../assets/restourantimg/GourmetBurgerKitchenGBK.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 11,
    title: "Ice Cream Bar",
    imgUrl: require("../../../assets/restourantimg/IceCreamBar.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 12,
    title: "Mon Cafe Carlo",
    imgUrl: require("../../../assets/restourantimg/MonCafeCarlo.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 13,
    title: "Pret Catte",
    imgUrl: require("../../../assets/restourantimg/PretCatte.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 14,
    title: "Roundeatery",
    imgUrl: require("../../../assets/restourantimg/Roundeatery.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 15,
    title: "Scents Restaurant",
    imgUrl: require("../../../assets/restourantimg/ScentsRestaurant.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 16,
    title: "Steakytreats",
    imgUrl: require("../../../assets/restourantimg/Steakytreats.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 17,
    title: "Wendy’s",
    imgUrl: require("../../../assets/restourantimg/Wendy’s.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
];
const pickUpList = [
  {
    id: 0,
    title: "Ice Cream Bar",
    imgUrl: require("../../../assets/restourantimg/IceCreamBar.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
    distance: "9.4",
  },
  {
    id: 1,
    title: "Round eatery",
    imgUrl: require("../../../assets/restourantimg/Roundeatery.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    distance: "9.4",
  },
  {
    id: 2,
    title: "Almafi VIP",
    imgUrl: require("../../../assets/restourantimg/AlmafiVIP.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    distance: "9.4",
  },
  {
    id: 3,
    title: "BBN Inn",
    imgUrl: require("../../../assets/restourantimg/BBNInn.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
    distance: "9.4",
  },
  {
    id: 4,
    title: "Bellaciasus",
    imgUrl: require("../../../assets/restourantimg/Bellaciasus.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    distance: "9.4",
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
    promotion: "5 orders until $8 reward",
  },
  {
    id: 9,
    title: "Foodilistica",
    imgUrl: require("../../../assets/restourantimg/Foodilistica.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 10,
    title: "Gourmet Burger Kitchen GBK",
    imgUrl: require("../../../assets/restourantimg/GourmetBurgerKitchenGBK.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 11,
    title: "Ice Cream Bar",
    imgUrl: require("../../../assets/restourantimg/IceCreamBar.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 12,
    title: "Mon Cafe Carlo",
    imgUrl: require("../../../assets/restourantimg/MonCafeCarlo.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 13,
    title: "Pret Catte",
    imgUrl: require("../../../assets/restourantimg/PretCatte.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 14,
    title: "Roundeatery",
    imgUrl: require("../../../assets/restourantimg/Roundeatery.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 15,
    title: "Scents Restaurant",
    imgUrl: require("../../../assets/restourantimg/ScentsRestaurant.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 16,
    title: "Steakytreats",
    imgUrl: require("../../../assets/restourantimg/Steakytreats.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 17,
    title: "Wendy’s",
    imgUrl: require("../../../assets/restourantimg/Wendy’s.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
];
const dineInList = [
  {
    id: 0,
    title: "Burgs Restaurant",
    imgUrl: require("../../../assets/restourantimg/BurgsRestourant.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 1,
    title: "Frish Foods",
    imgUrl: require("../../../assets/restourantimg/FrishFood.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 2,
    title: "Rolls ‘n’n Slice",
    imgUrl: require("../../../assets/restourantimg/RollsSlice.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 3,
    title: "Ethipian Sweets",
    imgUrl: require("../../../assets/restourantimg/BBNInn.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 4,
    title: "Ann’s Delicaies",
    imgUrl: require("../../../assets/restourantimg/Doantello.png"),
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
    promotion: "5 orders until $8 reward",
  },
  {
    id: 9,
    title: "Foodilistica",
    imgUrl: require("../../../assets/restourantimg/Foodilistica.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 10,
    title: "Gourmet Burger Kitchen GBK",
    imgUrl: require("../../../assets/restourantimg/GourmetBurgerKitchenGBK.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 11,
    title: "Ice Cream Bar",
    imgUrl: require("../../../assets/restourantimg/IceCreamBar.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 12,
    title: "Mon Cafe Carlo",
    imgUrl: require("../../../assets/restourantimg/MonCafeCarlo.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 13,
    title: "Pret Catte",
    imgUrl: require("../../../assets/restourantimg/PretCatte.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 14,
    title: "Roundeatery",
    imgUrl: require("../../../assets/restourantimg/Roundeatery.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 15,
    title: "Scents Restaurant",
    imgUrl: require("../../../assets/restourantimg/ScentsRestaurant.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 16,
    title: "Steakytreats",
    imgUrl: require("../../../assets/restourantimg/Steakytreats.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: "5 orders until $8 reward",
  },
  {
    id: 17,
    title: "Wendy’s",
    imgUrl: require("../../../assets/restourantimg/Wendy’s.png"),
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
];

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
const categories = [
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
    title: "American",
    imgUrl: require("../../../assets/picture/American.png"),
  },
  {
    id: 5,
    title: "Asian",
    imgUrl: require("../../../assets/picture/Asian.png"),
  },
  {
    id: 6,
    title: "Burger",
    imgUrl: require("../../../assets/picture/Burger.png"),
  },
  {
    id: 7,
    title: "Carribean",
    imgUrl: require("../../../assets/picture/Carribean.png"),
  },
  {
    id: 8,
    title: "Chinese",
    imgUrl: require("../../../assets/picture/Chinese.png"),
  },
  {
    id: 9,
    title: "Dessert",
    imgUrl: require("../../../assets/picture/Dessert.png"),
  },
  {
    id: 10,
    title: "Fast-Foods",
    imgUrl: require("../../../assets/picture/Fast-Foods.png"),
  },
  {
    id: 11,
    title: "Flowers",
    imgUrl: require("../../../assets/picture/Flowers.png"),
  },
  {
    id: 12,
    title: "French",
    imgUrl: require("../../../assets/picture/French.png"),
  },
  {
    id: 13,
    title: "Grocery",
    imgUrl: require("../../../assets/picture/Grocery.png"),
  },
  {
    id: 14,
    title: "Halal",
    imgUrl: require("../../../assets/picture/Halal.png"),
  },
  {
    id: 15,
    title: "Ice-Cream",
    imgUrl: require("../../../assets/picture/Ice-Cream.png"),
  },
  {
    id: 16,
    title: "Indian",
    imgUrl: require("../../../assets/picture/Indian.png"),
  },
  {
    id: 17,
    title: "Retails",
    imgUrl: require("../../../assets/picture/Retails.png"),
  },
  {
    id: 18,
    title: "Takeout",
    imgUrl: require("../../../assets/picture/Takeout.png"),
  },
  {
    id: 19,
    title: "Ride",
    imgUrl: require("../../../assets/picture/Ride.png"),
  },
  {
    id: 20,
    title: "Speciality",
    imgUrl: require("../../../assets/picture/Speciality.png"),
  },
];

const Home = ({ navigation }) => {
  const [data, setdata] = useState([]);
  const [sort, setSort] = useState(0);
  const [loading, setLoading] = useState(true);
  const categorySheetRef = useRef();

  // const waiting = () => {
  //   if (loading) {
  //     return <ActivityIndicator />;
  //   } else {
  //     setLoading(false);
  //   }
  // };

  const fetchData = () => {
    if (sort === 0) {
      setdata(deliveryList);
    } else if (sort === 1) {
      setdata(pickUpList);
    } else if (sort === 2) {
      setdata(dineInList);
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
                        onPress={() =>
                          navigation.navigate(ROUTES.CONVENIENCE_STACK)
                        }
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
            {categories.map((item) => {
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
