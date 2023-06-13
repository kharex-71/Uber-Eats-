import { Pressable,Image, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Text from '../atoms/fontsText/Text'
import { AntDesign } from '@expo/vector-icons';

let picture = require("../../../assets/grocery/banana.png")

const Container = styled.View`
display: flex;
align-items: center;
justify-content: center;
margin: 17px 3px 0 3px;
width: 143px;
`;
const PictureBox = styled.View`

`;
const InfoBox = styled.View`
`;
const Addition = styled.Pressable`
width: 35px;
height: 35px;
border-radius: 50%;
border-width: 1px;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: -17px;
right: -28px;
`;

const ProductFramework = ({onPress,title,price,imgUrl}) => {
  return (
    <Container>
        <View style={{marginBottom: "auto"}}>
            <PictureBox>
                <Image source={imgUrl}/>
            </PictureBox>
            <Addition onPress={onPress}>
                <AntDesign name="plus" size={28} color="black"/>
            </Addition>
        </View>
        <InfoBox>
            <Text type="bold" color='black-400'>{title}</Text>
            <Text type="medium" color='black-400'>${price}</Text>
            <Text type="light" color='gray-700'>1 banana</Text>
        </InfoBox>
    </Container>
  )
}

export default ProductFramework