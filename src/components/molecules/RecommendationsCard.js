import { View,Image } from 'react-native'
import React from 'react'
import Text from '../atoms/fontsText/Text'
import styled from 'styled-components/native'
import { AntDesign } from "@expo/vector-icons";

let plius = require("../../../assets/icon/plius.png")

const WrapperBox = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 20px 25px;
margin: 4px;
background-color: #EEEEEE;
`;
const TextBox = styled.View`
display: flex;
flex-direction: column;
`;
const IconBox = styled.Pressable`
padding-right: 10px;
`;

const RecommendationsCard = ({icon, title, subTitle,price,onPress}) => {
  return (
    <WrapperBox>
        <TextBox>
            <View>
                <Text type="medium" color="black-400" size={16}>{title}</Text>
            </View>
            <View>
                <Text type="light" color="secondary-600" size={16}>{subTitle}</Text>
            </View>
        </TextBox>
            {icon && <IconBox onPress={onPress}>
                <Image source={plius}/>
            </IconBox>}
           {price && <Text type="bold" color="gray-700" size={16}>US$ {price}</Text>}
    </WrapperBox>
  )
}

export default RecommendationsCard;