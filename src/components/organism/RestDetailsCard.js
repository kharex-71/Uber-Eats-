import React from "react";
import {
    DetailsContainer,
    LeftContainer,
    RightContainer,
    MealsImages,
    NameOfDish,
    PriceOfMeal,
    RecipeOfDish
} from "./styles"


const RestDetailsCard = ({
    title,
    price,
    recipe,
    imgUrl,
    onPress
}) => {
  return (
    <DetailsContainer onPress={onPress}>
      <LeftContainer>
        {title && <NameOfDish>{title}</NameOfDish>}
        {price && <PriceOfMeal>US${price}</PriceOfMeal>}
        {recipe && <RecipeOfDish>{recipe}</RecipeOfDish>}
      </LeftContainer>
      <RightContainer>
        <MealsImages source={imgUrl}/>
      </RightContainer>
    </DetailsContainer>
  );
};

export default RestDetailsCard;
