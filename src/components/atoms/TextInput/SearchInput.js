import { Pressable } from 'react-native'
import styled from 'styled-components/native'
import React,{useState} from 'react'

let search = require("../../../../assets/icon/Vector.png")
let back = require("../../../../assets/icon/backArrow.png")

const Container = styled.View`
width:383px;
height:44px;
border-radius:99px;
background-color: #EEEEEE;
display: flex;
flex-direction: row;
align-items: center;
margin: 0 16px;
`;
const SearchIcon = styled.Image`
margin: 13px;
`;
const Input = styled.TextInput`
width: 95%;
font-size: 16px;
`;

const SearchInput = ({placeholder,value,onChangeText,icon,onPress,...otherProps}) => {
  // const [icon,setIcon] = useState(true)

  
 
  return (
    <Container>
      {icon ? (<SearchIcon source={search}/>) : (<Pressable onPress={onPress}><SearchIcon source={back}/></Pressable>)}
      <Input placeholder={placeholder} value={value} onChangeText={onChangeText} {...otherProps} style={{height: "100%"}}/>
    </Container>
  )
}

export default SearchInput