import { View, Text, Pressable,Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';

const Container = styled.Pressable`
display: flex;
flex-direction: row;
align-items: center;
width: 360px;
height: 56px;
`;

const Title = styled.Text`
font-family: "Medium";
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #000000;
`;

const SubTitle = styled.Text`
font-size: 12px;
color: #6B6B6B
`;
const TextContaienr = styled.View`
margin-left: 28px;
`;
const IconContaienr = styled.View`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
`;

const SettingsCard = ({title,icon,onPress,subtitle}) => {
  return (
    <Container onPress={onPress}>
      <IconContaienr>
      <Image source={icon}/>
      </IconContaienr>
      <TextContaienr>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </TextContaienr>
    </Container>
  )
}

export default SettingsCard