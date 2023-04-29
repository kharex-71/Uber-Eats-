import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 258px;
  height: 45px;
  background: #54924F;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 14px;
`;

const Title = styled.Text`
  color: ${props => props.$light ? "#54924F" : "#C7DAC5"};
  font-size: 16px;
`;

const Button = ({ title, onPress}) => {
  return (
    <Container onPress={onPress} >
      <Title >{title}</Title>
    </Container>
  );
};

export default Button;
