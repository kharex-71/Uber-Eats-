import { FlatList} from "react-native";
import RestourantCard from "../organism/RestourantCard/RestourantCard";
import restourant from "../../../assets/data/restaurants.json"
import {HomeContainer} from "../organism/RestourantCard/styles";
import HomeHeader from "../organism/homeScreenHeader/HomeHeader"




const HomeScreen = ({navigation}) => {

    
return (
    <HomeContainer style={{marginHorizontal: 10}}>
        <FlatList 
        ListHeaderComponent={HomeHeader}
        data={restourant}
        renderItem={({item})=> <RestourantCard restourant={item}/>}
        showsVerticalScrollIndicator={false}
        />
    </HomeContainer>
        );
};

export default HomeScreen;
