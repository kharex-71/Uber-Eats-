import { Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
    DescriptionContainer,
    DiteilsContainer,
    DiteilsTitle,
    Line,
    RaitingIcon,
    RestImage,
    Price,
    } from "../RestourantCard/styles";






const DiteilsHeader = ({restourant}) => {
    return(
        <DiteilsContainer>
                <RestImage source={{uri: restourant.image}}/>
                <RaitingIcon>
                    <Icon 
                    name="heart-outline"
                    size={55}
                    color="white"
                    />
                </RaitingIcon>
            <DescriptionContainer>
                <DiteilsTitle>{restourant.name}</DiteilsTitle>
                <Price> $ {restourant.deliveryFee} &#8226; {restourant.minDeliveryTime}-{restourant.maxDeliveryTime} minutes </Price>
            </DescriptionContainer>
            <Line></Line>
            <Text>Menu</Text>
        </DiteilsContainer>
    )
}

export default DiteilsHeader;