import { View, Text, TextInput } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 258px;
  height: 45px;
  border-color: #54924f;
  border-width: 1px;
  border-radius: 16px;
  padding-left: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

const InputContainer = styled.TextInput``;

const Input = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <Container>
      <InputContainer
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
};

export default Input;
