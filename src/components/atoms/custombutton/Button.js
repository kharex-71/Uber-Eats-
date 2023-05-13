import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 80%;
  height: 60px;
  background: #54924F;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
`;

const Title = styled.Text`
  color: ${props => props.$light ? "#54924F" : "#C7DAC5"};
  font-size: 28px;
`;

const Button = ({ title, onPress}) => {
  return (
    <Container onPress={onPress} >
      <Title >{title}</Title>
    </Container>
  );
};

export default Button;
