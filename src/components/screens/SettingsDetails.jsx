import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const SettingsContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SettingsDetails = () => {
  return (
    <SettingsContainer>
      <Text>SETTINS DETAILS</Text>
    </SettingsContainer>
  );
};

export default SettingsDetails;
