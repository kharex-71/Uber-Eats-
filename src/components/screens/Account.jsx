import React from "react";
import styled from "styled-components/native";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../atoms/custombutton/Button";
import Screen from "../atoms/screendimensions/Screen";
import SettingsCard from "../organism/SettingsCard";
import * as ROUTES from "../../constants/routes";

const Container = styled(View)`
  flex: 1;
`;

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin: 25px 15px 40px 19px; */
`;

const SettingsContaienr = styled.View`
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const account = [
  {
    id: 0,
    title: "Orders",
    icon: require("../../../assets/account/icons/orders.png"),
  },
  {
    id: 1,
    title: "Your favourites",
    icon: require("../../../assets/account/icons/yourfavourites.png"),
  },
  {
    id: 2,
    title: "Restaurant Rewards",
    value: ROUTES.DEALS_STACK,
    icon: require("../../../assets/account/icons/restourantrewards.png"),
  },
  {
    id: 3,
    title: "Wallet",
    icon: require("../../../assets/account/icons/Wallet.png"),
  },
  {
    id: 4,
    title: "Help",
    icon: require("../../../assets/account/icons/help.png"),
  },
  {
    id: 5,
    title: "Send a gift",
    icon: require("../../../assets/account/icons/sendagift.png"),
  },
  {
    id: 6,
    title: "Promotions",
    value: ROUTES.PROMOTION_DETAILS,
    icon: require("../../../assets/account/icons/promotions.png"),
  },
  {
    id: 7,
    title: "Deliver with Uber",
    icon: require("../../../assets/account/icons/deliverwithuber.png"),
  },
  {
    id: 8,
    title: "Settings",
    value: ROUTES.SETTINGS_DETAILS,
    icon: require("../../../assets/account/icons/settings.png"),
  },
  {
    id: 9,
    title: "About",
  },
];

const Account = () => {
  const navigation = useNavigation();

  const handlePress = (str) => {
    navigation.navigate(str);
  };
  return (
    <Screen>
      <Container>
        <UserContainer>
          <Pressable
            onPress={() => navigation.navigate(ROUTES.SETTINGS_SCREEN)}
          >
            <Image source={require("../../../assets/account/user.png")} />
          </Pressable>
          <Text style={{ marginLeft: 15 }}>John Doe</Text>
        </UserContainer>
        <SettingsContaienr>
          {account.map((item) => {
            return (
              <SettingsCard
                key={item.id}
                title={item.title}
                icon={item.icon}
                onPress={() => handlePress(item.value)}
              />
            );
          })}
        </SettingsContaienr>
      </Container>
    </Screen>
  );
};

export default Account;
