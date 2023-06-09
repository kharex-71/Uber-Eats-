import React from "react";
import styled from "styled-components/native";


const Container = styled.Pressable`
width: 167px;
${({light})=> (light ? `background-color: #EEEEEE;` : "")}
border-radius: 99px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;
const Title = styled.Text`
font-weight: 500;
font-size: 14px;
color: #000000;
`;
const SubTitle = styled.Text`
font-weight: 500;
font-size: 14px;
color: #6B6B6B;
`;
const TitleContainer = styled.View`
display: flex;
align-items: center;
justify-content: center;
height:38px;
`;
const Icon = styled.Image``;


const BigBtn = ({title,subTitle,iconUrl,light=false, onPress}) => {
    return(
        <Container onPress={onPress} light={light}>
            {iconUrl && <Icon source={iconUrl}/>}
            <TitleContainer>
                <Title>{title}</Title>
                {subTitle && <SubTitle>{subTitle}</SubTitle>}
            </TitleContainer>
        </Container>
    )
}

export default BigBtn;