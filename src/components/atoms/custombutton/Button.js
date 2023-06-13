import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 80%;
  height: 50px;
  background-color: ${props => props.$light ? "#a9a9a9" : "#1e90ff"} ;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
`;

const Title = styled.Text`
  color: ${props => props.$light ? "#FFFFFF" : "#000000"};
  font-size: 22px;
`;

const Icon = styled.Image`
margin-right: 5px;
`;

const Button = ({ title, onPress, $light,icon}) => {
  return (
    <Container onPress={onPress} $light={$light}>
      {icon && <Icon source={icon}/>}
      <Title >{title}</Title>
    </Container>
  );
};

export default Button;
