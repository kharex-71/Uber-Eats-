import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, Image, Pressable } from "react-native";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import Map from "../atoms/Map";
import RestDetailsCard from "../organism/RestDetailsCard";
import BigBtn from "../atoms/custombutton/BigBtn";
import {
  DetWrapper,
  BackIcon,
  SectionDeteils,
  HeaderContainer,
  RestName,
  RestInfo,
  Star,
  Info,
  Workinghours,
  SectionTitle,
  ButtonsContainer,
  ToggleButton,
} from "./HomeStyled";
import Icon from "react-native-vector-icons/Ionicons";

let userIcone = require("../../../assets/icon/Group.png");

const data = {
  restourant: {
    name: "Lanespan Pizza & Pub",
    address: "Taco Bell (2255 Telegraph Avenue)",
    rating: "4.6",
    price: 10,
    raitingQuantity: 300,
    workingHours: "Open until 3:00 AM",
    imgUrl: require("../../../assets/restourantimg/restDetScreen.png"),
    category: "Pizza",
    recipe:
      "Garlic, olive oil base, mozarella, cremini mushrooms,ricotta,  thyme, white truffle oil. Add arugula for an extra charge",
  },
  mostPopular: [
    {
      id: 1,
      title: "McMushroom Pizza",
      price: "21.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
      imgUrl: require("../../../assets/pizza/McMushroomPizza.png"),
    },
    {
      id: 3,
      title: "MargaritaPizza",
      price: "23.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
      imgUrl: require("../../../assets/pizza/MargaritaPizza.png"),
    },
    {
      id: 2,
      title: "Broken Mush Pizza",
      price: "18.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
      imgUrl: require("../../../assets/pizza/BrokenMushPizza.png"),
    },
    {
      id: 0,
      title: "18” Round Pizza",
      price: "18.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
    },
  ],

  pickedforyou: [
    {
      id: 0,
      title: "Happy birthday Pizza",
      price: "27.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
    },
    {
      id: 1,
      title: "Little Ceasar Salad (Vegan)",
      price: "18.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
    },
    {
      id: 2,
      title: "Rus River Pliny Bottle",
      price: "10.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
    },
    {
      id: 3,
      title: "Rus River Pliny Bottle",
      price: "10.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
    },
  ],
  starters: [
    {
      id: 0,
      title: "Garlic knots",
      price: "Priced by add-ons",
      imgUrl: require("../../../assets/pizza/starters.png"),
    },
  ],
  salads: [
    {
      id: 0,
      title: "Little Ceasar Salad (Vegan)",
      price: "18.00",
      recipe:
        "Little Gems, House Made Vegan Dressing,Croutons, Nutrtional Yeast, Baked Capers",
    },
    {
      id: 1,
      title: "Rocket Salad",
      price: "10.00",
      recipe:
        "Arugula, shaved fennel, vinegar and olive oil, percorino and spanish marcona almonds",
    },
  ],
  ourspecialPizza: [
    {
      id: 0,
      title: "McMushroom Pizza",
      price: "27.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
      imgUrl: require("../../../assets/pizza/McMushroomPizza.png"),
    },
    {
      id: 1,
      title: "Margarita Pizza",
      price: "18.00",
      recipe:
        "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
      imgUrl: require("../../../assets/pizza/MargaritaPizza.png"),
    },
    {
      id: 2,
      title: "Broken Mush Pizza",
      price: "10.00",
      recipe:
        "Whole milk mozarrela pearls,mozarrela, marinara, shaved Parmesan, fresh basil and extra virgin olive oil",
      imgUrl: require("../../../assets/pizza/BrokenMushPizza.png"),
    },
    {
      id: 3,
      title: "Happy birthday Pizza",
      price: "27.00",
      recipe:
        "Whole milk mozarrela pearls,mozarrela, marinara, shaved Parmesan, fresh basil and extra virgin olive oil",
    },
  ],
};

const star = require("../../../assets/icon/star.png");

