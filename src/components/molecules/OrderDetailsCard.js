import { View } from 'react-native'
import React from 'react'
import Text from '../atoms/fontsText/Text'
import styled from 'styled-components/native'
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const WrapperBox = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px 25px;
`;
const TextBox = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const IconBox = styled.View`
padding-right: 10px;
`;

const OrderDetailsCard = ({icon, title, country}) => {
  return (
    <WrapperBox>
        <IconBox>
                {icon ? 
                (<Entypo name="location-pin" size={24} color="black" />)
                :
                (<FontAwesome name="user" size={24} color="black" />)}   
        </IconBox>
        <TextBox>
            <View>
                <Text type="bold" color="black-400" size={16}>{title}</Text>
            </View>
            <IconBox>
                <Entypo name="chevron-right" size={24} color="black" />
            </IconBox>
        </TextBox>
    </WrapperBox>
  )
}

export default OrderDetailsCard