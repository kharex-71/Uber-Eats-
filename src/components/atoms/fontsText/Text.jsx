import React from "react";
import styled from "styled-components/native";

const Txt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Bold";
      case "Medium":
        return "Medium";
      case "Regular":
        return "Regular";
      case "Light":
        return "Light";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
  color: ${({ color }) => {
    switch (color) {
      case "secondary-600":
        return "#2F994C";
      case "primary-600":
        return "#44954F";
      case "white-700":
        return "#B5B5B5";
      case "black-400":
        return "#333333";
      case "gray-700":
        return "#A9A9A9";
      case "blue-800":
        return "#153D85";
    }
  }};
`;

const Text = ({ children, type, size, color = "#000000", ...otherProps }) => {
  return (
    <Txt type={type} size={size} color={color} {...otherProps}>
      {children}
    </Txt>
  );
};

export default Text;
