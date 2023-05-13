import { useState } from "react"
import {AntDesign} from "@expo/vector-icons"
import {
    Line,
    OrderContainer,
    OrderName,
    OrderDescription,
    QuantityContainer,
    QuantityNum,
    LargButton,
    LargButtonText
    } from "../organism/RestourantCard/styles"



const OrderScreen = () => {
    const [quantity, setQuantity] = useState(1);
    
    const minus = () => {
        if ( quantity > 1) {
            setQuantity( quantity - 1)
        }
    }

    const plius = () => {
        setQuantity( quantity + 1)
    }

    const total = () => {
        return (order.price * quantity).toFixed(2);
    }


    return(
        <OrderContainer>
            <OrderName>{order.name}</OrderName>
            <OrderDescription>{order.description}</OrderDescription>
            <Line/>
            <QuantityContainer>
                <AntDesign name="minuscircleo" size={50} color="black" onPress={minus}/>
                <QuantityNum>{quantity}</QuantityNum>
                <AntDesign name="pluscircleo" size={50} color="black" onPress={plius}/>
            </QuantityContainer>
            <LargButton>
                <LargButtonText>Add {quantity} to basket &#8226; US$ {total()}</LargButtonText>
            </LargButton>
        </OrderContainer>
    )
}

export default OrderScreen;