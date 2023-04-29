import { View } from "react-native";
import HeaderBtn from "../../atoms/custombutton/HeaderBtn";
import styled from "styled-components";



const HeaderContainer = styled(View)`
width: 100%;
height: 200px;
`;

const BtnContainer = styled(View)`
align-items: center;
justify-content: space-evenly;
flex-direction: row;
height: 100%;
`;


const HomeHeader = ({navigation}) => {

    
return (
        <HeaderContainer>
            <BtnContainer>
                <HeaderBtn title="Delivery" blck/>
                <HeaderBtn title="Pickup"/>
                <HeaderBtn title="Dine-in"/>
            </BtnContainer>
        </HeaderContainer>
        );
};

export default HomeHeader;
