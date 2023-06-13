import {Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Text from '../atoms/fontsText/Text'

let icon = require("../../../assets/icon/back.png")

const Contaienr = styled.View`
width:100%;
display: flex;
flex-direction: row;
align-items: center;
/* background-color:red; */
/* justify-content: space-between; */
`;
const LeftBox = styled.Pressable`
display: flex;
flex-direction: row;
align-items: center;
`;

const ImgBox = styled.View`
/* width: 20%; */
/* padding: 12px; */
/* display: flex;
align-items: center;
justify-content: center; */
/* padding-bottom: 12px; */
padding-right: 12px;
`;
const RightBox = styled.Pressable`
width: 90%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-top: 12px;
padding-bottom: 12px;
border-bottom-width: 1px ;
border-bottom-color: lightgray;
`;

const CtgrFrame = ({title,imgUrl,onPress}) => {
  return (
    <Contaienr>
        <LeftBox onPress={onPress}>
            <ImgBox>
                <Image source={imgUrl}/>
            </ImgBox>
        </LeftBox>
        <RightBox>
            <Text type="medium" color='black-400'>{title}</Text>
            <Image source={icon}/>
        </RightBox>
    </Contaienr>
  )
}

export default CtgrFrame