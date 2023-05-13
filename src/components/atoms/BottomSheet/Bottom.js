import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components"

const Container = styled(Modalize)`

`;


const Bottom = ({bottomSheetRef, children, modalHeight}) => {
    return(
        <Container ref={bottomSheetRef} modalHeight={modalHeight}>
            {children}
        </Container>
    )
}

export default Bottom;