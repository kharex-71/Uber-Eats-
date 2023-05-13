import React, {useState} from "react"
import { View, Text} from "react-native"
import {
    RestourantContainer,
    Picture,
    Description,
    Title,
    SubTitle,
    Rating,
    Promotion,
    PromotionText,
    RatingIcon,
    LikePress,
} from "./styles"



const RestourantCard = ({onPress,title,price,imgUrl,deliveryTime,rating,promotion,distance}) => {
    const [isLike,setIsLike] = useState(false)
    const [ratingValue,setRatingValue] = useState(rating)

    function handleLike() {
        if (isLike){
            setRatingValue(ratingValue - 0.1);
            setIsLike(false)
        } else if (!isLike){
            setRatingValue(ratingValue + 0.1);
            setIsLike(true)
        }
    }

    return(<RestourantContainer onPress={onPress}>
                <Picture source={imgUrl}/>
                    <Description>
                        <View>
                            <Title>{title}</Title>
                            {price && (<SubTitle>$ ${price} deliveryFee &#8226; {deliveryTime} min</SubTitle>)}
                            {distance && (<SubTitle> {deliveryTime} min &#8226; {distance}</SubTitle>)}
                        </View>
                        <Rating>
                            <Text>{ratingValue.toFixed(1)}</Text>
                        </Rating>
                    </Description>
                {promotion && (
                <Promotion>
                    <PromotionText>{promotion}</PromotionText>
                </Promotion>)}
                <LikePress onPress={handleLike}>
                    <RatingIcon source={require("../../../assets/icon/ratingIcon.png")}/>
                </LikePress>
            </RestourantContainer>
            )
}

export default RestourantCard;