import React from "react";
import styled from "styled-components/native";
import { View,Text,Pressable, Image} from "react-native";


const Container = styled.Pressable`
width: 142px;
background-color: #EEEEEE;
border-radius: 99px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;
const Title = styled.Text`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #000000;

`;
const SubTitle = styled.Text`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #6B6B6B;
`;
const TitleContainer = styled.View`
display: flex;
align-items: center;
justify-content: center;
`;
const Icon = styled.Image``;


const BigBtn = ({title,subTitle,iconUrl}) => {
    return(
        <Container>
            {iconUrl && <Icon source={require("../../../../assets/icon/Group.png")}/>}
            <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </TitleContainer>
        </Container>
    )
}

export default BigBtn;