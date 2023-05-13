import { View, Text, Pressable,Image} from "react-native"
import styled from "styled-components/native";

const Container = styled.View`
display: flex;
align-items: center;
justify-content: center;
margin: 7px;
`;
const ImageFrame = styled.Pressable`
background: lightgray;
border-radius: 5.17248px;
display: flex;
align-items: center;
justify-content: center;
width: 79px;
height: 73px;
margin-bottom: 2px;
`;

const CategoryCard = ({onPress,title,imgUrl}) => {
    return(
        <Container>
            <ImageFrame onPress={onPress}>
                <Image source={imgUrl}/>
            </ImageFrame>        
            <Text>{title}</Text>
        </Container>
        )
}

export default CategoryCard;