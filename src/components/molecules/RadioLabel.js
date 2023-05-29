import { View } from 'react-native'
import React,{ useState } from 'react'
import styled from 'styled-components/native'
// import { RadioButton } from 'react-native-paper';
import RadioForm from "react-native-simple-radio-button";
import Text from "../atoms/fontsText/Text"
import { useEffect } from 'react';



const Container = styled.View`
margin-top: 28px;
`;
const LeftContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const TextWrapper = styled.View `
display: flex;
justify-content: space-evenly;
margin-top: 24px;
`;


const RadioLabel = ({setCollector,arry}) => {
  const [value, setValue] = useState()

  useEffect(() => {
    arry.forEach((item) => {
      if (item.value === value) {
        setCollector(() => parseFloat(item.price));
      }
    });
  }, [value]);
  return (
    <Container>
        <LeftContainer>
          <RadioForm
              radio_props={arry}
              initial={value}
              onPress={(value) => setValue(value)}
              selectedButtonColor="black"
              buttonColor='black'
          />
          <TextWrapper>
          {arry.map((item) => {
          if (item.price > 0) {
            return <Text type="light" color='gray-700' key={item.id}>US${item.price} ea</Text>;
          }
          })}
          </TextWrapper>
        </LeftContainer>  
    </Container>
  )
}

export default RadioLabel