import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import {
  getData,
  removeItemValue,
} from "../../helpers/SaveInformationProvided";

let userImgUrl = require("../../../assets/userAcccount.png");
let homeIcon = require("../../../assets/account/icons/Home.png");
let workIcon = require("../../../assets/account/icons/Work.png");
const Container = styled(Screen)``;

const UserHeaderBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 53px;
`;

const SettingsBox = styled.View`
  padding: 21px 7px 16px 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: lightgrey;
`;

const InfoBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoTextBox = styled.View`
  padding-top: 20px;
  padding-left: 20px;
`;

const FooterBox = styled.View``;

const Settings = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation();

  const getUserData = async () => {
    const res = await getData("user");
    if (res) {
      setUser(res);
      return;
    }
  };

  const signOuthandlePress = async () => {
    const res = await removeItemValue("user");
    if (res === true) {
      navigation.navigate(ROUTES.SIGN_IN_STACK);
    } else {
      console.warn("No data was deleted!");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <UserHeaderBox>
        <Image
          source={userImgUrl}
          style={{ width: 90, height: 90, marginTop: 12 }}
        />

        <Text
          type="medium"
          color="black-400"
          size={18}
          style={{ marginTop: 20 }}
        >
          {user ? user.name : "john doe"}
        </Text>
        <Pressable onPress={() => PickImage()}>
          <Text type="medium" color="secondary-600" style={{ marginTop: 15 }}>
            EDIT ACCOUNT
          </Text>
        </Pressable>
      </UserHeaderBox>
      <SettingsBox>
        <Text
          type="medium"
          color="black-400"
          size={18}
          style={{ marginLeft: 3 }}
        >
          Saved places
        </Text>
        <InfoBox>
          <Image source={homeIcon} style={{ marginTop: 8 }} />
          <InfoTextBox>
            <Text type="medium" color="black-400">
              Home
            </Text>
            <Text type="light" color="gray-700" size={12}>
              Add home
            </Text>
          </InfoTextBox>
        </InfoBox>
        <InfoBox>
          <Image source={workIcon} style={{ marginTop: 8 }} />
          <InfoTextBox>
            <Text type="medium" color="black-400">
              Work
            </Text>
            <Text type="light" color="gray-700" size={12}>
              Add work
            </Text>
          </InfoTextBox>
        </InfoBox>
      </SettingsBox>
      <FooterBox>
        <Text
          type="medium"
          color="black-400"
          size={18}
          style={{ marginLeft: 7, paddingTop: 24 }}
        >
          Other options
        </Text>
        <Pressable onPress={signOuthandlePress}>
          <Text
            type="medium"
            color="secondary-600"
            size={18}
            style={{ marginLeft: 7, paddingTop: 24 }}
          >
            Sign Out
          </Text>
        </Pressable>
      </FooterBox>
    </Container>
  );
};

export default Settings;
