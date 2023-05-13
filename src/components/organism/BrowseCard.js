import { Text, View, Image,Pressable } from 'react-native'
import styled from 'styled-components/native';

const Container = styled.Pressable`
width: 166.5px;
height: 140px;
border-width: 1px;
border-color: lightgray;
border-radius: 15px;
margin-top: 16px;
`;
const CardImg = styled.Image`
width: 165px;
`;
const Title = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 16px;
text-align: center;
padding: 3px;
`;

const BrowseCard = ({title,imgUrl,onPress}) => {
  
    return (
      <Container onPress={onPress}>
        <CardImg source={imgUrl}/>
        <Title>{title}</Title>
      </Container>
    )
  
}

export default BrowseCard;