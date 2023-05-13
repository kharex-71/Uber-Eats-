
import styled from "styled-components/native";
import { View, Text, Image, Pressable } from "react-native"


//Home.jsx style start

export const Wrapper = styled.View`
flex: 1;
display: flex;
flex-direction: column;
padding: 10px;
padding-bottom: 172px;
`;
export const Header = styled.View`
height: 250px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

export const BtnsContainer = styled.View`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
margin-top: 8px;
`;



export const Location = styled.Pressable`
display: flex;
justify-content: center;
align-items: center;
`;

export const LocationTitle = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #000000;
`;


export const CategoriesContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

//Home.jsx style AND

//RestourantDetails.jsx style start 

export const DetWrapper = styled.View`
flex: 1;
display: flex;
flex-direction: column;
padding: 10px;
`;

export const HeaderContainer = styled.View`

`;

export const RestName = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #000000;
`;

export const RestInfo = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;

export const Star = styled.Image`
width: 20px;
margin-right: 3px;
`;

export const Info = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #000000;
`;

export const Workinghours = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #545454;
`;

export const BackIcon = styled.Pressable`

`;


export const SectionTitle = styled.Text`
font-weight: 700;
font-size: 24px;
color: #000000;
margin: 18px 0;
`;

export const SectionDeteils = styled.View`
gap: 10px;
`;


export const ToggleButton = styled.View`
background-color: lightgray;
width: 300px;
padding: 4px;
border-radius: 40px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

`;


export const ButtonsContainer = styled.View`
height: 150px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;


//RestourantDetails.jsx style AND

export const CtgrContainer = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding-top: 5px;
background-color: #E5E5E5;
border-radius: 10px;
`;