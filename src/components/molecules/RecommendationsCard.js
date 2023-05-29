import { View } from 'react-native'
import React from 'react'
import Text from '../atoms/fontsText/Text'
import styled from 'styled-components/native'
import { AntDesign } from "@expo/vector-icons";



const WrapperBox = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px 25px;
margin: 4px;
background-color: lightgray;
`;
const TextBox = styled.View`
display: flex;
flex-direction: column;
`;
const IconBox = styled.View`
padding-right: 10px;
`;

const RecommendationsCard = ({icon, title, subTitle,price}) => {
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
            {icon && <IconBox>
                <AntDesign name="pluscircleo" size={24} color="black" />
            </IconBox>}
           {price && <Text type="bold" color="gray-700" size={16}>US$ {price}</Text>}
    </WrapperBox>
  )
}

export default RecommendationsCard;