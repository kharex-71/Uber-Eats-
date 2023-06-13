import { View, Image } from 'react-native'
import React from 'react'
import Text from '../atoms/fontsText/Text'
import styled from 'styled-components/native'


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

const OrderDetailsCard = ({iconLeft,iconRight, address, country,properti}) => {
  return (
    <WrapperBox>
        <IconBox>
                <Image source={iconLeft}/>  
        </IconBox>
        <TextBox>
            <View>
                <Text type="bold" color="black-400" size={16}>{address}</Text>
                {country && <Text type="bold" color="gray-700" size={16}>{country}</Text>}
                {properti && <Text type="medium" color="secondary-600" size={16}>{properti}</Text>}
            </View>
            <IconBox>
                <Image source={iconRight}/>
            </IconBox>
        </TextBox>
    </WrapperBox>
  )
}

export default OrderDetailsCard