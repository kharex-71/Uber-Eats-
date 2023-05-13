import styled from 'styled-components/native'
import { Image, Text, View,Pressable } from 'react-native'
import React from 'react'

const Contaienr = styled.Pressable`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const ImageContaienr = styled.View`
margin-right: 16px;
width: 70px;
height: 70px;
border-radius: 35px;
background-color: red;
margin-bottom: 20px;
`;
const Picture = styled.Image`
`;
const DescContaienr = styled.View`
padding-right: 47px;
display: flex;
flex-direction: column;
justify-content: space-around;
border-bottom-width: 1px ;
border-bottom-color: #E8E8E8;
padding-bottom: 25px;
`;
const Title = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #000000;
`;
const Price = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #6B6B6B;
`;
const SubTitle = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #6B6B6B;
`;
const IconContaienr = styled.View`
padding-right: 18px;
`;
const Icon = styled.Image`

`;

const ShopCard = ({imgUrl,title,price,subTitle,iconUrl,onPress}) => {
  return (
    <Contaienr onPress={onPress}>
        <ImageContaienr>
            <Picture source={imgUrl}/>
        </ImageContaienr>
      <DescContaienr>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <SubTitle>{subTitle}</SubTitle>
      </DescContaienr>
      <IconContaienr>
        <Icon source={iconUrl}/>
      </IconContaienr>
    </Contaienr>
  )
}

export default ShopCard

