import { Pressable, Text, View,Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({light})=> (light ? `border-bottom-width: 5px;` : "")}
  padding:16px;
  width:205px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
`;
const IconContainer = styled.View`
padding-right: 8px;
`;

const DealsBtn = ({onPress,imgUrl,title,light=false,...otherProps}) => {
  return (
  <Container onPress={onPress} light={light} {...otherProps}>
    <IconContainer>
      <Image source={imgUrl}/>
    </IconContainer>
    <Title>{title}</Title>
  </Container>
  )
}

export default DealsBtn;
