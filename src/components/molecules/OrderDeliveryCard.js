import { View } from 'react-native'
import React from 'react'
import Text from '../atoms/fontsText/Text'
import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons';

const WrapperBox = styled.Pressable`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 20px 25px;
border-width: 2px;
border-color: ${({border})=> (border ? "#000000" : "#EEEEEE")};
margin: 2px;
`;
const TextBox = styled.View`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
`;
const IconBox = styled.View`
padding-right: 10px;
`;

const OrderDeliveryCard = ({icon, title, subTitle,price,border,onPress}) => {
  return (
    <WrapperBox border={border} onPress={onPress}>
        <TextBox>
            <View>
                <Text type="medium" color="black-400" size={16}>{title}</Text>
            </View>
            <View>
                <Text type="bold" color="gray-700" size={16}>{subTitle}</Text>
            </View>
        </TextBox>
            {icon && <IconBox>
                <Entypo name="chevron-right" size={24} color="black" />
            </IconBox>}
           {price && <Text type="bold" color="gray-700" size={16}>US$ {price}</Text>}
    </WrapperBox>
  )
}

export default OrderDeliveryCard