import React, { useRef, useState, useContext } from "react";
import { View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import PhoneInput from "react-native-phone-number-input";
import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import LargBtn from "../atoms/custombutton/LargBtn";
import { login } from "../../helpers/login";
import { PracticeContext } from "../../global/UserContext";

const Container = styled(Screen)``;

const Picture = styled.Image`
  width: 100%;
`;

const Wrapper = styled.ScrollView`
  background-color: #ffffff;
  height: 100%;
`;

const SignInCalidor = styled.View`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MandatoryField = styled.Pressable`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageBox = styled.View``;

const SignIn = () => {
  const { user } = useContext(PracticeContext);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const navigation = useNavigation();

  const onhandlePressValue = async () => {
    const res = await login();

    if (res) {
      navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
      console.log(res);
      console.log(user);
    } else {
      return alert("There is no answer");
    }
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Wrapper>
        <View>
          {valid ? (
            <View>
              <View style={{ alignItems: "center", marginTop: 50 }}>
                <Text
                  type="medium"
                  size={24}
                  color="black-400"
                  style={{ marginBottom: 20 }}
                >
                  Enter your mobile number
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <View>
                <Picture
                  source={require("../../../assets/picture/LoadingScreen.png")}
                />
              </View>
              <SignInCalidor>
                <Text type="bold" size={30} color="black-400">
                  Use your uber account to get started
                </Text>
                {showMessage && (
                  <MessageBox>
                    <Text type="medium" size={14} color="black-400">
                      Value : {value}
                    </Text>
                    <Text type="medium" size={14} color="black-400">
                      Formatted Value : {formattedValue}
                    </Text>
                  </MessageBox>
                )}
              </SignInCalidor>
            </View>
          )}
        </View>
        <MandatoryField
          onPress={
            () => setValid(true)
          }
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="GE"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
          />
          {valid && (
            <View>
              <View>
                <LargBtn title="Next" onPress={() => onhandlePressValue()} />
              </View>
              <View
                style={{ width: 333, borderBottomWidth: 1, paddingBottom: 28 }}
              >
                <Text type="light" color="gray-700" size={14}>
                  By proceeding, you consent to get calls, Whatsapp or SMS
                  messages, including by automated means, from uber and its
                  affiliates to the number provided.
                </Text>
              </View>
            </View>
          )}
        </MandatoryField>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
