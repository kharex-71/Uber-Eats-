import { View, Image, TextInput, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import styled from "styled-components/native";
import * as ROUTES from "../../constants/routes";
import { useRef, useState } from "react";
import Button from "../atoms/custombutton/Button";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import LargBtn from "../atoms/custombutton/LargBtn";

const Container = styled(Screen)``;

const Picture = styled.Image`
  width: 100%;
  height: 634px;
`;

const Wrapper = styled.ScrollView`
  background-color: #ffffff;
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

const SignIn = ({ navigate }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const navigation = useNavigation();

  const onhandlePressValue = () => {
    if (value === "") {
      return alert("mobile number");
    } else {
      navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
    }
  };

  return (
    <Container>
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
              {/* <View>
                <LargBtn />
              </View> */}
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
                {/* <Button
          title="Welcome!"
          onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
        /> */}
                {showMessage && (
                  <MessageBox>
                    <Text type="medium" size={14} color="black-400">
                      Value : {value}
                    </Text>
                    <Text type="medium" size={14} color="black-400">
                      Formatted Value : {formattedValue}
                    </Text>
                    {/* <Text type="medium" size={14} color="black-400">
                      Valid : {valid ? "true" : "false"}
                    </Text> */}
                  </MessageBox>
                )}
              </SignInCalidor>
            </View>
          )}
        </View>
        <MandatoryField
          onPress={
            () => setValid(true)
            // () => onhandlePressValue()
            // console.log(
            //   ">>>>>>>>>",
            //   value,
            //   ">>>>>>>>>",
            //   formattedValue,
            //   ">>>>>>",
            //   showMessage,
            //   ">>>>>>>>>>>>>>>>>>>>>>>>",
            //   valid,
            //   ">>>>",
            //   phoneInput,
            //   ">>>>>>>>>",
            //   setShowMessage(true),
            // )
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
            // autoFocus
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
