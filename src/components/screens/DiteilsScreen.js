import { View,Text,Image,FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DiteilsHeader from "../organism/MenuListItem/DiteilsHeader"
import {
    BackIcon,
    DiteilsContainer,
    } from "../organism/RestourantCard/styles";
    
import MenuItem from "../organism/MenuListItem/MenuItem";
import restourants from "../../../assets/data/restaurants.json"


const restourant = restourants[0];
("");


const DiteilsScreen = () => {
    return(
        <DiteilsContainer>
            <FlatList 
                ListHeaderComponent={() => <DiteilsHeader restourant={restourant}/>}
                data={restourant.dishes}
                renderItem={({item})=> <MenuItem menu={item}/>}
                showsVerticalScrollIndicator={false}
            />
            <BackIcon>
                    <Icon 
                    name="arrow-back-circle"
                    size={55}
                    color="white"
                    />
            </BackIcon>
        </DiteilsContainer>
    )
}

export default DiteilsScreen;