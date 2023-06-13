import { Image, View } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Screen from "../atoms/screendimensions/Screen";
import Text from "../atoms/fontsText/Text";
import Map from "../atoms/Map";
import TrackHdrBtn from "../atoms/custombutton/TrackHdrBtn";

const car = require("../../../assets/order/Car.png");
const courier = require("../../../assets/order/Courier.png");
const dish = require("../../../assets/order/dish.png");
const evaluationpage = require("../../../assets/order/Evaluationpage.png");
const person = require("../../../assets/order/person.png");
const likeIcon = require("../../../assets/order/likeIcon.png");
const mobile = require("../../../assets/order/mobile.png");
const preparation = require("../../../assets/order/preparation.png");
const tip = require("../../../assets/order/tip.png");

const Wrapper = styled.View``;
const PageTitle = styled.View`
  margin-bottom: 8px;
`;
const PreparationLineWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;
const PreparationLine = styled.View``;
const AboveLine = styled.View``;
const BelowLine = styled.View`
  margin-bottom: 14px;
`;
const Line = styled.View`
  border-width: 4px;
  border-color: #34a853;
  width: 18%;
  border-radius: 4px;
`;
const LineWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 14px;
  margin-bottom: 18px;
`;
const PageContent = styled.View``;
const ImageContainer = styled.View`
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 65px 50px;
`;
const MapContainer = styled.View`
  width: 100%;
  height: 350px;
`;
const UserWishes = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 37px 16px;
`;
const ImageWrapper = styled.View``;
const UserPicture = styled.View`
  position: absolute;
`;
const RatingBox = styled.View`
  display: flex;
  align-content: center;
  flex-direction: row;
  background-color: #ffffff;
  padding: 3px 8px;
  border-radius: 5px;
  position: absolute;
  left: 6px;
  top: 49px;
`;
const CarPicture = styled.View`
  position: relative;
  top: 20px;
  left: 45px;
`;
const InfoContainer = styled.View`
  background-color: aqua;
  margin-left: 52px;
`;
const BtnBox = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const BtnCall = styled.View``;

const TrackOrder = () => {
  const [preparation, setPreparation] = useState(true);

  useEffect(() => {
    setPreparation(true);
    setTimeout(() => {
      setPreparation(false);
    }, 5000);
  }, []);

  return (
    <Screen>
      {preparation ? (
        <Wrapper>
          <PreparationLineWrapper>
            <PageTitle>
              <Text type="medium" color="black-400" size={24}>
                Preparing your order...
              </Text>
            </PageTitle>
            <PreparationLine>
              <AboveLine>
                <Text type="light" color="black-400" size={12}>
                  Arriving at
                  <Text type="light" color="black-400" size={12}>
                    10:15
                  </Text>
                </Text>
              </AboveLine>
              <LineWrapper>
                <Line />
                <Line />
                <Line />
                <Line />
                <Line />
              </LineWrapper>
              <BelowLine>
                <Text type="light" color="black-400" size={12}>
                  Latest arrival by 10:40
                </Text>
              </BelowLine>
            </PreparationLine>
          </PreparationLineWrapper>
          <PageContent style={{ width: "100%", height: 350 }}>
            <ImageContainer>
              <Image source={evaluationpage} />
            </ImageContainer>
          </PageContent>
          <UserWishes></UserWishes>
        </Wrapper>
      ) : (
        <Wrapper>
          <PreparationLineWrapper>
            <PageTitle>
              <Text type="medium" color="black-400" size={24}>
                Almost there...
              </Text>
            </PageTitle>
            <PreparationLine>
              <AboveLine>
                <Text type="light" color="black-400" size={12}>
                  Arriving at
                  <Text type="light" color="black-400" size={12}>
                    10:15
                  </Text>
                </Text>
              </AboveLine>
              <LineWrapper>
                <Line />
                <Line />
                <Line />
                <Line />
                <Line />
              </LineWrapper>
              <BelowLine>
                <Text type="light" color="black-400" size={12}>
                  Latest arrival by 10:40
                </Text>
              </BelowLine>
            </PreparationLine>
          </PreparationLineWrapper>
          <PageContent style={{ width: "100%", height: 350 }}>
            <MapContainer>
              <Map />
            </MapContainer>
          </PageContent>
          <UserWishes>
            <ImageWrapper>
              <CarPicture>
                <Image source={courier} />
              </CarPicture>
              <UserPicture>
                <Image source={person} />
              </UserPicture>
              <RatingBox>
                <Text type="light" color="gray-700" size={14}>
                  95%
                </Text>
                <Image style={{ resizeMode: "cover" }} source={likeIcon} />
              </RatingBox>
            </ImageWrapper>
            <InfoContainer>
              <Text type="medium" color="black-400">
                Jonathan
              </Text>
            </InfoContainer>
          </UserWishes>
          <BtnBox>
            <TrackHdrBtn iconUrl={mobile} />
            <TrackHdrBtn title="Send a message" />
            <TrackHdrBtn title="Tip" iconUrl={tip} />
          </BtnBox>
        </Wrapper>
      )}
    </Screen>
  );
};

export default TrackOrder;
