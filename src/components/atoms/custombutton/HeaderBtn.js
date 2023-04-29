import styled from "styled-components";
import { View, Text, Pressable } from "react-native";


const Btn = styled(Pressable)`
${({blck}) => (blck ? `background-color: #000000` : "")}
padding: 9px 24px;
border-radius: 23px;
`;

const TitleBtn = styled(Text)`
color: ${({blck}) => (blck ? "#FFFFFF" : "#000000")};
`;

const HeaderBtn = ({title, onPress, blck = false}) => {
    
    return(
        
            <Btn
            blck={blck}
            onPress={onPress}>
                <TitleBtn>{title}</TitleBtn>
            </Btn>
        
    )
}

export default HeaderBtn;