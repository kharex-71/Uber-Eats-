import { View, Text, Image, Pressable } from "react-native"
import styled from "styled-components";


export const HomeContainer = styled(View)`
flex: 1;
align-items: center;
justify-content: center;
background: #F6F6F6;
`;

export const RestourantContainer = styled(View)`
width: 100%;
margin-bottom: 10px;
`;
export const Picture = styled(Image)`
width: 100%;
aspect-ratio: 7/4;
margin-bottom: 5px;

`;
export const Title = styled(Text)`
font-size: 16px;
font-weight: 500;
`;
export const SubTitle = styled(Text)`
color: lightgray;
margin-top: 5px;
`;

export const Description = styled(View)`
flex-direction: row;
align-items: center;
`;

export const Rating = styled(View)`
margin-left: auto;
width: 25px;
height: 25px;
background: lightgrey;
justify-content: center;
align-items: center;
border-radius: 15px;
`;

// diteilsScreen start styles

export const DiteilsContainer = styled(View)`
flex: 1;
`;

export const RestImage = styled(Image)`
width: 100%;
aspect-ratio: 7/4;
margin-bottom: 8px;
`;

export const DiteilsTitle = styled(Text)`
font-size: 36px;
font-weight: 500;
`;

export const Price = styled(Text)`
margin-top: 7px;
font-size: 20px;

`;
export const DescriptionContainer = styled(View)`
margin: 9px;
`;

export const Line = styled(View)`
border: 1px lightgrey;
margin-bottom: 10px;
`;

export const MenuContainer = styled(View)`
margin: 10px 5px 0 5px;
padding: 0 5px 10px 5px;
border-bottom-width: 1px ;
border-bottom-color: lightgrey;
flex-direction: row;
`;

export const MenuImage = styled(Image)`
aspect-ratio: 1;
margin-left: auto;
`;

export const MenuName = styled(Text)`
width: 220px;
font-weight: 500;
font-size: 22px;
color: #000000;
margin-bottom: 5px;
`;

export const MenuPrice = styled(Text)`
font-weight: 400;
font-size: 18px;
color: #000000;
`;
export const MenuDescription = styled(Text)`
width: 220px;
font-weight: 400;
font-size: 14px;
color: #545454;
`;

export const BackIcon = styled(Pressable)`
position: absolute;
top: 49px;
left: 23px;
`;

export const RaitingIcon = styled(Pressable)`
position: absolute;
right: 96px;
top: 49px;
`;


// diteilsScreen AND 
// OrderScreen styles Start 

export const OrderContainer = styled(View)`
flex:1;
width: 100%;
padding: 60px 10px;
`;

export const OrderName = styled(Text)`
font-size: 28px;
font-weight: 600;
`;

export const OrderDescription = styled(Text)`
font-size: 16px;
font-weight: 400;
color: gray;
margin: 10px 0 10px 0;
`;

export const QuantityContainer = styled(View)`
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 60px;
`;

export const QuantityNum = styled(Text)`
font-size: 24px;
font-weight: 500;
padding: 0 20px 0 20px;
`;