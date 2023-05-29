import styled from "styled-components/native";

const Container = styled.Pressable`
  background: ${({light})=> (light ? "#000000" : "#EEEEEE")};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.Text`
  color: ${({light})=> (light ?  "#EEEEEE" : "#000000" )};
  font-size: 16px;
  padding: 8px 20px ;
  
`;

const Icon = styled.Image`
${({iconLeft})=> (iconLeft ? "margin-right: 10px;" : "margin-left: 16px;")}
`;

const HeaderBtn = ({ title, onPress, light=false,iconLeft,iconRight, ...otherProps}) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps} >
      {iconLeft && <Icon source={iconLeft}/>}
      <Title >{title}</Title>
      {iconRight && <Icon source={iconRight}/>}
    </Container>
  );
};

export default HeaderBtn;