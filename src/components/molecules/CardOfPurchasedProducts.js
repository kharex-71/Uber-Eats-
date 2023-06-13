import { View,Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Text from '../atoms/fontsText/Text'

let promoIcon = require("../../../assets/icon/prmIcon.png")

const WrapperBox = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom-width: 1px;
border-color: #EEEEEE;
padding-bottom: 15px;
`;
const QuantityBox = styled.View`
width: 29px;
height: 29px;
border-radius: 3px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
`;
const InfoBox = styled.View`
padding-left: 13px;
`;
const PriceBox = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;
const LeftBox = styled.View`
display: flex;
flex-direction: row;
`;
const RightBox = styled.View`
align-items: center;
flex-direction: column;
`;

const CardOfPurchasedProducts = ({
    quantity,
    dish = "Cantina Crispy Chicken",
    menu = "6 Wings Side of Celery",
    address = "Ranch Dip",
    price
}) => {
  return (
    <WrapperBox>
        <LeftBox>
        <QuantityBox>
            <Text type="medium" color='black-400'>{quantity}</Text>
        </QuantityBox>
        <InfoBox>
            <Text type="bold" color='black-400'>{dish}</Text>
            <Text type="bold" color='gray-700'>{menu}</Text>
            <Text type="bold" color='gray-700'>{address}</Text>
        </InfoBox>
        </LeftBox>
        <RightBox>
            <PriceBox>
                <Image source={promoIcon} style={{resizeMode: "contain"}}/>
                <Text type="medium" color='black-400'>US$ {price}</Text>
            </PriceBox>
            <Text type="medium" color='black-400'>US$13</Text>
        </RightBox>
    </WrapperBox>
  )
}

export default CardOfPurchasedProducts