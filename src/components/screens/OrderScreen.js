import { useState } from "react"
import {AntDesign} from "@expo/vector-icons"
import {
    Line,
    OrderContainer,
    OrderName,
    OrderDescription,
    QuantityContainer,
    QuantityNum
    } from "../organism/RestourantCard/styles"
import restourants from "../../../assets/data/restaurants.json"

const order = restourants[0].dishes[0];

const OrderScreen = () => {
    const [quantity, setQuantity] = useState(1);
    
    const Minus = () => {
        if ( quantity > 1) {
            setQuantity( quantity - 1)
        }
    }

    const Plius = () => {
        setQuantity( quantity + 1)
    }


    return(
        <OrderContainer>
            <OrderName>{order.name}</OrderName>
            <OrderDescription>{order.description}</OrderDescription>
            <Line/>
            <QuantityContainer>
                <AntDesign name="minuscircleo" size={50} color="black" onPress={Minus}/>
                <QuantityNum>{quantity}</QuantityNum>
                <AntDesign name="pluscircleo" size={50} color="black" onPress={Plius}/>
            </QuantityContainer>
        </OrderContainer>
    )
}

export default OrderScreen;