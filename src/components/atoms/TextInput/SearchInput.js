import { View, Text,TextInput,Image } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'

const Container = styled.View`
width:383px;
height:44px;
border-radius:99px;
background-color: #EEEEEE;
display: flex;
flex-direction: row;
align-items: center;
`;
const SearchIcon = styled.Image`
margin: 13px;
`;
const Input = styled.TextInput`
width: 95%;
font-size: 16px;
`;

const SearchInput = ({placeholder,value,onChangeText}) => {
  return (
    <Container>
      <SearchIcon source={require("../../../../assets/icon/Vector.png")}/>
      <Input placeholder={placeholder} value={value} onChangeText={onChangeText}/>
    </Container>
  )
}

export default SearchInput