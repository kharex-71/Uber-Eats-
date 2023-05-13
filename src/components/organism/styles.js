import { View, Text, Image, Pressable } from "react-native"
import styled from "styled-components/native";


//MainCard.js style start


export const RestourantContainer = styled.Pressable`
width: 100%;
margin-bottom: 10px;
`;
export const Picture = styled.Image`
width: 100%;
margin-bottom: 5px;
`;
export const Promotion = styled.View`
width: 230px;
position: absolute;
top: 20px;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
background-color: #34A853;
`;
export const PromotionText = styled.Text`
padding: 3px 25px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
`;
export const Title = styled.Text`
font-size: 16px;
font-weight: 500;
`;
export const SubTitle = styled.Text`
color: #6B6B6B;
margin-top: 5px;
`;

export const Description = styled.View`
flex-direction: row;
align-items: center;
`;

export const Rating = styled.View`
margin-left: auto;
width: 28px;
height: 28px;
background: lightgrey;
justify-content: center;
align-items: center;
border-radius: 15px;
`;

export const RatingIcon = styled.Image`
`;

export const LikePress = styled.Pressable`
position: absolute;
top: 20px;
right: 35px;
`;

//MainCard.js style AND

// RESTDETAILSCARD.JS start styles

export const DetailsContainer = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`;
export const LeftContainer = styled.View`
width: 70%;
`;
export const RightContainer = styled.View`
margin-left: auto;
`;
export const MealsImages = styled.Image``;

export const NameOfDish = styled.Text`
font-weight: 500;
font-size: 16px;
color: #000000;
`;
export const PriceOfMeal = styled.Text`

font-weight: 400;
font-size: 14px;
color: #000000;
`;
export const RecipeOfDish = styled.Text`
font-weight: 400;
font-size: 14px;
color: #545454;
`;


// RESTDETAILSCARD.JS AND 
// OrderScreen styles Start 

export const OrderContainer = styled.View`
flex:1;
width: 100%;
padding: 60px 10px;
`;

export const OrderName = styled.Text`
font-size: 28px;
font-weight: 600;
`;

export const OrderDescription = styled.Text`
font-size: 16px;
font-weight: 400;
color: gray;
margin: 10px 0 10px 0;
`;

export const QuantityContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 60px;
`;

export const QuantityNum = styled.Text`
font-size: 24px;
font-weight: 500;
padding: 0 20px 0 20px;
`;

// OrderScreen styles AND
