import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  width: ${({ light }) => (light ? "266" : "258")};
  height: ${({ light }) => (light ? "52" : "45")};
  background: ${({ light }) => (light ? "#C7DAC5" : "#54924F")};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 14px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#54924F" : "#C7DAC5")};
  font-size: 16px;
`;

const Button = ({ title, onPress, light = false }) => {
  return (
    <Container onPress={onPress} light={light}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default Button;
