import { View } from "react-native";
import {
    MenuDescription,
    MenuContainer,
    MenuPrice,
    MenuImage,
    MenuName,
    } from "../RestourantCard/styles"


const MenuItem = ({menu}) => {
    return(
        <MenuContainer>
            <View>
                <MenuName>{menu.name}</MenuName>
                <MenuPrice>US $ {menu.price}</MenuPrice>
                <MenuDescription>{menu.description}</MenuDescription>
            </View>
            {menu.image && (
            <MenuImage source={{uri: menu.image}}/>
            )}
        </MenuContainer>
    )
}

export default MenuItem;