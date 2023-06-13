import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  /* background-color: ${({light})=> (light ? "#000000" : "EEEEEE")}; */
  background-color: lightgrey;
  border: ${({light})=> ( light ? "2px" : "0")};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.Text`
  /* color: ${({light})=> (light ? "#FFFFFF" : "#000000")}; */
  color: #000000;
  font-size: 16px;
  padding: 8px 15px;
  font-weight: 600;
`;

const Icon = styled.Image`
${({iconLeft})=> (iconLeft ? "margin-right: 10px;" : "margin-left: 16px;")}
`;

const HeaderBtn = ({ title, onPress, light=false ,iconLeft,iconRight, ...otherProps}) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps} >
      {iconLeft && <Icon source={iconLeft}/>}
      <Title >{title}</Title>
      {iconRight && <Icon source={iconRight}/>}
    </Container>
  );
};

export default HeaderBtn;