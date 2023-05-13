import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
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
  GroupOrder,
  ToggleButton,
} from "./HomeStyled";
import Icon from "react-native-vector-icons/Ionicons";

const data = {
  restourant: {
    name: "REST 1",
    rating: "4.6",
    raitingQuantity: 300,
    workingHours: "Open until 3:00 AM",
    category: "Pizza",
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
  const navigation = useNavigation();
  const rest = data.restourant;
  const stuff = route.params;

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
        <BackIcon>
          <Icon
            name="arrow-back-circle"
            size={55}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </BackIcon>

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
          <BigBtn title="Group order" iconUrl />
          <ToggleButton>
            <BigBtn title="Delivery" subTitle="25-35 min 1.7mi" />
            <BigBtn title="Pickup" subTitle="5-15 min 1.7mi" />
          </ToggleButton>
        </ButtonsContainer>
        <ScrollView>
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
    </Screen>
  );
};

export default RestourantDetails;