const RestourantDetails = ({ route }) => {
  const [service, setService] = useState(true);
  const [sort, setSort] = useState(0);
  const navigation = useNavigation();
  const rest = data.restourant;
  const stuff = route.params;
  console.log(stuff);

  const fetchData = () => {
    if (sort === 0) {
      setService(service);
    } else if (sort === 1) {
      setService(service);
    }
  };

  const handlePress = (value) => {
    setSort(value);
    setService(sort);
  };

  const btns = [
    {
      value: 0,
      title: "Delivery",
      subTitle: "25-35 min 1.7mi",
    },
    {
      value: 1,
      title: "Pickup",
      subTitle: "5-15 min 1.7mi",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const calcRaitin = (num) => {
    if (num > 200) {
      return "200 + raiting";
    } else {
      return num;
    }
  };

  return (
    <Screen>
      <DetWrapper>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View>
            {service ? (
              <View>
                <View style={{ marginBottom: 5 }}>
                  <View>
                    <Image source={rest.imgUrl} style={{ width: "100%" }} />
                  </View>
                  <BackIcon>
                    <Icon
                      name="arrow-back-circle"
                      size={55}
                      color="white"
                      onPress={() => navigation.goBack()}
                    />
                  </BackIcon>
                </View>
                <View style={{ width: "100%", height: 188 }}>
                  <Map />
                </View>
              </View>
            ) : (
              <View>
                <View style={{ marginBottom: 5 }}>
                  <View style={{ width: "100%", height: 188 }}>
                    <Map />
                  </View>
                  <BackIcon>
                    <Icon
                      name="arrow-back-circle"
                      size={55}
                      color="black"
                      onPress={() => navigation.goBack()}
                    />
                  </BackIcon>
                </View>
                <View>
                  <Image source={rest.imgUrl} style={{ width: "100%" }} />
                </View>
              </View>
            )}
          </View>
          <HeaderContainer>
            <RestName>{rest.name}</RestName>
            <RestInfo>
              <Star source={star} />
              <Info>
                {rest.rating} ({calcRaitin(rest.raitingQuantity)}) &#8226;{" "}
                {rest.category} &#8226; $$
              </Info>
            </RestInfo>
            <Workinghours>{rest.workingHours}</Workinghours>
          </HeaderContainer>

          <ButtonsContainer>
            <BigBtn title="Group order" iconUrl={userIcone} light />
            <ToggleButton>
              {btns.map((item) => {
                return (
                  <BigBtn
                    key={item.value}
                    title={item.title}
                    subTitle={item.subTitle}
                    onPress={() => handlePress(item.value)}
                    light={item.value === sort ? true : false}
                  />
                );
              })}
            </ToggleButton>
          </ButtonsContainer>
          <SectionDeteils>
            <SectionTitle>Most Popular</SectionTitle>
            {data.mostPopular.map((item) => {
              return (
                <RestDetailsCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  recipe={item.recipe}
                  imgUrl={item.imgUrl}
                  onPress={() =>
                    navigation.navigate(ROUTES.ORDER_SELECTTION, {
                      id: item.id,
                      restourantName: rest.name,
                      price: rest.price,
                      recipe: rest.recipe,
                      address: rest.address,
                    })
                  }
                />
              );
            })}
          </SectionDeteils>
          <SectionDeteils>
            <SectionTitle>Picked for you</SectionTitle>
            {data.pickedforyou.map((item) => {
              return (
                <RestDetailsCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  recipe={item.recipe}
                />
              );
            })}
          </SectionDeteils>
          <SectionDeteils>
            <SectionTitle>Starters</SectionTitle>
            {data.starters.map((item) => {
              return (
                <RestDetailsCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                />
              );
            })}
          </SectionDeteils>
          <SectionDeteils>
            <SectionTitle>Salads</SectionTitle>
            {data.salads.map((item) => {
              return (
                <RestDetailsCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  recipe={item.recipe}
                />
              );
            })}
          </SectionDeteils>
          <SectionDeteils>
            <SectionTitle>Our special Pizza</SectionTitle>
            {data.ourspecialPizza.map((item) => {
              return (
                <RestDetailsCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  recipe={item.recipe}
                  imgUrl={item.imgUrl}
                />
              );
            })}
          </SectionDeteils>
        </ScrollView>
      </DetWrapper>
      <View>
        <View>
          <Pressable style={{ alignItems: "center" }}>
            <Text style={{ color: "#4BA457" }}>
              Save US$25. Conditions apply.
            </Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
};

export default RestourantDetails;
