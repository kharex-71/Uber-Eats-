import { Text, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import styled from "styled-components/native";
import * as ROUTES from "../../constants/routes";
import { useState } from "react";
import Button from "../atoms/custombutton/Button";
import Screen from "../atoms/screendimensions/Screen";

const Container = styled(Screen)``;

const Picture = styled(Image)`
  width: 100%;
  height: 634px;
`;

const SignupContainer = styled(View)`
  align-items: center;
  justify-content: space-evenly;
`;

const ContentText = styled(Text)`
  color: #000000;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const SignIn = ({ navigate }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  return (
    <Container>
      <Picture source={require("../../../assets/picture/LoadingScreen.png")} />
      <SignupContainer>
        <ContentText>Use your uber account to get started</ContentText>
        <Button
          title="Welcome!"
          onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
        />
      </SignupContainer>
    </Container>
  );
};

export default SignIn;
