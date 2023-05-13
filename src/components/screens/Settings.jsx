import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import Button from "../../components/atoms/custombutton/Button";

import * as ROUTES from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";

const SettingsContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(Button)``;

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SettingsContainer>
      <Text>SETTINS SCREEN</Text>
      <Btn
        title="go to details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
    </SettingsContainer>
  );
};

export default Settings;
