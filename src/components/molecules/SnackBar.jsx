import React, { useEffect } from "react";
import { LogBox } from "react-native";
import Constants from "expo-constants";
import SnackBar from "react-native-snackbar-component";
import styled from "styled-components/native";
import Text from "../atoms/fontsText/Text";
const NOTIFICATION_DISMIS_TIME = 3000;

const SnackBox = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 16px;
`;
const InfoBox = styled.View`
  margin-left: 15px;
`;

const AppSnackBar = (props) => {
  const { text, isError, visible = false, callBack } = props;
  useEffect(() => {
    LogBox.ignoreLogs(["Animated:`useNativeDriver`"]);
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        callBack((prev) => !prev);
      }, NOTIFICATION_DISMIS_TIME);
    }
  }, [visible]);

  const Message = () => {
    return (
      <SnackBox>
        <InfoBox>
          <Text type="medium" color="black-400">
            {isError ? "Success" : "Error"}
          </Text>
          <Text type="medium" color="black-400">
            {text}
          </Text>
        </InfoBox>
      </SnackBox>
    );
  };
  return (
    <SnackBar
      useNativeDriver={true}
      visible={visible}
      backgroundColor="#e10002"
      messageColor="#f2f2f2"
      textMessage={Message}
      messageStyle={{ fontFamily: "medium" }}
      position="top"
      top={Constants.statusBarHeight - 8}
      containerStyle={{
        // marginHorisontal: 22,
        borderRadius: 12,
      }}
    />
  );
};

export default AppSnackBar;
