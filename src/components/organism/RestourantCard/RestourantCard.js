import { View, Text} from "react-native"
import {
    RestourantContainer,
    Picture,
    Description,
    Title,
    SubTitle,
    Rating} from "./styles"



const RestourantCard = ({restourant}) => {
    return(
            <RestourantContainer>
                <Picture source={{uri: restourant.image}}/>
                    <Description>
                        <View>
                            <Title>{restourant.name}</Title>
                            <SubTitle>$ ${restourant.deliveryFee} &#8226; {restourant.minDeliveryTime}-{restourant.maxDeliveryTime} minutes</SubTitle>
                        </View>
                        <Rating>
                            <Text>{restourant.rating}</Text>
                        </Rating>
                    </Description>
            </RestourantContainer>

    )
}

export default RestourantCard;