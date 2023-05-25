import { View } from 'react-native'
import React,{ useState } from 'react'
import styled from 'styled-components/native'
import Checkbox from 'expo-checkbox';
import Text from "../atoms/fontsText/Text"



const Container = styled.View`
margin-top: 28px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const LeftContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;

const TextWrapper = styled.View `
`;

const SelectBox = styled.View`

`;
const TextBox = styled.View`

`;

const CheckBox = ({text,number,select,setCollector}) => {
    const [isChecked, setChecked] = useState(false);


    const handlePress = () => {
      if (isChecked) {
        setCollector((prev) => prev - parseFloat(number));
      } else if (!isChecked) {
        setCollector((prev) => prev + parseFloat(number));
      }
    }

    
  return (
    <Container>
        <LeftContainer>
        <Checkbox 
                value={isChecked} 
                onValueChange={()=>{
                  handlePress()
                  setChecked(!isChecked)
                }} 
                />
        <TextBox>
        <Text type="Medium" color='black-400' style={{marginLeft: 7}}>{text}</Text>
        {select && <SelectBox>
        <Text type="Light" color='gray-700' style={{marginLeft: 7}}><Text type="Light" color='gray-700'>US$ {select} Select options</Text></Text>
        </SelectBox>}
        </TextBox>
        </LeftContainer>
        {number && 
          <TextWrapper>
            <Text type="Light" color='gray-700'>US$  {number}</Text>
          </TextWrapper>}
      
    </Container>
  )
}

export default CheckBox;